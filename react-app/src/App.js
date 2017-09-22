import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''}
  }
  update(e){
    this.setState({a: e.target.value})
  }
  render(){
    return (
      <div>
        <input
        type="text"
        onChange={this.update.bind(this)}
        /> {this.state.a}
        <hr/>
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
