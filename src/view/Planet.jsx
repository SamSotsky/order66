import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planet = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState()

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=>{
                console.log(response.data)
                setPlanet(response.data)
            })
            .catch(err=>console.log(err))
    }, [id])

    return (
        <fieldset>
            <legend> Planet.jsx </legend>
        {
            planet?
                <div>
                    <h3>Planet: {planet.name}</h3>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Surface Water: {planet.surface_water}</p>
                    <p>Population: {planet.population}</p>
                </div>:
            <h1>This planet id is no longer with us </h1>
        }
        </fieldset>
    )
}

export default Planet