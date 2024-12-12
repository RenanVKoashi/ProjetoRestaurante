import json
import sqlite3
import os

# Caminho do arquivo JSON
FILE_PATH = 'reservations.json'

def create_db():
    conn = sqlite3.connect('reservations.db')
    cursor = conn.cursor()

    # Apagar a tabela existente, caso haja
    cursor.execute('DROP TABLE IF EXISTS reservations')

    # Criar a tabela com a estrutura correta
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS reservations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            date TEXT,
            table_number INTEGER,
            people_count INTEGER
        )
    ''')

    conn.commit()
    conn.close()

# Função para salvar os dados no banco de dados
def save_reservations_to_db():
    # Verificar se o arquivo JSON existe
    if os.path.exists(FILE_PATH):
        with open(FILE_PATH, 'r') as f:
            reservations = json.load(f)

        # Conectar ao banco de dados SQLite3
        conn = sqlite3.connect('reservations.db')
        cursor = conn.cursor()

        # Inserir cada reserva no banco de dados
        for reservation in reservations:
            cursor.execute('''
                INSERT INTO reservations (name, date, table_number, people_count)
                VALUES (?, ?, ?, ?)
            ''', (reservation['name'], reservation['date'], reservation['tableNumber'], reservation['peopleCount']))

        conn.commit()
        conn.close()

        print("Reservas salvas no banco de dados SQLite3!")
    else:
        print("Arquivo JSON não encontrado.")

# Função para adicionar reservas ao arquivo JSON
def add_reservation_to_json(name, date, table_number, people_count):
    # Carregar as reservas existentes do arquivo JSON
    if os.path.exists(FILE_PATH):
        with open(FILE_PATH, 'r') as f:
            reservations = json.load(f)
    else:
        reservations = []

    # Adicionar a nova reserva
    reservations.append({
        'name': name,
        'date': date,
        'tableNumber': table_number,
        'peopleCount': people_count
    })

    # Salvar novamente no arquivo JSON
    with open(FILE_PATH, 'w') as f:
        json.dump(reservations, f, indent=4)

# Exemplo de uso (simulando a adição de uma reserva e a transferência para SQLite3)
if __name__ == "__main__":
    # Criar o banco de dados SQLite3
    create_db()

    # Adicionar uma reserva para teste
    add_reservation_to_json('João Silva', '2024-12-15', 1, 4)

    # Transferir reservas do JSON para o banco de dados SQLite3
    save_reservations_to_db()