from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow React requests

# Moved API Key from React to here for security
API_KEY = "982819472f4b06c7e770d97b75d3ac1a"

@app.route("/weather")
def get_weather():
    city = request.args.get("city")

    if not city:
        return jsonify({"error": "City name is required"}), 400

    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(url, params=params)
    data = response.json()

    if response.status_code != 200:
        return jsonify({"error": "City not found"}), 404

    # We extract the specific data your React app needs
    return jsonify({
        "temp": data["main"]["temp"],
        "tempMin": data["main"]["temp_min"],
        "tempMax": data["main"]["temp_max"],
        "humidity": data["main"]["humidity"],
        "feelsLike": data["main"]["feels_like"],
        "weather": data["weather"][0]["description"],
        "platform": "POWERED BY PYTHON FLASK"
    })

if __name__ == "__main__":
    app.run(debug=True)