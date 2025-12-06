import React from "react";

import "./DarkMode.css";
import   Sun from "./Sun.svg";
import Moon  from "./Moon.svg";



const DarkMode = () => {

const setDarkTheme=()=>{
    document.querySelector("body").setAttribute("dark-theme","dark");
    localStorage.setItem("selectedTheme","dark");
}
const setLightTheme=()=>{
    document.querySelector("body").setAttribute("dark-theme","light");
    localStorage.setItem("selectedTheme","light");

}

const selectedTheme=localStorage.getItem("selectedTheme");

if(selectedTheme==="light"){
    setLightTheme();

}
else{
    setDarkTheme();
}

const toggleTheme=(e)=>{
    if(e.target.checked){
        setDarkTheme();
    }
    else{
        setLightTheme();
    }
}

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme!=="light"}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src={Sun} className="sun" />
                <img src={Moon} className="moon"/>
            </label>
        </div>
    );
};

export default DarkMode;
