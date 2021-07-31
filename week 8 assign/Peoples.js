import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './style.css'
function Peoples() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(response => {
            setPeople(response.data.results)
        })
    })

    if(people) {
        return (
            people.map((people) => (
                <section>
                    <div className="bg-color">
                        <ul>
                       
                            <img class= "img" src='IMG_20210713_164408_411.jpg' alt=" "/>
                            <li key = {people}>
                                <h1>{people.name}</h1>
                                <p>{people.gender}</p>
                                <p>{people.height}</p>
                            </li>
                        </ul>

                    </div>
                </section>
            ))
        )
    }
    return (
        <div>
            <p>{people}</p>
        </div>
    )
}

export default Peoples

