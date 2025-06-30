const express = require('express');
const cors = require('cors');
const { PythonShell } = require('python-shell');

const app = express();

app.use(cors({
    origin: 'https://movie-recommendation-system-frontend-5y8d.onrender.com' // replace with '*' during local testing if needed
}));

app.use(express.json());

app.post('/recommend', async (req, res) => {
    const { movie } = req.body;
    let options = { args: [movie] };

    try {
        const results = await PythonShell.run('recommender.py', options);
        res.json({ recommended_movies: results });
    } catch (err) {
        console.error("Python error:", err);
        res.status(500).json({ error: err.toString() });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
