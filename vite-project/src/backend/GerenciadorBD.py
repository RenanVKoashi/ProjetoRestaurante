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
          CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nomeComida TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
          )
    ''')
    # Drinks
    self.cursor.execute('''
          CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            descricao TEXT NOT NULL,
            concluida INTEGER NOT NULL DEFAULT 0,
            usuario_id INTEGER NOT NULL,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
          )
      ''')
    # Para efetivar a criação das tabelas
    self.conexao.commit()

    def fechar_conexao(self):
      self.conexao.close()