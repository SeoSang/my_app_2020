/*
~3-0 까지 작업 
MyFriends 앱
*/

import React from "react"
import PropTypes from "prop-types"

function IntroMyFriends({ name, gender, rating }) {
  console.log(name)
  var gender_string = ""
  if (gender === 1) {
    gender_string = "male"
  } else {
    gender_string = "female"
  }
  return (
    <div>
      <h2>
        I am {name}, and I am {gender_string} human.
      </h2>
      <h4> ratings : {rating} </h4>
    </div>
  )
}

IntroMyFriends.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.number.isRequired,
  rating: PropTypes.number
}

const myFriends = [
  { id: 1, name: "Seo", gender: 0, rating: 3.5 },
  { id: 2, name: "Kim", gender: 1, rating: 4 },
  { id: 3, name: "Nomad", gender: 0, rating: 5 }
]

function renderMyFriends(friends) {
  return friends.map(friends => (
    <IntroMyFriends
      key={friends.id}
      name={friends.name}
      gender={friends.gender}
      rating={friends.rating}
    />
  ))
}

function App() {
  return (
    <div className="App">
      <p>hello</p>
      {renderMyFriends(myFriends)}
    </div>
  )
}

export default App
