import sys
import pickle
import pandas as pd

# Load your model artifacts
movies = pd.read_pickle('movies.pkl')            
similarity = pickle.load(open('similarities.pkl','rb'))

def recommend(movie):
    if movie not in movies['title'].values:
        print(f"Error: Movie '{movie}' not found in dataset")
        sys.exit(1)
    movie_index = movies[movies['title'] == movie].index[0]
    distances = similarity[movie_index]
    movies_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]
    recommended_movies = [movies.iloc[i[0]]['title'] for i in movies_list]
    return recommended_movies

if __name__ == "__main__":
    movie = sys.argv[1]
    # print(f"Movie name received: {movie}")
    try:
        recommendations = recommend(movie)
        for rec in recommendations:
            movie_id = movies[movies['title'] == rec].iloc[0]['id']
            print(f"{rec}|{movie_id}")
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)
