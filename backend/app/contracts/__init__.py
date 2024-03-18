from flask import Blueprint

contracts = Blueprint('contracts', __name__)

from . import routes