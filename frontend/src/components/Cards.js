import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./Cards.css"

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://www.esquireme.com/public/images/2019/12/08/elon-musk.jpg"
    },
    {
      name: "Jeff Bezos",
      url: "https://techcentral.co.za/wp-content/uploads/2017/05/jeff-bezos-2156-1120.jpg"
    }
  ])

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
              style={{ backgroundImage: `url(${person.url})` }} 
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