import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

export default function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    return (
        <div className="InfoBox">
            <h2>WeatherInfo - {info.weather}</h2>
            <div className="card-container">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    // info.humidity > 70 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL
                    image={
                        info.humidity > 70 
                          ? RAIN_URL
                          : info.temp > 20
                          ? HOT_URL
                          : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{" "}
                        {info.humidity > 70 ? ( 
                          <CloudySnowingIcon/>
                        ) : info.temp > 20 ? (
                          <SunnyIcon/>
                        ) : (
                          <AcUnitIcon/>
                        )}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}</p>
                        <p>Max Temp = {info.tempMax}</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
              </Card>
            </div>
        </div>
    );
}