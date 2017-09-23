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
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render() {
    // let items = this.props.children.map(child => child)

    // React.Children.map takes two arguments
    // let items = React.Children
    //   .map(this.props.children, child => child)

    // Can also use forEach
    // let items = React.Children
    //   .forEach(this.props.children, child => console.log(child.props.className))

    // in this case, we can handle adjacent siblings with forArray
    // React.Children.toArray(this.props.children)

    // this returns single child, and if more than one returns error
    React.Children.only(this.props.children)

    console.log(items)
    return null
  }
}

export default App
