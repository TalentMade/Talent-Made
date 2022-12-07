import { motion } from "framer-motion";
import React from "react";

interface buttonProps{
    className: string,
    initialAnimation?: object,
    animate?:object,
    transition?: object,
    whileHover?: object,
    buttonText: string
}

export function Button(props: buttonProps) {

    return (

        <motion.button
            className={props.className}
            initial={props.initialAnimation}
            animate={props.animate}
            transition={props.transition}
            whileHover={props.whileHover}
        >
            {props.buttonText}
        </motion.button>

    )

}