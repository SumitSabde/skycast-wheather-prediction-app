import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {

    const INIT_URL="https://images.unsplash.com/photo-1768236872594-53abf5cd156a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsZWFyJTIwc2t5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=is&k=20&c=LzGX1eZTBvpNMvXXFs5wfYQCzf7ThvKb4cVUZCkirKk=";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=is&k=20&c=Zd0sTYe-tdBCxOg19NgJ_CpTv5gMu_AkoMjOv93_J2w=";

        
    

    return (
        
        <div className='InfoBox'>
            <br />
            <Card sx={{ maxWidth: 345 }} className='card'>
                <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>100? RAIN_URL : info.temp>30? HOT_URL : info.temp<10? COLD_URL : INIT_URL}
                title="green iguana"
                className='img'
                />
            <CardContent  className="card-info">
                <Typography gutterBottom variant="h5" component="div" className='title'>
                    {info.city}
                </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        Temperature: {info.temp}°C <br />
                        Feels Like: {info.feelsLike}°C <br />
                        Humidity: {info.humidity}% <br />
                        Temp Max: {info.tempMax}°C <br />
                        Temp Min: {info.tempMin}°C <br />
                        Description: {info.description}
                    </Typography>

            </CardContent>
    
            </Card>
        </div>
        

    )};