# WorkLin Setup Guide

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable the following services:
   - **Authentication**: Enable Email/Password and Google providers
   - **Firestore Database**: Create database in production mode (we'll add rules later)
   - **Storage**: Enable Firebase Storage
   - **Cloud Functions**: (Optional, for advanced features)

3. Copy your Firebase configuration:
   - Go to Project Settings > General
   - Scroll to "Your apps" section
   - Copy the config values

4. Create `.env` file:
   ```bash
   cp env.example .env
   ```

5. Add your Firebase config to `.env`:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=your-app-id
   VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### 3. Firestore Security Rules

Create `firestore.rules` in your Firebase project:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Workspaces
    match /workspaces/{workspaceId} {
      allow read, write: if request.auth != null && 
        (request.auth.uid == resource.data.ownerId || 
         request.auth.uid in resource.data.members);
    }
    
    // Pages
    match /pages/{pageId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.createdBy;
    }
    
    // Blocks
    match /blocks/{blockId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 4. Storage Security Rules

Create `storage.rules` in your Firebase project:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /workspaces/{workspaceId}/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Next Steps

1. **For Contributors**: Check [GITHUB_ISSUES.md](GITHUB_ISSUES.md) for 30 open issues
2. **For Maintainers**: Review the codebase structure and set up CI/CD
3. **For Users**: Start creating your first workspace!

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify your `.env` file has correct values
- Check Firebase console for API restrictions
- Ensure Firestore and Storage are enabled

### Build Errors
- Run `npm install` again
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

### TypeScript Errors
- Run `npm run lint` to see all errors
- Ensure all dependencies are installed

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [TipTap Documentation](https://tiptap.dev)
- [ShadCN UI Documentation](https://ui.shadcn.com)
- [Zustand Documentation](https://zustand-demo.pmnd.rs)
