import os
import logging
from flask import Flask, render_template

# Set up logging for debugging
logging.basicConfig(level=logging.DEBUG)

# Create the Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev_secret_key")

@app.route('/')
def index():
    """Render the main page of the Gen Z translator."""
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
