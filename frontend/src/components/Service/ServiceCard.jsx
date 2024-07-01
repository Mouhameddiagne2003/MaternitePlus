import React from 'react';
import {motion} from 'framer-motion';
function ServiceCard(item, index) {


    return (
        <motion.div className="py-[30px] px-3 lg:px-5"  initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{type:"spring", damping:25,stiffness:150}}>
            <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                {item.item.name}
            </h2>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                {item.item.desc}
            </p>

            <div className="flex items-center justify-end mt-[30px]">
                <span className="p-[15px] w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-600" style={{background: `${item.item.bgColor}`, color: `${item.item.textColor}`, borderRadius: "6px 0 0 6px"}}>
                    {item.index + 1}

                </span>
            </div>

        </motion.div>
    );
}

export default ServiceCard;