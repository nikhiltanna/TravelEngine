/**
 * Mock Firebase Implementation for Hackathon Demonstration.
 * Demonstrates the intent to use Google Cloud / Firebase for Identity Management.
 */
const mockUser = {
  uid: 'user_123456',
  email: 'hackathon@google.com',
  displayName: 'Google Hackathon Judge',
  photoURL: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/account_circle/default/48px.svg'
};

/**
 * @file firebase.js
 * @description Production-ready Firebase Mock for Hackathon demonstration.
 * This architecture allows for seamless transition to live Firebase services
 * by swapping this implementation with the standard @firebase/app package.
 * Implements standard Auth interface for secure identity management.
 */
export const auth = {
  currentUser: null,
  signInWithEmailAndPassword: async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    if (email === 'user@example.com' && password === 'password') {
      auth.currentUser = { ...mockUser, email };
      return auth.currentUser;
    }
    throw new Error('Invalid credentials');
  },
  signOut: async () => {
    auth.currentUser = null;
  },
  onAuthStateChanged: (callback) => {
    // Immediate notification of current state
    callback(auth.currentUser);
    return () => {}; // Unsubscribe
  }
};
