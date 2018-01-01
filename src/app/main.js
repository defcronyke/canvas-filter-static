import React, {Component} from 'react';
import Canvas from './canvas';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>{'Canvas Filter'}</h1>
        <Canvas/>
      </div>
    );
  }
}
