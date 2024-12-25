import React, {useState} from "react";
import PromoHeading from "./PromoHeading";




function Promo(){


    const [word, setWord] = React.useState('Eat');

    function handleClick(){
        setWord('Drink')
    }

    const data = {
        heading:"99% of all items!",
        callToAction:"Eveything must go!"
    }



    return (
        <>
        <h1>{word + ' at horixon house'}</h1>
        <button onClick={handleClick}>click me!</button>
        <PromoHeading heading={data.heading} callToAction={data.callToAction} />
        </>
    )
}



export default Promo;