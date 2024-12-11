import sqlite3

class GerenciadorBD:

  def __init__(self, nome_banco):
    self.conexao = sqlite3.connect(nome_banco)
    self.cursor = self.conexao.cursor()
    self.criar_tabelas()



  def criar_tabelas(self):
    # Ordem de criação
    # Comidas
    self.cursor.execute('''
          CREATE TABLE IF NOT EXISTS pratosBanco (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nomePrato TEXT NOT NULL,
            preco FLOAT NOT NULL,
            linkDaImagem TEXT NOT NULL
          )
    ''')
    print("Tabelas criadas.")
    # Drinks
    self.cursor.execute('''
          CREATE TABLE IF NOT EXISTS drinks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nomeDrink TEXT NOT NULL,
            preco FLOAT NOT NULL,
            linkDaImagem TEXT NOT NULL
          )
      ''')
    # Para efetivar a criação das tabelas
    self.conexao.commit()

  def fechar_conexao(self):
    self.conexao.close()