import React from "react";
import classnames from 'classnames';
import imagemback from 'src/assets/images/empty-card.png'

type Props = {
    image: string
    onClick: (id:number) => void
    id:number
    isInactive?:boolean
    isFlipped?: boolean
    isDisabled?: boolean
    
}

export const Card = (props: Props, ) => {
    const backSide = imagemback
    const handleClick = () => {
      !props.isFlipped && !props.isDisabled && props.onClick(props.id);
    }
    return (
      <div
      className={classnames("card-game", {
        "is-flipped": props.isFlipped,
        "is-inactive": props.isInactive
      })}
      onClick={handleClick}
    >
      
      <div className="card-face card-font-face">
        <img src={backSide} alt="card backside" />
      </div>
      <div className="card-face card-back-face">
        <img src={props.image} alt="card" />
      </div>
    </div>
    );
  }
  