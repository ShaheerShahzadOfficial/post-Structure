import { Avatar, Typography } from '@mui/material'
import React from 'react'
import "./users.css"
const Users = ({ setOpen }) => {
    return (
        <div className='userContainer' onClick={() => setOpen(true)}>
            <Avatar
                alt={"Babar Azam"}
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJtlgDfmZuhjoAh8ke-YPLrZIjwRuw99IRw&usqp=CAU"}
            />
            {
                /* There is already an h1 in the page, let's not duplicate it. */
            }
            <Typography variant="h7">
            Babar Azam
            </Typography>
        </div>
    )
}

export default Users