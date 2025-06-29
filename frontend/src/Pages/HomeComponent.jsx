import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function HomeComponent() {
    const [movie, setMovie] = useState('');
    const [recommendation, setRecommendation] = useState([]);


    const fetchPoster = async (movie_id) => {
    const API_KEY = "8265bd1679663a7ea12ac168da84d2e8";
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        return "https://image.tmdb.org/t/p/w500/" + data.poster_path;
    } catch (error) {
        console.error("Poster fetch error:", error);
        return ""; // fallback if API fails
    }
};

    const handleRecommendation = async (e) => {
    e.preventDefault();
    console.log(movie);
    try {
        const response = await fetch('http://localhost:5000/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ movie }),
        });

        const data = await response.json();
        if (data.recommended_movies) {
            console.log("Received recommendations:", data.recommended_movies);

            // Extract title and movie_id
            const recommendationsWithPosters = await Promise.all(
                data.recommended_movies.map(async (item) => {
                    const [title, movie_id] = item.split('|');
                    const poster = await fetchPoster(movie_id);
                    return { title, poster };
                })
            );
            setRecommendation(recommendationsWithPosters);
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        alert('Fetch error: ' + error.message);
    }
};


    return (
        <>
            <div className="heading">
                <h1>Movie Recommendation System</h1>
                <h2>Find your next Watch</h2>
            </div>
            <div className="userInput">
                <form onSubmit={handleRecommendation}>
                    <h3 style={{marginBottom:'2rem'}}>Your taste, your movies, just one title away :</h3>
                    <TextField
                        id="standard-basic"
                        // label="Your taste, your movies, just one title away"
                        variant="outlined"
                        value={movie} // ✅ ensures typing works
                        onChange={(e) => setMovie(e.target.value)}
                         sx={{
        marginBottom: '2rem',
        width: '27rem',
        '& .MuiInputBase-root': {
            backgroundColor: 'white', // force white background for input
            color: 'black'            // ensure text is visible
        },
        '& .MuiInputLabel-root': {
            color: 'white',           // label in white to be visible on black background
        },
    }}
                    />
                    <br />
                    <Button className='recommend-btn' type="submit" variant="contained">Recommend</Button>
                </form>
</div>
                {recommendation.length > 0 && (
            <div className='recommendations'>
                <h2 className='reco-title'>Recommended Movies:</h2>
                 <Grid className='card-grid' container spacing={7} direction="row" wrap="nowrap" sx={{ overflowX: 'auto',padding: '1rem'}} >
                    {recommendation.map((rec, index) => (
                        <Grid item key={index}>
                            <Card sx={{ maxWidth: 250, backgroundColor: '#483D8B', color: 'white' }}>
                                <img 
                                    src={rec.poster} 
                                    alt={rec.title} 
                                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="body1" align="center">{rec.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
    </div>
)}
        </>
    );
}
