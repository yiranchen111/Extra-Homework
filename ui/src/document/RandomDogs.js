import React , {useState} from 'react'
import axios from 'axios'
import './RandomDogs.css';

const RandomDogs = () => {
  const [imageUrl , setImageUrl] = useState('');

  const fetchImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      setImageUrl(response.data.message);
    })
    .catch(e => {
      console.error('Error fetched' , e);
      setImageUrl('');
    })
  }

  return (
    <section className='RandomDogs'>
      <header>
        <h1>Click Button to Show a random dog</h1>
      </header>
      <button onClick={fetchImage}>Fetch</button>
      {imageUrl && <img src = {imageUrl} alt = "A random Dog" />}
    </section>
  )
}

export default RandomDogs
