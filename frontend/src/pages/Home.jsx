import React from 'react';
import heroImg from '../assets/images/heroImg.jpg'
import {motion} from "framer-motion";
import ServiceList from "../components/Service/ServiceList";
import AdvantagesList from "../components/Avantages/AdvantagesList";
import avantageImg from "../assets/images/avantageImg.png"

function Home(props) {
    return (
        <div>
            {/*----------------------Hero Section -------------------*/}
                <section className="hero__section pt-[60px] 2xl:h-[800px]">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                            {/*--------------------- Hero Content --------------------------*/}
                            <div>
                                <div className="lg:w-[570px]">
                                    <h1 className="text-[36px] leading-[46px] text-primaryColor font-[800] md:text-[60px] md:leading-[70px]">
                                        Révolutionnez la Gestion de Votre Maternité
                                    </h1>
                                    <p className="text__para">
                                        Une solution complète pour une gestion efficace et optimisée de votre maternité
                                    </p>
                                    <button className="btn bg-pinkColor">
                                        Demander une démo
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div>
                                    <motion.img  initial={{ opacity: 0, scale: 0.8, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.5 }} className="w-full" src={heroImg} alt=""/>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                {/*------------------- Hero Section End ----------------- */}s

                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto">
                            <motion.h2       initial={{ opacity: 0, y: -150 }}
                                             whileInView={{ opacity: 1, y: 0 }}

                                             transition={{ type: "spring", damping: 10, stiffness: 30 }} className="heading text-center">
                                Offrant les meilleurs services de gestion de maternité
                            </motion.h2>
                        </div>
                    </div>
                </section>

                {/*---------------------- Fonctionnalités -----------------*/}
                <section>
                    <div className="container">
                        <ServiceList />
                    </div>
                </section>

                {/*----------------------- Avantages section -----*/}
                <section className="mb-20">
                    <div className="container">
                        <div className="flex items-center mb-[30px] justify-between flex-col lg:flex-row">
                            <div className="xl:w-[670px]">
                                <motion.h2   initial={{ y: -130 }}
                                             whileInView={{ y: 0 }}
                                             transition={{ type: "spring", stiffness: 50 }}
                                           className="heading "  >
                                    Pourquoi choisir notre système de gestion d'une maternité ?
                                </motion.h2>

                                <AdvantagesList />

                                {/*------
                                <ul className="pl-6 mt-10" >

                                    <li className="text__para">
                                        1. Gain de temps et efficacité accrue.
                                    </li>
                                    <li className="text__para">
                                        2. Réduction des erreurs administratives.
                                    </li>
                                    <li className="text__para">
                                        3. Amélioration de la qualité des soins.
                                    </li>
                                    <li className="text__para">
                                        4. Gain de temps et efficacité accrue.
                                    </li>
                                    <li className="text__para">
                                        5. Gain de temps et efficacité accrue.


                                </ul>
                                 </li> ---*/}






                            </div>
                            {/*-------------------Avantages Image ---------------------*/}
                            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                                <img src={avantageImg} initial={{ opacity: 0, y: -250 }}
                                     transition={{ type: "spring", stiffness: 200, damping: 150, duration: 2.5 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     viewport={{ once: true }} className="w-4/4 md:w-3/4" alt=""/>

                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default Home;