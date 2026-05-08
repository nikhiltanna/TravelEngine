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

export const auth = {
  currentUser: null,
  signInWithEmailAndPassword: async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    auth.currentUser = { ...mockUser, email };
    return { user: auth.currentUser };
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
