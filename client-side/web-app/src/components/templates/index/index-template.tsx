import React, { useEffect, useState } from 'react';
import { Page } from 'src/components/routing/page/page';
import { INDEX_ROUTE } from './index-routes';

type Props = {
  board: string;
  item: number;
};
type State = {
  board?: String;
};

export const IndexTemplate = (props: Props, state: State) => (
  <Page authenticationRules={null} title={INDEX_ROUTE.label} noContainment>
    {() => {
      const empty: string[] = Array(9).fill(null);
      const [currentPlayer, setCurrentPlayer] = useState('O');
      const [result, setResult] = useState(null);

      const [board, setBoard] = useState(empty);
      const handleCellClick = (index: number) => {
        //verifca se o card não tem item, se e diferente de elemento vazio e para no momento
        if (result) {
          console.log('Jogo Finalizado');
          return;
        }
        if (board[index] === '') {
          console.log('Posição ocupada');
          return;
        }
        setBoard(
          board.map((item, itemIndex) =>
            itemIndex === index ? currentPlayer : item,
          ),
        ); //recriando o arrary

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); //comparando os jogadores para trocar o O para X
      };
      //const [secondsLeft, setSecondsLeft] = useState(15)
      //verifica quem ganhou
      const checkResult = () => {
        //ARRAY de possibilidade para ganhar
        const possibleWaysToWin = [
          [board[0], board[1], board[2]],
          [board[3], board[4], board[5]],
          [board[6], board[7], board[8]],

          [board[0], board[3], board[6]],
          [board[1], board[4], board[7]],
          [board[2], board[5], board[8]],

          [board[0], board[4], board[8]],
          [board[2], board[4], board[6]],
        ];

        possibleWaysToWin.forEach((items) => {
          if (items.every((cell) => cell === 'O')){
            setResult(result); //setResult("O")
            console.log(setResult(result))
          } else if (items.every((cell) => cell === 'X')) setResult(result); //setResult("X")
        });
        checkDraw();
      };
      //verificar empate
      const checkDraw = () => {
        if (board.every((item) => item === '')) {
          setResult(result); //setResult("E")
        }
      };
      //check result
      useEffect(checkResult, [board]);
      const resetGame = () => {
        setCurrentPlayer('O');
        setBoard(empty);
        setResult(null);
      };
      return (
        <>
          <section className="container py-4">
            <h2 className="d-inline">
              Game
              <br />
            </h2>
            {result && (
              <div className={`mix-auto text-center mb-3`}>
                {result === 'E' ? (
                  <span> {result} Empate </span>
                ) : (
                  <span> {result} venceu! </span>
                )}
                <h1 className={`winner-messages`}>{''}</h1>
                <button
                  className={`btn btn-warning`}
                  onClick={resetGame}
                  aria-haspopup="true"
                >
                  Reset Game
                </button>
              </div>
            )}
            <div
              className={`game-container mix-auto text-center justify-content-center `}
            >
              <div
                className={`board-container pt-4 pb-4 ${
                  result ? 'game-over' : ''
                } mix-auto text-center justify-content-center`}
              >
                {board.map((item, index) => (
                  <div
                    key={index}
                    className={`cell ${item}`}
                    onClick={() => handleCellClick(index)}
                    role="presentation"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    }}
  </Page>
);
