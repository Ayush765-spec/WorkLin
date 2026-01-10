import React, { useState, useRef, useEffect } from 'react';
import { Block as BlockType } from '../types/workspace';
import { Trash2, GripVertical } from 'lucide-react';
import { BlockTypeSelector } from './BlockTypeSelector';
import { motion } from 'framer-motion';

interface BlockProps {
  block: BlockType;
  onUpdate: (updates: Partial<BlockType>) => void;
  onDelete: () => void;
  onAddBlock: () => void;
}

export const Block: React.FC<BlockProps> = ({
  block,
  onUpdate,
  onDelete,
  onAddBlock,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current instanceof HTMLTextAreaElement) {
        inputRef.current.setSelectionRange(
          inputRef.current.value.length,
          inputRef.current.value.length
        );
      }
    }
  }, [isEditing]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setIsEditing(false);
      onAddBlock();
    }
    if (e.key === 'Backspace' && inputRef.current) {
      const input = inputRef.current instanceof HTMLTextAreaElement 
        ? inputRef.current 
        : (inputRef.current as HTMLInputElement);
      const value = input.value;
      
      // Delete block if field is empty (works whether editing or not)
      // This matches Notion's behavior: empty block + Backspace = delete block
      if (value === '') {
        e.preventDefault();
        onDelete();
      }
    }
  };

  // Get text value - support both content (HTML) and text (plain) for backward compatibility
  const getTextValue = () => {
    if (block.text !== undefined) {
      return block.text;
    }
    // Extract plain text from HTML content if available
    if (block.content) {
      const div = document.createElement('div');
      div.innerHTML = block.content;
      return div.textContent || '';
    }
    return '';
  };

  const updateText = (newText: string) => {
    // Update both text and content for compatibility
    onUpdate({ 
      text: newText,
      content: newText, // Simple text for now, can be enhanced with HTML later
    });
  };

  const renderContent = () => {
    const commonClasses = 'w-full bg-transparent focus:outline-none resize-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600';
    const textValue = getTextValue();

    switch (block.type) {
      case 'heading1':
        return (
          <input
            ref={inputRef as React.Ref<HTMLInputElement>}
            type="text"
            value={textValue}
            onChange={(e) => updateText(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            placeholder="Heading 1"
            className={`${commonClasses} text-3xl font-bold mt-1 mb-2`}
          />
        );
      case 'heading2':
        return (
          <input
            ref={inputRef as React.Ref<HTMLInputElement>}
            type="text"
            value={textValue}
            onChange={(e) => updateText(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            placeholder="Heading 2"
            className={`${commonClasses} text-2xl font-semibold mt-1 mb-2`}
          />
        );
      case 'heading3':
        return (
          <input
            ref={inputRef as React.Ref<HTMLInputElement>}
            type="text"
            value={textValue}
            onChange={(e) => updateText(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            placeholder="Heading 3"
            className={`${commonClasses} text-xl font-semibold mt-1 mb-2`}
          />
        );
      case 'bulleted-list':
        return (
          <div className="flex gap-3 items-start group/list">
            <span className="text-gray-400 dark:text-gray-600 mt-2 text-lg leading-none select-none">•</span>
            <input
              ref={inputRef as React.Ref<HTMLInputElement>}
              type="text"
              value={textValue}
              onChange={(e) => updateText(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
              placeholder="List item"
              className={`${commonClasses} flex-1`}
            />
          </div>
        );
      case 'checkbox':
        return (
          <div className="flex gap-3 items-start">
            <input
              type="checkbox"
              checked={block.checked || false}
              onChange={(e) => onUpdate({ checked: e.target.checked })}
              className="mt-2 cursor-pointer w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
            />
            <input
              ref={inputRef as React.Ref<HTMLInputElement>}
              type="text"
              value={textValue}
              onChange={(e) => updateText(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
              placeholder="Todo item"
              className={`${commonClasses} flex-1 ${
                block.checked ? 'line-through text-gray-400 dark:text-gray-600' : ''
              }`}
            />
          </div>
        );
      default:
        return (
          <textarea
            ref={inputRef as React.Ref<HTMLTextAreaElement>}
            value={textValue}
            onChange={(e) => updateText(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            placeholder="Type '/' for commands"
            rows={1}
            className={`${commonClasses} text-base leading-relaxed min-h-[1.5rem]`}
            style={{ overflow: 'hidden', resize: 'none' }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = target.scrollHeight + 'px';
            }}
          />
        );
    }
  };

  return (
    <div
      className="group/block relative flex items-start gap-2 py-1 px-1 -mx-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Drag Handle & Controls */}
      <div className={`flex items-center gap-1 opacity-0 group-hover/block:opacity-100 transition-opacity ${isHovered ? 'opacity-100' : ''}`}>
        <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400">
          <GripVertical size={14} />
        </button>
        <BlockTypeSelector
          currentType={block.type}
          onChange={(type) => onUpdate({ type })}
        />
        <button
          onClick={onDelete}
          className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors text-gray-400 hover:text-red-600 dark:hover:text-red-400"
          aria-label="Delete block"
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0" onClick={() => !isEditing && setIsEditing(true)}>
        {renderContent()}
      </div>
    </div>
  );
};
