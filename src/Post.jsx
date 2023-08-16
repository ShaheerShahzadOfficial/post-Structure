import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ForumIcon from '@mui/icons-material/Forum';
import TelegramIcon from '@mui/icons-material/Telegram';
import "./post.css"

const Post = ({ item }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    const [LikedPost, setLikedPost] = useState(false)

    return (
        <Card sx={{
            width: 300, m: 2, boxShadow: `20px 20px 40px #c7cacf, -20px -20px 40px #c7cacf;`,
            borderRadius: "15px", backgroundColor: "#eaeef3", alignItems: "center"
        }}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        <Avatar
                            alt={item?.name}
                            src={item?.avatar}
                        />
                    )
                }
                action={
                    loading ? null : (
                        <IconButton style={{outline:"0px"}}>
                            <MoreVertIcon />
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        item?.name
                    )
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        item?.date
                    )
                }
            />
            {loading ? (
                <Skeleton sx={{ height: "18vmax" }} animation="wave" variant="rectangular" />
            ) : (
                <div className='imageContainer'>
                {/* <CardMedia
                    component="img"
                    image={item?.imageUrl}
                    src={item?.imageUrl}
                    security={true}
                    alt="User Avatar"
                /> */}
                <img crossOrigin='anonymous'  src={item.imageUrl} alt={item?.caption} />
                </div>
            )}
            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography variant="caption" color="Scrollbar"  component="h2">
                            {
                               item?.caption
                            }
                        </Typography>

                        <hr className='new' />
                        <div className='iconContainer'>
                            {LikedPost === true ? (
                                <ThumbUpIcon color='primary' onClick={() => setLikedPost(false)} />
                            ) : (
                                <ThumbUpOffAltIcon color='primary' onClick={() => setLikedPost(true)} />
                            )}

                            <ForumIcon color='primary' />
                            <TelegramIcon color='primary' />
                        </div>
                    </React.Fragment>
                )}
            </CardContent>
        </Card>
    )
}

export default Post
