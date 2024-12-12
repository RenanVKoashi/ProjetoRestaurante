import json
import sqlite3
import os

# Caminho para o arquivo JSON
# Supondo que o arquivo esteja na mesma pasta do script Python ou em uma subpasta
json_file_path = os.path.join(os.getcwd(), 'payment_data.json')  # Caso o arquivo esteja no diretório do projeto

# Conectar ao banco de dados SQLite (ou criar, se não existir)
conn = sqlite3.connect('payments.db')
cursor = conn.cursor()

# Criar a tabela de pagamentos, se não existir
cursor.execute('''
    CREATE TABLE IF NOT EXISTS payments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        card_number TEXT,
        expiry_date TEXT,
        email TEXT
    )
''')

# Função para salvar os dados no banco de dados
def save_payment(payment_data):
    cursor.execute('''
        INSERT INTO payments (card_number, expiry_date, email)
        VALUES (?, ?, ?)
    ''', (payment_data['cardNumber'], payment_data['expiryDate'], payment_data['email']))
    conn.commit()

# Função para ler o arquivo JSON e processar os dados
def process_payment_json(file_path):
    try:
        # Lê o arquivo JSON
        with open(file_path, 'r') as file:
            payment_data = json.load(file)
            # Salva os dados no banco de dados
            save_payment(payment_data)
            print("Pagamento processado e salvo no banco de dados.")
    except Exception as e:
        print(f"Erro ao processar o arquivo JSON: {e}")

# Chama a função para processar o arquivo JSON
process_payment_json(json_file_path)

# Fecha a conexão com o banco de dados
conn.close()