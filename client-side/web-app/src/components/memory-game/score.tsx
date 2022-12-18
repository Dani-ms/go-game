import React from "react";

type Props = {
   moves: number;
   bestScore: number;
}

export const Score = (props: Props, ) => {
    return (
      <div className="score-container">
      <div className="score">
        <div>
          <span>Moves:</span> {props.moves}
        </div>
        {localStorage.getItem('bestScore') && (
          <div>
            <span>Best score:</span> {props.bestScore}
          </div>
        )}
      </div>
      <div>
        <button onClick={() => {window.location.reload()}}>
          RESTART
        </button>
      </div>
    </div>
    );
  }
  