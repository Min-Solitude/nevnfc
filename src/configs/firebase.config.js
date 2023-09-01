// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyBAv8t3n638aVlPckgTrHQ18cYZCO7SpZ0',
    authDomain: 'nevnfc.firebaseapp.com',
    projectId: 'nevnfc',
    storageBucket: 'nevnfc.appspot.com',
    messagingSenderId: '410400568414',
    appId: '1:410400568414:web:51eb696432c64992a4b0cf',
    measurementId: 'G-ML1N8TK78B'
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const provider = new GoogleAuthProvider()
const db = getFirestore()
const storage = getStorage()

export { provider, db, storage }
