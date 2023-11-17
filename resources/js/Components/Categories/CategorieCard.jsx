import React from 'react';
import {Link} from "@inertiajs/inertia-react";

function CategorieCard({titre,image,id,backgroundColor}) {
    return (
        <Link href={"/"} className={`overflow-hidden relative text-white font-bold xl:h-96 md:h-72 sm:h-64 h-52 rounded ${backgroundColor}`}>
            <div className={"absolute flex w-full z-20 justify-center mt-5 text-xl"}>
                {titre}
            </div>
            <div className={"w-full h-full z-10 absolute hover:scale-110 transition duration-500"}>
                <div className={"w-full h-full z-40 absolute"}>
                    <img src={image} className={"w-full h-full object-cover"} alt=""/>
                </div>
                <div className={"w-full h-full absolute bg-black z-40 opacity-20"}>

                </div>
            </div>
        </Link>
    );
}

export default CategorieCard;
