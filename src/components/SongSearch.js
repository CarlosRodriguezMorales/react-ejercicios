import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { SongDetails } from './SongDetails';
import { SongForm } from './SongForm';
import { helpHttp } from '../helpers/helpHttp';

const SongSerch = () => {
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const handleSaerch = (data)=>{
        //console.log(data)
        setSearch(data)
    }

    useEffect(() => {
        if(search===null) return;

        const fetchData = async ()=>{
            const { artist, song } = search;

            let artisUrl=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
            let songUrl=`https://api.lyrics.ovh/v1/${artist}/${song}`

            console.log(artisUrl, songUrl)

            setLoading(true)

            const [artistRes, songRes]= await Promise.all([
                helpHttp().get(artisUrl),
                helpHttp().get(songUrl)
            ])

            console.log(artistRes, songRes)

            setBio(artistRes)
            setLyric(songRes)
            setLoading(false)
        }    
        
        fetchData()
    }, [search])

    return (
        <div>
            <h2>Buscador de Canciones</h2>
            <SongForm handleSaerch={handleSaerch}/>
            {loading && <Loader/>} 
            {search && !loading &&
                <SongDetails search={search} lyric={lyric} bio={bio}/>
            }
        </div>
    )
}

export default SongSerch