import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    const INIT_URL =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqpFDuX9UzZLV2QkRL5e0TbkUkwv2dJPtwA&s";

    const COLD_URL =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeqRoDMPlpZJqu9-EpIWq_2czdH-iBMundQ&s";

    const HOT_URL =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVKiBcpAF0JOJbzqu5hXQapIu8-LS5i9NWQ&s";

    const RAIN_URL =
        "https://static.vecteezy.com/system/resources/thumbnails/033/645/252/small/drizzle-rainy-day-in-autumn-background-and-wallpaper-generative-ai-photo.jpg";

    return (
        <div className="InfoBox">

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity > 80 ? <WbSunnyIcon/> : info.temp > 15 ? <AcUnitIcon /> : <LightModeIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}</p>
                            <p>Humidity = {info.humidity}&deg;</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> feels like = {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}