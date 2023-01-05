import React from 'react';
import Board from './assets/components/board';

export default class Game extends React.Component {
  state = {
    height: 8,
    width: 8,
    mines: 10
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