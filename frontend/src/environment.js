let IS_PROD = true;

const server = IS_PROD ?
    "https://movie-recommendation-system-backend-f6ub.onrender.com" :

    "http://localhost:5000"


export default server;