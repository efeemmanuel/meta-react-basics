import React from "react";
import download from "../assets/download.png"


// should be in it own file and tbe extracted 
function Logo(){
    const userPic= <img src={download} />;
    return userPic;
}

function Main(props){
    return (<><h1>{props.greet}</h1>
    <Logo />
    </>);
}



export default Main;