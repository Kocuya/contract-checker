from flask import Blueprint, request, jsonify, current_app
from werkzeug.utils import secure_filename
import os

# Blueprintの作成
contracts_bp = Blueprint('contracts', __name__, url_prefix='/contracts')

@contracts_bp.route('/upload', methods=['POST'])
def upload_contract():
    # ファイルがリクエスト内に存在するか確認
    if 'file' not in request.files:
        return jsonify({"error": "ファイルがリクエストに含まれていません"}), 400
    file = request.files['file']
    # ファイル名が空でないか確認
    if file.filename == '':
        return jsonify({"error": "ファイル名がありません"}), 400
    if file:
        filename = secure_filename(file.filename)
        # ファイルを保存するディレクトリのパス
        upload_folder = current_app.config['UPLOAD_FOLDER']
        file_path = os.path.join(upload_folder, filename)
        file.save(file_path)
        return jsonify({"message": "ファイルが正常にアップロードされました", "filename": filename}), 200

@contracts_bp.route('/list', methods=['GET'])
def list_contracts():
    # この部分には契約書リストを取得するロジックを実装します
    # ここでは、デモのために仮のデータを返すようにします
    contracts_demo = [
        {"type": "賃貸契約", "title": "契約書A", "date": "2023/01/01"},
        {"type": "借用契約", "title": "契約書B", "date": "2023/02/01"},
        {"type": "テスト契約", "title": "契約書C", "date": "2023/03/01"}
    ]
    return jsonify(contracts_demo), 200