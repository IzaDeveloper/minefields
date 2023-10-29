import React from 'react';
import Board from './assets/components/board';

export default class Game extends React.Component {
  state = {
    height: 5,
    width: 5,
    mines: 5
  };

  render() {
    const { height, width, mines } = this.state;
    return (
      <>
        <Board height={height} width={width} mines={mines}/>
      </>
    );
  }
}