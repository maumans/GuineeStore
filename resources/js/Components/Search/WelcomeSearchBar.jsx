import React from 'react';
import {Input, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import MyButton from "@/Components/MyButton";
import {Search} from "@mui/icons-material";

function WelcomeSearchBar({onHandleChange,onClick}) {
    return (
        <div className={"w-full flex gap-5 bg-gray-100 p-1 rounded"} style={{height:50}}>
            <OutlinedInput
                startAdornment={<InputAdornment position={"start"}>
                    <Search/>
                </InputAdornment>}

                className={"w-full bg-white rounded p-2"} placeholder="Recherche un produit" name="recherche" onChange={onHandleChange}/>

                <button onClick={onClick} className={"py-1 px-2 bg-black border border-2 border-black appThemeColor2 appThemeBorderColor rounded hover:text-white font-bold hover:bg-black transition duration-500"}>
                    Rechercher
                </button>
        </div>
    );
}

export default WelcomeSearchBar;
