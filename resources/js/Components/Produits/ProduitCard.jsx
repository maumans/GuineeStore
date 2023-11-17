import React, {useEffect} from 'react';
import {Link} from "@inertiajs/inertia-react";
import {Favorite, HeartBroken, StarOutlined} from "@mui/icons-material";

function ProduitCard({titre,prix,description,image,etoile,id,backgroundColor,votes,like}) {


    return (
        <div className={`overflow-hidden relative h-full rounded appThemeBackgroundColor5`}>
            <div className={`w-full h-80 ${backgroundColor} overflow-hidden`}>
                <button className={"p-2 absolute bg-white z-30 right-3 top-3 rounded-full appThemeBackgroundColorSubHoverPrincipal transition duration-500"}>
                    <Favorite className={`${like ?"appThemeColorPrincipal2":""}`}/>
                </button>
                <img src={image} className={"w-full h-full object-cover hover:scale-110 transition duration-500"} alt=""/>
            </div>

            <div className={"flex w-full font-bold z-50 justify-between mt-5 text-xl px-2"}>
                <div>
                    {titre}
                </div>
                <div>
                    {prix+" FG"}
                </div>
            </div>
            <div className={"flex w-full z-50 justify-between text-sm mt-5 px-2"}>
                <div>
                    {description}
                </div>
            </div>

            <div className={"flex w-full z-50 justify-between text-sm mt-5 px-2"}>
                <div>
                    <StarOutlined className={`${etoile>0 ?"appThemeColorPrincipal2":""}`} />
                    <StarOutlined className={`${etoile>1 ?"appThemeColorPrincipal2":""}`} />
                    <StarOutlined className={`${etoile>2 ?"appThemeColorPrincipal2":""}`} />
                    <StarOutlined className={`${etoile>3 ?"appThemeColorPrincipal2":""}`} />
                    <StarOutlined className={`${etoile>4 ?"appThemeColorPrincipal2":""}`} />
                    <span className={'ml-2'}>({votes})</span>
                </div>
            </div>

            <div className={"flex w-full z-50 justify-between text-sm my-5 px-2"}>
                <button className={'appThemeBorderColorPrincipal22 font-bold appThemeColorPrincipal2 px-5 py-3 rounded-full appThemeBackgroundColorSubHoverPrincipal2 appThemeColorSubHover3 transition duration-500'}>
                    Details
                </button>
            </div>



        </div>
    );
}

export default ProduitCard;
