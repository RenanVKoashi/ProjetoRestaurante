import sqlite3

class Pratos:

  def __init__(self, nome, preco, linkDaImagem, db):
    self.nome = nome
    self.preco = preco
    self.linkDaImagem = linkDaImagem
    self.db = db

  def salvar(self):
    self.db.cursor.execute('INSERT INTO pratos (nomePrato, preco, linkDaImagem) VALUES (?, ?, ?)', (self.nome, self.preco, self.linkDaImagem) )
    self.db.conexao.commit()

  @staticmethod
  def deletar(db, pratos_id):
    db.cursor.execute('DELETE FROM pratos WHERE id = ?', (pratos_id,) )
    db.conexao.commit()

  def atualizar(self, novo_nome, novo_preco, novo_link):
    self.db.cursor.execute('UPDATE pratos SET nomePrato = ?, preco = ?, linkDaImagem = ? WHERE nomePrato = ?', (novo_nome, novo_preco, novo_link, self.nome) )
    self.db.conexao.commit()
    self.nome = novo_nome
    self.preco = novo_preco
    self.linkDaImagem = novo_link


  @staticmethod
  def listar_usuarios(db):
    db.cursor.execute('SELECT * FROM pratos')
    pratos = db.cursor.fetchall()
    if pratos:
      for prato in pratos:
        print(f'ID: {prato[0]}, Nome: {prato[1]}, Preco: {prato[2]}, linkDaImagem: {prato[3]}')