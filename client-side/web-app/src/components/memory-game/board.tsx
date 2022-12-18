import React , { useEffect, useState, useRef }from "react";
import { Card } from "./card";
import imagem1 from 'src/assets/images/1.png';
import imagem2 from 'src/assets/images/2.png';
import imagem3 from 'src/assets/images/3.png'
import imagem4 from 'src/assets/images/4.png'
import imagem5 from 'src/assets/images/5.png'
import imagem6 from 'src/assets/images/6.png';
import './board.scss';
import images from 'src/assets/images/*.png';

const imagesFile = [imagem1, imagem2, imagem3, imagem4,imagem5, imagem6]

type Props = {
    setMoves: React.Dispatch<React.SetStateAction<number>>
    finishGameCallback: () => void
    cardIds: Array<number>
    className: string;
    
    
}

export const Board = (props: Props, ) => {
    const [openCards, setOpenCards] = useState<Array<number>>([]); //open card click
    const [clearedCards, setClearedCards] = useState<Array<number>>([]);
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState<boolean>(false);
    const timeout = useRef<NodeJS.Timeout>(setTimeout(()=>{}));
    useEffect(() => {
        const newTimeout = window.setTimeout(() => {}, 1000)
        return () => {
            window.clearTimeout(newTimeout)
        }
    }, [])

    const disable = () =>{
        setShouldDisableAllCards(true);
    }
    const enable = () =>{
        setShouldDisableAllCards(false);
    }
    const checkCompletion = () => {
        if(clearedCards.length === props.cardIds.length){
            props.finishGameCallback()
        }
    }
    const evaluate = () =>{
        const [first, second] = openCards;
        enable();
        if(!first|| !second){
            throw new Error();
        }
        if((first % 6 + 1 ) === (second % 6 + 1)){
            setClearedCards((prev) => [...prev, first, second] );
            setOpenCards([]);
            return;
        }
       
        timeout.current = setTimeout(() => {
            setOpenCards([]);
          }, 500);
    }
    const handleCardClick = (id:number) =>{
        if(openCards.length === 1){
            setOpenCards((prev) => [...prev,id]);
            props.setMoves((moves)=> moves +1)
            disable();
        }else{
            clearTimeout(timeout.current);
            setOpenCards([id]);
        }
    };
    useEffect(() => {
        let timeout: NodeJS.Timeout = setTimeout(()=>{});
        if (openCards.length === 2) {
          timeout = setTimeout(evaluate, 500);
        }
        return () => {
          clearTimeout(timeout);
        };
      }, [openCards]);
    useEffect(() => {
        checkCompletion();
      }, [clearedCards]);
    
      const checkIsFlipped = (id: number) => {
        return clearedCards.includes(id) || openCards.includes(id);
      };
    
      const checkIsInactive = (id: number) => {
        return clearedCards.includes(id)
      };
   
    return (
    <>
     <div className={`mix-auto ${props.className}`}>
      {props.cardIds.map(i => {
        return <Card
          key={i}
          image={`/static/${i % 6 + 1}.png`}
        
          id={i}
          isDisabled={shouldDisableAllCards}
          isInactive={checkIsInactive(i)}
          isFlipped={checkIsFlipped(i)}
          onClick={handleCardClick}
        />
      })}
    </div>
    </>
    );
  }
  