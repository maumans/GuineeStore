import React from 'react';
import boutique from "@/img/Boutique.jpg";

function RubanOffre({titre,titreColor,text,textColor,backgroundColor}) {
    return (
        <div className={"w-full my-44 relative"} style={{height:700}}>
            <img src={boutique} className={"w-full h-full object-cover"} alt=""/>
            <div className={`absolute ${backgroundColor ?backgroundColor:"appThemeBackgroundColor"} px-10 py-20 top-20 lg:right-40 right-5 grid gap-10`}>
                <div className={`md:text-5xl text-4xl ${titreColor ?titreColor:"appThemeColor2"} lg:max-w-2xl md:max-w-lg max-w-sm`}>

                    {
                        titre ?
                            titre
                            :
                            "Gagnez 50% sur vos achats au déla de 2 000 000 GNF"
                    }

                </div>
                <div className={`text-2xl max-w-sm ${textColor ? textColor : "text-white"}`}>
                    {
                        text ?
                            text
                            :
                            "Profitez de cette offre exclusive sur des produits de choix très convoités"
                    }
                </div>

                <div className={"flex w-full z-50 justify-between text-sm my-2 px-2"}>
                    <button className={'appThemeBorderColorPrincipal22 font-bold appThemeColorPrincipal2 px-8 py-4 rounded-full appThemeBackgroundColorSubHoverPrincipal2 appThemeColorSubHover3 transition duration-500'}>
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RubanOffre;
