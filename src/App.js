import React from 'react';
import './App.css';
import Selectable from './Selectable';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSelect = (selected) => {
    if (selected.length) {
      this.setState(selected, () =>
        console.timeEnd("EEEE"))
    }
  }
  render() {
    return (
      <div className="App">
        <Selectable onSelect={this.onSelect} />
      </div>
    );
  }
}

export default App;