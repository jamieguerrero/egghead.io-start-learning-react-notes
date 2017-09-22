import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''}
  }
  update(){
    this.setState({
      a: this.a.value,
      b: this.b.value
    })
  }
  render(){
    return (
      <div>
        <input
        ref={node => this.a = node}
        type="text"
        onChange={this.update.bind(this)}
        /> {this.state.a}
        <hr/>
        <input
        ref={node => this.b = node}
        type="text"
        onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    )
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} was too short`)
    }
  }
}

export default App
