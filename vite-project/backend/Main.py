import sqlite3

class Refeicoes:

  def __init__(self, nomeComida, linkImagem, db):
    self.nomeComida = nomeComida
    self.linkImagem = linkImagem
    self.db = db

  def salvar(self):
    self.db.cursor.execute('INSERT INTO comidas (nome, email) VALUES (?, ?)', (self.nome, self.email) )
    self.db.conexao.commit()

  def inserir(self):
    self.db.cursor.execute(f'INSERT INTO usuarios (nome, email) VALUES ({self.nome}, {self.email})')
    self.db.conexao.commit()

  @staticmethod
  def deletar(db, usuario_id):
    db.cursor.execute('DELETE FROM usuarios WHERE id = ?', (usuario_id,) )
    db.conexao.commit()

  def atualizar(self, novo_nome, novo_email):
    self.db.cursor.execute('UPDATE usuarios SET nome = ?, email = ? WHERE email = ?', (novo_nome, novo_email, self.email) )
    self.db.conexao.commit()
    self.nome = novo_nome
    self.email = novo_email


  @staticmethod
  def listar_usuarios(db):
    db.cursor.execute('SELECT * FROM usuarios')
    usuarios = db.cursor.fetchall()
    if usuarios:
      for usuario in usuarios:
        print(f'ID: {usuario[0]}, Nome: {usuario[1]}, Email: {usuario[2]}')