import React,{useState} from 'react'
import SelectList from './SelectList'

const SelectsAnidados = () => {
    const [state, setState] = useState("")
    const [town, setTown] = useState("")
    const [suburb, setSuburb] = useState("")

    const TOKEN ="pruebas"// "9e219301-465f-4c75-aa87-3d0e6e520624"

    return (
        <div>
            <h2>Selects anidados</h2>
            <h3>Mexico</h3>
            <SelectList title="estado" url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} handleChange={(e)=>{setState(e.target.value)}}/>
            <br/>
            {state && (<SelectList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e)=>{setTown(e.target.value)}}/>)}
            <br/>
            {town && (<SelectList title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} handleChange={(e)=>{setSuburb(e.target.value)}}/>)}
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    )
}

export default SelectsAnidados
