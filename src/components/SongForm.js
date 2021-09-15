import React, { useState } from 'react';

const InitialForm={
    artist:"",
    song:""
}

export const SongForm = ({handleSaerch}) => {
    const [form, setForm] = useState(InitialForm)

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos Incompletos")
            return
        }

        handleSaerch(form)
        setForm(InitialForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artist" placeholder="Nombre del interprete" onChange={handleChange} value={form.artist}/>
                <input type="text" name="song" placeholder="Nombre de la canción" onChange={handleChange} value={form.song}/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
