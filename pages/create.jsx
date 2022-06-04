import React, {useState} from 'react'
import BaseTitle from '../components/baseTitle/BaseTitle'
import MainButton from '../components/mainButton/MainButton'
import BaseLayout from '../layouts/BaseLayout'
import Image from 'next/image';
import { CreateContainer, CreateContent } from './styles/create'
import { useAuth } from '../context/AuthContext';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../config/firebase';

const Create = () => {
  const image = require("../public/images/undraw_Compose_music_re_wpiw.svg");
  const {user} = useAuth();
  const [file, setFile] = useState('');
  const [progress, setProgress] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    const storageRef = ref(storage, `/songs/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(progress);
    }, (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
      .then(url => console.log(url))
    }
    )
  }

  const handleFile = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  }
  return (
    <>
      {user &&
        <BaseLayout>
          <CreateContainer>
            <BaseTitle title={'sound'} subtitle={'create'}/>
            <CreateContent>
              <form onSubmit={handleSubmit}>
                <label>Song name</label>
                <input
                  type='text'
                  placeholder='songname'
                />
                <label>Song file</label>
                <input
                  onChange={handleFile}
                  type='file'
                  placeholder='examplefile.mp3'
                />
                <label>Song cover</label>
                <input
                  type='file'
                  placeholder='examplefile.mp3'
                />
                <MainButton>Upload!</MainButton>
                <span>{progress} %</span>
              </form>
              <section>
                <Image
                  alt="image"
                  src={image}
                  objectFit={'cover'}
                />
              </section>
            </CreateContent>
          </CreateContainer>
        </BaseLayout>
      }
      {user === null &&
        <BaseLayout>
          <h3>Sign up to upload a song.</h3>
        </BaseLayout>
      }
    </>
  )
}

export default Create