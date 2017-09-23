import React from 'react';
import './App.css';

// if we remove childB while render is:
// render() {
//   let items = this.props.children.map(child => child)
//   console.log(items)
//   return null
// }
// it will throw an error!

class App extends React.Component {
  render(){
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {selected: 'None'}
  }

  selectItem(selected){
    this.setState({selected})
  }

  render(){
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)})
    let items = React.Children.map(this.props.children, fn);
    return(
      <div>
        <h2>You have Selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default App
