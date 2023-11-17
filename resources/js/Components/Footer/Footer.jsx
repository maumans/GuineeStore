import React from 'react';
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Link} from "@inertiajs/inertia-react";



function Footer(props) {

    const footerList= [
        {
            titre:'Departement',
            items:[
                "Fashion",
                "Education Product",
                "Frozen Food",
                "Beverages",
                "Organic Grocery",
                "Office Supplies",
                "Beauty Products",
                "Books",
                "Electronics & Gadget",
                "Travel Accessories",
                "Fitness",
                "Sneakers",
                "Toys",
                "Furniture",
            ]
        },
        {
            titre:'A propos de nous',
            items:[
                "Fashion",
                "Education Product",
                "Frozen Food",
                "Beverages",
                "Organic Grocery",
                "Office Supplies",
                "Beauty Products",
                "Books",
                "Electronics & Gadget",
                "Travel Accessories",
                "Fitness",
                "Sneakers",
                "Toys",
                "Furniture",
            ]
        },
        {
            titre:'Services',
            items:[
                "Fashion",
                "Education Product",
                "Frozen Food",
                "Beverages",
                "Organic Grocery",
                "Office Supplies",
                "Beauty Products",
                "Books",
            ]
        },
        {
            titre:'Aide',
            items:[
                "Fashion",
                "Education Product",
                "Frozen Food",
                "Beverages",
                "Organic Grocery",
                "Office Supplies",
            ]
        },
    ]
    return (
        <div className={"mt-20 bg-black py-10 lg:px-64 sm:px-32 px-20 appThemeColor4 grid md:grid-cols-2 sm:grid-cols-1 gap-5"}>
            <div>
                <Link className="flex items-center appThemeColor2" href="/">
                    <ApplicationLogo className="block font-bold h-10 w-auto fill-current" />

                    <div className="text-3xl font-bold transition duration-500">
                        GuineeStore
                    </div>

                </Link>
                <div className={"appThemeColorPrincipal max-w-xs"}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
            </div>

            <div className={"grid lg:grid-cols-3 sx:grid-cols-2 gap-3"}>
                {
                    footerList.map(({titre,items})=>(
                        <div className={"flex flex-col"}>
                            <div className={'text-xl font-bold mb-5 appThemeColor2'}>
                                {titre}
                            </div>
                            <div className={"grid gap-2 text-white"}>
                                {
                                    items.map((el)=>(
                                        <div>
                                            {el}
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default Footer;
