import React from "react"

function Potato({ name, gender }) {
  console.log(name)
  return (
    <h1>
      I am {name}, and I am {gender} human
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <p>hello</p>
      <Potato name="Seo" gender="Male" />
      <Potato name="MingD" gender="Female" />
    </div>
  )
}

export default App
