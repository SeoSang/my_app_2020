import React from "react"

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.goBack()
    }
  }
  render() {
    const { location } = this.props
    const { state } = location
    if (state !== undefined) {
      return <span>{state.title}</span>
    } else {
      return null
    }
  }
}

export default Detail
