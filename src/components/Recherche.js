import React, { useContext, useState } from 'react'
import { Context } from '../utils/Context'
import './Recherche.css'
import Cards from './Cards'
function Recherche() {
  const { spotifyApi, token } = useContext(Context),                
    [search, setSearch] = useState([])

  const handlequery = (e) => {
    const query = e.target.value
    // console.log("query",query);
    spotifyApi.setAccessToken(token)
    spotifyApi.searchTracks(query).then(res => {
      // console.log("resultat", res);
      setSearch(res.tracks.items)

    })
     .catch(err => console.error(err))
  }
  console.log("res",search);
  return (
    <div className='container--body-search'>
      <div className='container-search'>
        <img src='Vector (3).png' />
        <input type="text" onChange={handlequery} />
      </div>

      <div className='searchMusic'>
        {search.map(data => {
          return (
            <Cards 
            img={data.album.images[0].url}
            name={data.name} 
            uri={data.uri}
            
            />
          )
        })}

      </div>

    </div>
  )
}

export default Recherche
