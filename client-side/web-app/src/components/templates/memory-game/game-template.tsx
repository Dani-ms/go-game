import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Board } from 'src/components/memory-game/board';
import { Score } from 'src/components/memory-game/score';
import { Page } from 'src/components/routing/page/page';
import { GAME_ROUTE } from './game-routes';

type Props = {};
type State = {};

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
cardIds.sort(() => 0.5 - Math.random())


export const GameTemplate = (props: Props, state: State) => (
  <Page authenticationRules={null} title={GAME_ROUTE.label} noContainment>
    {() => {
        
        
         const [moves, setMoves] = useState<number>(0)
         const [bestScore, setBestScore] = useState<number>(
            parseInt(localStorage.getItem('bestScore') || '0') || Number.MAX_SAFE_INTEGER
          )
          const finishGameCallback = () => {
            const newBestScore = moves < bestScore ? moves : bestScore
            setBestScore(newBestScore)
            localStorage.setItem('bestScore', '' + newBestScore)
          }
        
      return (
        <>
          <section className="container py-4">
            <h2 className="d-inline">
              Memory Game
              <br />
            </h2>

            <Score moves={moves} bestScore={bestScore} />
           
            <Board
              className="board"
              setMoves={setMoves}
              finishGameCallback={finishGameCallback}
              cardIds={cardIds}
            />
           
          </section>
        </>
      );
    }}
  </Page>
);
