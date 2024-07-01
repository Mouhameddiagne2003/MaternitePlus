import React from 'react';
import { functionalities } from "../../assets/datas/functionalities";
import ServiceCard from "./ServiceCard.jsx";
function ServiceList(props) {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {
                functionalities.map((item,index) => <ServiceCard item={item}  index={index} key = {index} />)
            }
        </div>
    );
}

export default ServiceList;