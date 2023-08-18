/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'framer-motion'
import './Item.css'
function Item({ icon, name, open }) {

    const subheading = {
        true: {
            opacity: 1
        },
        false: {
            opacity: 0,
            display: 'none'
        }
    }
    return (
        <motion.div className='item'
            whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
                backdropFilter: "blur(5.5px)",
                WebkitBackdropFilter: "blur(5.5px)",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                cursor: 'pointer',
                width: open ? "90%" : "60%"
            }}
            transition={{
                type: 'none', duration: 0.1
            }}
        >
            <motion.div className={open ? "iconActive" : "iconInActive"}>
                {icon}
            </motion.div>
            {open ? <motion.span
                variants={subheading}
                className={open === true ? "show":"hidden"}
            >
                {name}
            </motion.span> : null}
        </motion.div>
    )
}

export default Item