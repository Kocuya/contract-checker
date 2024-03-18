from flask import Flask
from .app.contracts.routes import contracts_bp

def create_app():
    app = Flask(__name__)

    app.register_blueprint(contracts_bp)
    
    return app