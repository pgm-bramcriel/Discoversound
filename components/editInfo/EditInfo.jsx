import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import { db } from '../../config/firebase';
import MainButton from '../mainButton/MainButton';
import SubTitle from '../subTitle/SubTitle';
import { FormStyle } from './style';

const EditInfo = ({user}) => {
  const artistColRef = collection(db, 'artists');
  const [currentArtist, setCurrentArtist] = useState();
  const [artistName, setArtistName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    getDocs(artistColRef)
    .then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({...doc.data(), id: doc.id})
      })
      data = data.filter((artist) => {
        return artist.userId === user.uuid;
      });
      setCurrentArtist(data);
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const artistRef = doc(db, 'artists', currentArtist[0].id);
    setDoc(artistRef, {
      artistName: artistName ? artistName : currentArtist[0].artistName,
      userId: user.uuid,
      description: description ? description : 'This artist has no description yet...'
    })
  }

  return (
    <div>
      <SubTitle>Edit your profile</SubTitle>
      <FormStyle onSubmit={handleSubmit}>
        <label>Artist name</label>
        <input
          onChange={(e) => setArtistName(e.target.value)}
          type='text'
          placeholder='New artist name...'
        />
        <label>Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type='text'
          placeholder='New description...'
        />
        <MainButton>Update profile</MainButton>
      </FormStyle>
    </div>
  )
}

export default EditInfo