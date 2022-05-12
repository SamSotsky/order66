import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const {id} = useParams();
    const [people, setPeople] = useState()

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response.data)
            setPeople(response.data)
        })
        .catch(err=>console.log(err))
    }, [id])

    return (
        <fieldset>
            <legend> People.jsx </legend>
        {
            people?
                <div>
                    <h3>Name: {people.name}</h3>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                </div>:
            <h1>This persons id is no longer with us </h1>
        }
        </fieldset>
    )
}

export default People