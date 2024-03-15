import React from "react";
import Card from "../Card/Card";
import CardData from "../CardData/CardData";
import './CardList.css'

const CardList = () => {
    return(
        <div className="cardlist_pos pl-16 sm:pl-0 mx-auto">
            {CardData.map((card, index) => (
                <Card 
                    key={index}
                    image={card.image}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    )
}

export default CardList;