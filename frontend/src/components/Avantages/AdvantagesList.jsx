import {avantages} from "../../assets/datas/avantages";
import AdvantagesCard from "./AdvantagesCard";
import React from "react";
import {motion} from "framer-motion";

function AdvantagesList(props) {

    return (

        <ul className="pl-6 mt-10" >
            {avantages.map((item, index) => (

                <AdvantagesCard
                    item={item}
                    index={index}
                    key={index}
                />
            ))}
        </ul>
    );
}

export default AdvantagesList;