import { Link, Head } from '@inertiajs/inertia-react';
import Unauthenticated from "@/Layouts/UnauthenticatedLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import welcomeImage from "../img/WelcomeImage.jpg";
import welcomeProduit from "../img/WelcomeProduit.png";
import multimedia from "../img/multimedia.jpg";
import sport from "../img/sport.jpg";
import voiture from "../img/Voiture.png";
import parfum from "../img/parfum.jpg";
import chaussure from "../img/chaussure.png";
import hoodie from "../img/hoodie.jpg";
import vase from "../img/vase.jpg";
import boutique from "../img/boutique.jpg";
import CategorieCard from "@/Components/Categories/CategorieCard";
import ProduitCard from "@/Components/Produits/ProduitCard";
import {height} from "@mui/system";
import React from "react";
import RubanOffre from "@/Components/Offre/RubanOffre";
import Footer from "@/Components/Footer/Footer";

export default function Welcome(props) {


    const categories=[
        {
            id:1,
            titre:"Chaussure",
            image:chaussure,
            backgroundColor:'bg-green-500'
        },
        {
            id:2,
            titre:"Multimedia",
            image:multimedia,
            backgroundColor:'bg-green-300'
        },
        {
            id:3,
            titre:"Soins",
            image:parfum,
            backgroundColor:'bg-gray-300'
        },
        {
            id:4,
            titre:"Sport",
            image:sport,
            backgroundColor:'bg-red-300'
        },
        {
            id:4,
            titre:"Hoodie",
            image:hoodie,
            backgroundColor:'bg-red-300'
        },
        {
            id:4,
            titre:"Intérieur",
            image:vase,
            backgroundColor:'bg-blue-300'
        },
    ]

    const produits=[
        {
            id:1,
            titre:"Nike jordan",
            image:chaussure,
            backgroundColor:'bg-green-500',
            description:'Paire de jordan neuve',
            prix:'550.000',
            etoile:1,
            votes:230,
            like:true
        },
        {
            id:2,
            titre:"Multimedia",
            image:multimedia,
            backgroundColor:'bg-green-300',
            description:"Lot d'équipements High-tech",
            prix:'550.000',
            etoile:3,
            votes:120,
            like:false
        },
        {
            id:3,
            titre:"Soins",
            image:parfum,
            backgroundColor:'bg-gray-300',
            description:'Parfum classe',
            prix:'550.000',
            etoile:5,
            votes:340,
            like:true
        },
        {
            id:4,
            titre:"Sport",
            image:sport,
            backgroundColor:'bg-red-300',
            description:'Barre de fer',
            prix:'550.000',
            etoile:3,
            votes:130,
            like:true
        },
        {
            id:4,
            titre:"Hoodie",
            image:hoodie,
            backgroundColor:'bg-red-300',
            description:'Hoodie streetwear',
            prix:'550.000',
            etoile:4,
            votes:490,
            like:false
        },
        {
            id:4,
            titre:"Intérieur",
            image:vase,
            backgroundColor:'bg-blue-300',
            description:'Vase fleuris',
            prix:'550.000',
            etoile:0,
            votes:500,
            like:true
        },
    ]



    return (
        <Authenticated
            auth={props.auth}
            header={"Accueil"}
        >
            <div>
                <div className={"relative z-10 bg-black overflow-hidden"}>
                    <img src={welcomeImage} className={"object-cover w-full opacity-25"} style={{height:700}} alt=""/>
                    <div className={"absolute top-10 flex z-10"}>
                        <div className={"flex flex-col gap-10 xl:ml-96 lg:ml-72 md:ml-20 ml-20 mt-20"}>
                            <div className={" md:text-6xl text-5xl appThemeColor2 lg:max-w-2xl md:max-w-lg max-w-sm"}>
                                La solution idéale pour acheter ou vendre facilement des produits
                            </div>
                            <div className={"text-2xl max-w-sm text-white"}>
                                Vendez ou achetez des maintenant
                            </div>
                        </div>
                    </div>

                    <img src={welcomeProduit} className={" xl:block hidden  object-cover absolute top-0 w-full z-0 xl:right-44 sm:right-0 -rotate-45 scale-x-[-1] opacity-80"} style={{width:700}} alt=""/>

                </div>
            </div>

            <div className={'lg:mx-64 sm:mx-32 mx-20'}>
                <div className={"grid gap-10 my-44"}>
                    <div className={' font-bold text-2xl'}>
                        Top des categories de produits
                    </div>
                    <div className={"grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3 "}>
                        {
                            categories.map(({id,titre,image,backgroundColor})=>(
                                <CategorieCard key={id} titre={titre} image={image} backgroundColor={backgroundColor}/>
                            ))
                        }
                    </div>
                </div>

                <div className={"grid gap-5 mt-20 "}>
                    <div className={"flex justify-between items-end"}>
                        <div className={' font-bold text-2xl'}>
                            Les meilleures offres du jours
                        </div>

                        <div className={'appThemeColorHover hover:underline transition duration-500'}>
                            <Link href={"/"}>Plus de produits</Link>
                        </div>
                    </div>
                    <div className={"appThemeBackgroundColorPrincipal2 px-5 py-1 mb-16 transition duration-500 w-fit"}>

                    </div>
                    <div className={"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 "}>
                        {
                            produits.map(({id,titre,prix,description,image,backgroundColor,etoile,votes,like})=>(
                                <ProduitCard
                                    key={id}
                                    titre={titre}
                                    image={image}
                                    prix={prix}
                                    description={description}
                                    backgroundColor={backgroundColor}
                                    etoile={etoile}
                                    votes={votes}
                                    like={like}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            {/*<div className={"w-full my-44 relative"} style={{height:700}}>
                <img src={boutique} className={"w-full h-full object-cover"} alt=""/>
                <div className={"absolute appThemeBackgroundColor px-10 py-20 top-20 lg:right-40 right-5 grid gap-10"}>
                    <div className={" md:text-5xl text-4xl appThemeColor2 lg:max-w-2xl md:max-w-lg max-w-sm"}>
                        Gagnez 50% sur vos achats au déla de 2 000 000 GNF
                    </div>
                    <div className={"text-2xl max-w-sm text-white "}>
                        Profitez de cette offre exclusive sur des produits de choix très convoités
                    </div>

                    <div className={"flex w-full z-50 justify-between text-sm my-2 px-2"}>
                        <button className={'appThemeBorderColorPrincipal22 font-bold appThemeColorPrincipal2 px-8 py-4 rounded-full appThemeBackgroundColorSubHoverPrincipal2 appThemeColorSubHover3 transition duration-500'}>
                            Details
                        </button>
                    </div>
                </div>
            </div>*/}

            <RubanOffre
                titre={"Gagnez 50% sur vos achats au déla de 2 000 000 GNF"}
                text={"Profitez de cette offre exclusive sur des produits de choix très convoités"}
            />

            <div>
                <Footer />
            </div>


        </Authenticated>
        /*<>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    accueil
                </div>
            </div>
        </>*/
    );
}
