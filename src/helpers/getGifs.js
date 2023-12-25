 export const getGifs = async(nombre)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uZ5Z9l7htUbsliXk6BvYi9Mu26nqINmU&q=${nombre}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs

}