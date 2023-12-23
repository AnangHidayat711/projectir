from flask import Flask, jsonify, render_template
import os

# app = Flask(__name__)


# @app.route('/')
# def index():
#     return jsonify({"Choo Choo": "Welcome to your Flask app 🚅"})


# if __name__ == '__main__':
#     app.run(debug=True, port=os.getenv("PORT", default=5000))
from flask import Flask, request, render_template
from joblib import load
from sklearn.feature_extraction.text import TfidfVectorizer
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
import nltk
from nltk.corpus import stopwords

app = Flask(__name__)

# Beranda
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html') 

# Deskripsi
@app.route('/deskripsi', methods=['GET'])
def deskripsi():
    return render_template('deskripsi.html')

@app.route('/prediksi', methods=['GET'])
def prediksi():
    # Download NLTK resources
    # nltk.download('punkt')
    # nltk.download('stopwords')

    # model_access_path = "model/Access_Naive Bayes_model.joblib"
    # model_amenities_path = "model/Amenities_KNN_model.joblib"
    # model_attraction_path = "model/Attraction_SVM_model.joblib"
    # model_noAspect_path = "model/No Aspect_Rocchio_model.joblib"
    # model_price_path = "model/Price_Rocchio_model.joblib"

    # model_access = load(model_access_path)
    # model_amenities = load(model_amenities_path)
    # model_attraction = load(model_attraction_path)
    # model_noAspect = load(model_noAspect_path)
    # model_price = load(model_price_path)

    # # Get the Indonesian stopwords
    # stop_words = set(stopwords.words('indonesian'))


    # # Create a Stemmer using Sastrawi
    # stemmer = StemmerFactory().create_stemmer()
    
    # if request.method == "POST":
    #     review = request.form['review']
    #     aspek = request.form['aspek']

    #     # Preprocess the input review
    #     review = review.lower()  # Convert to lowercase
    #     tokens = nltk.word_tokenize(review)  # Tokenization
    #     tokens = [word for word in tokens if word.isalpha()]  # Remove non-alphabetic tokens
    #     tokens = [word for word in tokens if word not in stop_words]  # Remove stopwords
    #     tokens = [stemmer.stem(word) for word in tokens]  # Stemming

    #     clean_review = ' '.join(tokens)

    #     # Attractions
    #     if aspek == '1':
    #         result = model_attraction.predict([clean_review])[0]
    #     # Price
    #     elif aspek == '2':
    #         result = model_price.predict([clean_review])[0]
    #     # Access
    #     elif aspek == '3':
    #         result = model_access.predict([clean_review])[0]
    #     # Amenities
    #     elif aspek == '4':
    #         result = model_amenities.predict([clean_review])[0]
    #     # No Aspect
    #     else:
    #         result = model_noAspect.predict([clean_review])[0]
            
    #     return result;
    # else:
    return render_template('prediksi.html')

# Prediksi Post
@app.route('/sentimen', methods=['POST'])
def sentimen():
    # Download NLTK resources
    nltk.download('punkt')
    nltk.download('stopwords')

    model_access_path = "model/Access_Naive Bayes_model.joblib"
    model_amenities_path = "model/Amenities_KNN_model.joblib"
    model_attraction_path = "model/Attraction_SVM_model.joblib"
    model_noAspect_path = "model/No Aspect_Rocchio_model.joblib"
    model_price_path = "model/Price_Rocchio_model.joblib"

    model_access = load(model_access_path)
    model_amenities = load(model_amenities_path)
    model_attraction = load(model_attraction_path)
    model_noAspect = load(model_noAspect_path)
    model_price = load(model_price_path)

    # Get the Indonesian stopwords
    stop_words = set(stopwords.words('indonesian'))
    # Create a Stemmer using Sastrawi
    stemmer = StemmerFactory().create_stemmer()
    review = request.form['review']
    aspek = request.form['aspek']

    # Preprocess the input review
    review = review.lower()  # Convert to lowercase
    tokens = nltk.word_tokenize(review)  # Tokenization
    tokens = [word for word in tokens if word.isalpha()]  # Remove non-alphabetic tokens
    tokens = [word for word in tokens if word not in stop_words]  # Remove stopwords
    tokens = [stemmer.stem(word) for word in tokens]  # Stemming

    clean_review = ' '.join(tokens)

    # Attractions
    if aspek == '1':
        result = model_attraction.predict([clean_review])[0]
    # Price
    elif aspek == '2':
        result = model_price.predict([clean_review])[0]
    # Access
    elif aspek == '3':
        result = model_access.predict([clean_review])[0]
    # Amenities
    elif aspek == '4':
        result = model_amenities.predict([clean_review])[0]
    # No Aspect
    else:
        result = model_noAspect.predict([clean_review])[0]
        
    return result;
    
# Visualisasi
@app.route('/visualisasi', methods=['GET'])
def visualisasi():
    return render_template('visualisasi.html')

# Anggota
@app.route('/anggota', methods=['GET'])
def anggota():
    return render_template('anggota.html')

# if __name__ == '__main__':
#     app.run(port=3000, debug=True)
if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))

# if __name__ == '__main__':
#     app.run(host="0.0.0.0", port=5000, debug=true)
