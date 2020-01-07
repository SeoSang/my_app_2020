// ~3.2 까지, class App 의 구성
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor")
  }
  state = {
    count: 0,
    test: 1
  }
  // 처음 렌더 됐을때
  componentDidMount() {
    console.log("component rendered")
  }
  // 수정됐을 때
  componentDidUpdate() {
    console.log("did update")
  }
  // 다른 페이지를 갈때 같은 순간
  componentWillUnmount() {
    console.log("will unmount")
  }
  render() {
    console.log("render")
    return (
      <div className="App">
        <p>hello my count is {this.state.count}</p>
        <p>test is {this.state.test}</p>
        <button onClick={this.addFunction}>Add</button>
        <button onClick={this.minusFunction}>Minus</button>
      </div>
    )
  }
  addFunction = () => {
    this.setState(current => ({ count: current.count + 1 }))
  }
  minusFunction = () => {
    this.setState(current => ({ count: current.count - 1 }))
  }
}

export default App
