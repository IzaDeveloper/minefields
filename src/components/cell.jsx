import React from 'react';
import 'animate.css';

export default class Cell extends React.Component {
    getValue() {
        const { value } = this.props;

        if (!value.isRevealed) {
            return this.props.value.isFlagged ? <img src="/flag.png" alt='' className='flag' /> : null
        }
        if (value.isMine) {
            return (
                <img src="/bomber-man.gif" alt="" className='bomb animate__animated animate__flash' />
            )
        }
        if (value.neighbour === 0) {
            return null;
        }
        return value.neighbour;
    }

    render() {
        const { value, onClick, cMenu } = this.props;
        let className =
            "cell" +
            (value.isRevealed ? "" : " hidden") +
            (value.isMine ? " is-mine" : "") +
            (value.isFlagged ? " is-flag" : "") +
            (value.isEmpty ? " is-empty" : "") +
            (value.isClicked ? " is-clicked" : "") +
            (value.neighbour === 1 ? " cell-one" : "") +
            (value.neighbour === 2 ? " cell-two" : "") +
            (value.neighbour === 3 ? " cell-three" : "") +
            (value.neighbour === 4 ? " cell-four" : "");

        return (
            <div
                onClick={onClick}
                className={className}
                onContextMenu={cMenu}
            >
                {this.getValue()}
            </div>
        );
    }
}