import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Planet = () => {
    const {id} = useParams();
    const [planet, usePlanet] = useState()

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
                </div>:
            <h1>This planet id is no longer with us </h1>
        }
        </fieldset>
    )
}

export default Planet