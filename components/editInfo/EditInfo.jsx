import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, {useEffect, useState} from 'react'
import { db, storage } from '../../config/firebase';
import { Progress } from '../../pageStyles/create';
import MainButton from '../mainButton/MainButton';
import SubTitle from '../subTitle/SubTitle';
import { FormStyle } from './style';

const EditInfo = ({user}) => {
  const artistColRef = collection(db, 'artists');
  const [currentArtist, setCurrentArtist] = useState();
  const [artistName, setArtistName] = useState();
  const [description, setDescription] = useState();
  const [artistImage, setArtistImage] = useState();
  const [fileProgress, setFileProgress] = useState(0);
  const [artistImageUrl, setArtistImageUrl] = useState();

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

    if (artistImage) {
      handleFileUpload();
    }
    if (!artistImage) {
      handleInfoUpdate();
    }
  }

  const handleFileUpload = () => {
    const storageRef = ref(storage, `/artistCovers/${artistImage.name}`);
    const uploadTask = uploadBytesResumable(storageRef, artistImage);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setFileProgress(progress);
    }, (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
      .then(url => setArtistImageUrl(url))
    }
    )
  }

  const handleInfoUpdate = () => {
    const artistRef = doc(db, 'artists', currentArtist[0].id);
    setDoc(artistRef, {
      artistName: artistName ? artistName : currentArtist[0].artistName,
      userId: user.uuid,
      artistCover: currentArtist[0].artistCover ? currentArtist[0].artistCover : null,
      description: description ? description : 'This artist has no description yet...'
    })
  }

  useEffect(() => {
    if (artistImageUrl) {
      const artistRef = doc(db, 'artists', currentArtist[0].id);
      setDoc(artistRef, {
        artistName: artistName ? artistName : currentArtist[0].artistName,
        userId: user.uuid,
        artistCover: artistImageUrl ? artistImageUrl : null,
        description: description ? description : 'This artist has no description yet...'
      })
    } 
  }, [artistImageUrl])

  const handleFile = (e) => {
    e.preventDefault();
    setArtistImage(e.target.files[0]);
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
        <label>Artist image</label>
        <input
          onChange={handleFile}
          type='file'
          placeholder='Artist image...'
          accept='.png, .jpg, .jpeg'
        />
        <MainButton>Update profile</MainButton>
        {
          fileProgress > 0 &&
          <Progress value={fileProgress} max={100}/>
        }
        {
          fileProgress === 100 &&
          <p>File uploaded!</p>
        }
      </FormStyle>
    </div>
  )
}

export default EditInfo