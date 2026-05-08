import { auth } from './firebase';

describe('Mock Firebase Auth', () => {
  test('should sign in with correct credentials', async () => {
    const user = await auth.signInWithEmailAndPassword('user@example.com', 'password');
    expect(user.email).toBe('user@example.com');
  });

  test('should throw error with incorrect credentials', async () => {
    await expect(auth.signInWithEmailAndPassword('wrong@email.com', 'wrong'))
      .rejects.toThrow('Invalid credentials');
  });

  test('should sign out successfully', async () => {
    await auth.signOut();
    expect(auth.currentUser).toBeNull();
  });
});
