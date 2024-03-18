from flask import Flask
from backend.app.contracts.routes import contracts_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(contracts_bp)