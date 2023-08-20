/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Item.css'
import {  useLocation, useNavigate } from 'react-router-dom';
function Item({ icon, name, open }) {

    const subheading = {
        true: {
            opacity: 1
        },
        false: {
            opacity: 0,
            display: 'none',
        
        }
    }

    const location = useLocation();




const navigate = useNavigate();

    return (
        <motion.div style={{width:open ? "90%" : "60%"}} onClick={()=>navigate(`${name === "Home" ? "/" : `/${name}`}`)} className={location.pathname === "/" && name ==="Home" ? "itemActive" : location.pathname === name ? 'itemActive': 'item'}
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
            <motion.div className={open===true ? "iconActive" : "iconInActive"}>
                {icon}
            </motion.div>
            <motion.span
                variants={subheading}
                className={open === true ? "show" : "hidden"}
            >
                {name}
            </motion.span>
        </motion.div>
    )
}

export default Item