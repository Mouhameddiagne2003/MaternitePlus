import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

function AdvantagesCard(item,index) {
    const [isHovered, setIsHovered] = useState(false);
    // Définir les propriétés d'animation en fonction de la parité de l'index
    const animationProps = item.index % 2 === 0
        ? {
            initial: { opacity: 0, x: -150 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 1, delay: index * 0.15 }
        }
        : {
            initial: { opacity: 0, x: 150 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 1, delay: index * 0.15 }
        };

    return (
        <motion.li {...animationProps}
            className="cursor-pointer text__para ">
            <div className="flex items-center gap-[10px]">
                <h3  onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {item.item.title}
                </h3>
                <motion.div className="flex items-center gap-[10px]" onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                    animate={{rotate: isHovered ? 360 : 0}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                >
                    <FaInfoCircle className="text-textColor"/>
                </motion.div>
            </div>
            {isHovered && (
                <motion.div
                    className="absolute bg-blue-200 border border-blue-400 p-4 rounded-md shadow-lg text-sm text-textColor mt-2 z-10"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                >
                    {item.item.description}
                </motion.div>
            )}


        </motion.li>
    );
}

export default AdvantagesCard;