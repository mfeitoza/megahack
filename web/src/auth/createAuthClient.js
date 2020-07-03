export default function createAuthClient(client) {
  return {
    type: 'firebase',
    client,
    restoreAuthState: () => client.auth().getRedirectResult(),
    login: async (email, password) => {
      return client.auth().signInWithEmailAndPassword(email, password)
    },
    logout: () => client.auth().signOut(),
    getToken: async () => client.auth().currentUser?.getIdToken() ?? null,
    getUserMetadata: async () => client.auth().currentUser,
  }
}
