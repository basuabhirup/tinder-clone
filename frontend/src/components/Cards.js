import React, {useState, useEffect } from 'react'
import axios from "axios"
import TinderCard from 'react-tinder-card'
import "./Cards.css"

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("/api/cards")
        .then((res) => {
            if(res.data.length > 0 ) {
                setPeople([...res.data]);
            } else {
                setPeople([]);
            }  
        })
        .catch((err) => console.error(err));
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardsContainer">
        {people.map(person => (
          <TinderCard 
            className='swipe' 
            key={person.name} 
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir, person.name)} 
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div 
              style={{ backgroundImage: `url(${person.imgUrl})` }} 
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default Cards