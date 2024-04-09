import React , {useState} from 'react'
import axios from 'axios'

const RandomDogs = () => {
  const [imageUrl , setInmageUrl] = useState('');

  const fetchImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      setInmageUrl(response.data.message);
    })
    .catch(e =>{
      console.e('Error fetched' , e);
      setInmageUrl('');
    })
  }

  return (
    <div className='RandomDogs'>
     <button onClick={fetchImage}>Fetch!</button>
     {imageUrl && <img src = {imageUrl} alt = "A random Dog" style = {{maxWidth: '90%' , marginTop: '20px'}} />}
    </div>
  )
}

export default RandomDogs
