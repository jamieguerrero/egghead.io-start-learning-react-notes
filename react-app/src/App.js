import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({currentEvent: e.type})
  }
  render(){
    return (
      <div>
        <textarea
        onKeyPress={this.update}
        onCopy={this.update}
        onCut={this.update}
        onPaste={this.update}
        onFocus={this.update}
        onBlur={this.update}
        onDoubleClick={this.update}
        onTouchStart={this.update}
        onTouchMove={this.update}
        onTouchEnd={this.update}
        cols="30"
        rows="10"/>
        <h1>{this.state.currentEvent}</h1>
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
