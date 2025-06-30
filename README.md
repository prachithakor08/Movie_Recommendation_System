**🎬 Movie Recommender System**<br><br>
A clean, simple Movie Recommendation Web App suggesting movies similar to your favorites using Bag of Words vectorization for similarity computation.<br>
<br><br>
**🚀 Features**<br>
✅**Movie Recommendations:** Get top 5 similar movies based on your input.<br>
✅**Bag of Words Vectorization:** Computes similarities using vectorized metadata.<br>
✅ **Express + Node.js Backend:** Handles API requests and Python-based recommendation processing.<br>
✅ **React Frontend:** Clean, responsive UI with Material-UI.<br>
✅ **Google Fonts:** Aesthetic typography for a polished look.<br>
✅ **TMDB API Integration:** Automatically fetches movie posters and overviews for recommendations.<br>
✅ **Poster Card Display:** Shows recommendations in beautiful cards for easy exploration.<br>
<br><br>
**🛠️ Tech Stack**
**Frontend :** React + Material UI<br>
**Backend :** Node.js + Express.js + Python (for recommendation logic)<br>
**Machine Learning :** Bag of Words vectorization + Cosine Similarity for recommendations<br>
**APIs :** TMDB API for movie posters and details<br>
<br><br>

**💡 How It Works**
1. User inputs a movie name in the React frontend.<br>
2. Frontend sends the movie name to the Express backend.<br>
3. Backend calls Python recommender logic using python-shell.<br>
4. Python uses Bag of Words for similarity calculations from similarities.pkl.<br>
5. Backend fetches posters and overviews using TMDB API for the recommended movies.<br>
6. Returns movie titles, posters, and details to the frontend.<br>
7. Frontend displays recommendations beautifully using Material-UI cards with Google Fonts.<br>

**✨ Screenshots**
### 🏠 Home Page
![Home Page](screenshots/home.png)

### 🎥 Recommendations Display
![Recommendations](screenshots/recommendations.png)
