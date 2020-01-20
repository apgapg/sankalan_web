import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
    .initializeApp({ projectId: 'sankalan-139c9' })
    .firestore()
