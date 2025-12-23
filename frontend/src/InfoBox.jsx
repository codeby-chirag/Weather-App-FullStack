import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
// Import Icons
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    // 1. Define distinct image URLs for different weather
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        // 2. Logic to choose the correct image
                        image={
                            info.humidity > 80 
                                ? RAIN_URL 
                                : info.temp > 15 
                                ? HOT_URL 
                                : COLD_URL
                        }
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                // 3. Logic to choose the correct Icon
                                info.humidity > 80 
                                    ? <ThunderstormIcon/> 
                                    : info.temp > 15 
                                    ? <WbSunnyIcon/> 
                                    : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


