import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
  constructor(){
    super();
    this.state = {count: 0}
  }
  update(){
    this.setState({count: this.state.count + 1})
  }
  //will fire off twice
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update = {this.update.bind(this)}
      />
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Button>button</Button>
        <hr/>
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

//stateless function component
const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

//full class component
class Label extends React.Component {
  //will fire off once
  componentWillMount(){
    console.log('label will mount')
  }
  render(){
    return (
      <label onMouseMove={this.props.update}>
        {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HOC(Label)

export default App
