import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const colRef = collection(db, 'artists');

const getArtists = async () => {
  getDocs(colRef)
  .then((snapshot) => {
    let data = [];
    snapshot.docs.forEach((doc) => {
      data.push({...doc.data(), id: doc.id})
    })
    console.log(data);
  })
}

export {getArtists};