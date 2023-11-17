import React, {useEffect, useLayoutEffect, useState} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import {Block, Check, Delete, StopCircle, Visibility} from "@mui/icons-material";
import {Inertia} from "@inertiajs/inertia";

function MyButton({onClick,color,text,icon}) {

    const [classNameSt,setClassNameSt]=useState(
        "p-2 text-"+color+" border border-"+color+" rounded hover:text-white hover:border-white hover:bg-"+color+" transition duration-500"
        ||
        "p-2 text-black border border-black rounded hover:text-white hover:border-white hover:bg-black transition duration-500"
    )

    return (
        <button type={"button"} onClick={onClick} className={classNameSt}>
            {icon && icon} {text || text}
        </button>
    );
}

export function EditButton({onClick,color,text,icon}) {

    const [colorSt,setColorSt]=useState(color || 'blue-700')

    return (
        <button type={"button"} onClick={onClick} className={"p-2 text-"+colorSt+" border border-"+colorSt+" rounded hover:text-white hover:border-white hover:bg-"+colorSt+" transition duration-500"}>
            {icon || <EditIcon/>} {text || ""}
        </button>
    );
}

export function ShowButton({onClick,color,text,icon}) {
    const [colorSt,setColorSt]=useState(color || 'blue-500')

    return (
        <button type={"button"} onClick={onClick} className={"p-2 text-"+colorSt+" border border-"+colorSt+" rounded hover:text-white hover:border-white hover:bg-"+colorSt+" transition duration-500"}>
            {icon || <Visibility/>} {text || ""}
        </button>
    );
}

export function DeleteButton({onClick,color,text,icon}) {
    const [colorSt,setColorSt]=useState(color || 'red-700')

    return (
        <button type={"button"} onClick={onClick} className={"p-2 text-"+colorSt+" border border-"+colorSt+" rounded hover:text-white hover:border-white hover:bg-"+colorSt+" transition duration-500"}>
            {icon || <Delete/>} {text || ""}
        </button>
    );
}

export function BlockButton({onClick,color,text,icon}) {
    const [colorSt,setColorSt]=useState(color || 'red-700')

    return (
        <button type={"button"} onClick={onClick} className={"p-2 text-"+colorSt+" border border-"+colorSt+" rounded hover:text-white hover:border-white hover:bg-"+colorSt+" transition duration-500"}>
            {icon || <Block/>}  {text || ""}
        </button>
    );
}

export function CheckButton({onClick,color,text,icon}) {
    const [colorSt,setColorSt]=useState(color || 'green-700')

    return (
        <button type={"button"} onClick={onClick} className={"p-2 text-"+colorSt+" border border-"+colorSt+" rounded hover:text-white hover:border-white hover:bg-"+colorSt+" transition duration-500"}>
            {icon || <Check/>} {text || ""}
        </button>
    );
}

export function GoogleConnexionButton({onClick,color,text,icon}) {
    const [colorSt,setColorSt]=useState(color || 'green-700')

    return (
        <button className={'w-full hover:bg-gray-100 transition duration-500 border rounded text-center mt-5 py-2'} type={"button"} onClick={onClick}>
            Connexion avec google
        </button>
    );
}

export default MyButton;
