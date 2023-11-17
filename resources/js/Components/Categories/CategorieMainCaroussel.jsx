import React,{Fragment} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const listCategories=[
    {
        "id":1,
        'nom':'Boutiques'
    },
    {
        "id":2,
        'nom':'Hommes'
    },
    {
        "id":3,
        'nom':'Femmes'
    },
    {
        "id":4,
        'nom':'Enfants'
    },
    {
        "id":5,
        'nom':'Habits'
    },
    {
        "id":6,
        'nom':'Chaussures'
    },
    {
        "id":7,
        'nom':'Automobiles'
    },
    {
        "id":8,
        'nom':'Habits'
    },
    {
        "id":9,
        'nom':'Immobilier'
    }
]

function CategorieMainCaroussel(props) {
    return (
        <div className={"w-full bg-black text-white px-6 border-t border-b border-gray-700 py-1"}>
            <Swiper
                className={'w-3/4'}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={6}
                navigation
                //pagination={{ clickable: true }}
                //scrollbar={{ draggable: true }}
                //onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    listCategories.map((categorie)=>(
                        <SwiperSlide key={categorie.id}>
                            {categorie.nom}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default CategorieMainCaroussel;
