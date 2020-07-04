import { AuthenticationError, context } from '@redwoodjs/api'
import * as admin from 'firebase-admin'

import { db } from 'src/lib/db'

import serviceAccount from './serviceAccountKey.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://megahack-84970.firebaseio.com',
})

export const getCurrentUser = async (auth) => {
  const token = typeof auth === 'string' ? auth : auth.token
  if (!token) {
    throw new AuthenticationError('Uh, oh')
  }
  const decodedToken = await admin.auth().verifyIdToken(token)
  return db.user.findOne({
    where: { email: decodedToken.email },
    include: {
      company: true,
    },
  })
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.
export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError()
  }
}
