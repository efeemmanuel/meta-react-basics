import React from "react";

function ModeToggler(){
    
    let darkModeon = false;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is on</h1>

    function handleClick(){
        darkModeon = !darkModeon;
        if (darkModeon == true) {
            console.log("Dark mode is on")
        } else {
            console.log("light mode is on")
        }
    }

    return (
        <div>
            {darkModeon ? darkMode : lightMode}

            <button onClick={handleClick}>click me! </button>
        </div>
    )
}


export default ModeToggler;