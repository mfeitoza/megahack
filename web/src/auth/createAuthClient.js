export default function createAuthClient(client) {
  return {
    type: 'firebase',
    client,
    restoreAuthState: () => client.auth().getRedirectResult(),
    login: ({ email, password }) => {
      console.log(email, password)
      return client.auth().signInWithEmailAndPassword(email, password)
    },
    signin: ({ email, password }) => {
      return client.auth().createUserWithEmailAndPassword(email, password)
    },
    logout: () => client.auth().signOut(),
    getToken: async () => client.auth().currentUser?.getIdToken() ?? null,
    getUserMetadata: async () => client.auth().currentUser,
  }
}
