let IS_PROD = false;

const server = IS_PROD ?
    "https://movierecommender-backend-n1ls.onrender.com" :

    "http://localhost:5000"


export default server;