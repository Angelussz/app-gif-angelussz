import React, { useEffect,useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({nombre}) => {
  const {images,isLoading} = useFetchGifs(nombre);
  // console.log(isLoading)
  // console.log(images)
  // const [images, setImages] = useState([]);
  // const getImages = async()=>{
  //   const newImages = await getGifs(nombre);
  //   setImages(newImages)
  // }
  //   useEffect(()=>{
  //       getImages();
  //   },[ ])
  return (
    <>
        <h3>
            {nombre}
        </h3>
        {isLoading && (<h2>Cargando ...</h2>)}
        <div className='card-grid'>
          {
            images.map(image => <GifItem key={image.id} {...image} />)
          }
        </div>
    </>
  )
}
