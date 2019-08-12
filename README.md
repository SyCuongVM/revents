## Hosting URL:
https://revents-a832b.firebaseapp.com
## Firebase Cloud Functions:
1. npm i -g firebase-tools
2. firebase login (logout)
3. firebase init:
    1. Functions + Hosting
4. firebase deploy --only functions

## VS Code Extensions:
1. Auto Rename Tag
2. Better Comments
3. Bracket Pair Colorizer
4. Color Hightlight
5. Debugger for Chrome
6. ES7 React/Redux/GraphQL/React-Native snippets
7. ESLint
8. Identicator
9. Live Server
10. Node.js Modules Intellisense
11. npm Intellisense
12. Path Intellisense
13. Prettier - Code formatter
14. Prettier Now
15. React Native Snippet
16. TODO Highlight

## Firestore Rules:
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
    }
    // allow users to write to their own profiles
    match /users/{userId} {
      allow read: if request.auth.uid != null;
      allow write: if request.auth.uid == userId;
      match /{allSubcollections=**} {
      	allow read;
      	allow write: if request.auth.uid == userId;
      }
    }
    match /events/{eventId} {
      allow read;
      allow create: if request.auth.uid != null;
      allow write: if request.auth.uid != null 
      	&& (('attendees.' + request.auth.uid) in request.writeFields);
      allow update: if resource.data.hostUid == request.auth.uid;
    }
    match /event_attendee/{allDocs=**} {
      allow read, write: if request.auth.uid != null;
    }
    match /activity/{allDocs=**} {
      allow list: if request.query.limit <= 5;
    }
  }
}

## Storage Rules:
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
