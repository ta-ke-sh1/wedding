import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAqJjX5cyg4engd16MNphZTLNIGRaNhjAI",
  authDomain: "wedding-c0584.firebaseapp.com",
  projectId: "wedding-c0584",
  storageBucket: "wedding-c0584.appspot.com",
  messagingSenderId: "755207009477",
  appId: "1:755207009477:web:d4b149a632c88f7af02cac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class FirebaseService {
  constructor() {}

  async getAllInvitations() {
    let snapshots = await getDocs(collection(db, "Invitations"));
    return (
      snapshots.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      }) ?? []
    );
  }

  async getReplyById(id) {
    let snapshot = await getDoc(doc(db, "Invitations", id));
    if (snapshot.exists()) {
      return {
        id: id,
        ...snapshot.data(),
      };
    } else {
      return null;
    }
  }

  async addReply(reply) {
    try {
      const docRef = await addDoc(collection(db, "Invitations"), {
        ...reply,
      });
      return docRef.id;
    } catch (e) {
      return -1;
    }
  }

  async editReply(id, reply) {
    await updateDoc(doc(db, "Invitations", id), reply);
  }

  async deleteReply(id) {
    await deleteDoc(doc(db, "Invitations", id));
  }
}
