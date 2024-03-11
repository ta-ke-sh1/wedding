
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAqJjX5cyg4engd16MNphZTLNIGRaNhjAI",
    authDomain: "wedding-c0584.firebaseapp.com",
    projectId: "wedding-c0584",
    storageBucket: "wedding-c0584.appspot.com",
    messagingSenderId: "755207009477",
    appId: "1:755207009477:web:d4b149a632c88f7af02cac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class FirebaseService {

    constructor() {
    }

    async getAllInvitations() {
        let snapshots = await getDocs(collection(db, "Invitations"))
        return snapshots.docs.map((doc => doc.data())) ?? []
    }

    async getReplyById(id) {
        let snapshot = await getDoc(collection(db, "Invitations", id))
        if (snapshot.exists()) {
            return snapshot.data()
        } else {
            console.log("No such document! " + id);
            return null;
        }
    }

    async addReply(reply) {
        const docRef = await addDoc(collection(db, "Invitations"), {
            ...reply
        })
        console.log("Document written with ID: ", docRef.id);
    }

    async editReply(id, reply) {
        const docRef = await updateDoc(collection(db, "Invitations", id), reply)
        console.log("Document edited with ID: ", docRef.id);
    }

    async deleteReply(id) {
        const docRef = await deleteDoc(collection(db, "Invitations", id))
        console.log("Document deleted with ID: ", docRef.id);
    }
}