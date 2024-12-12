import sqlite3

class Pratos:

  def __init__(self, nome, preco, linkDaImagem, categoria, db):
    self.nome = nome
    self.preco = preco
    self.linkDaImagem = linkDaImagem
    self.db = db
    self.categoria = categoria

  def salvar(self):
    self.db.cursor.execute('INSERT INTO pratosBanco (nomePrato, preco, linkDaImagem, categoria) VALUES (?, ?, ?, ?)', (self.nome, self.preco, self.linkDaImagem, self.categoria) )
    self.db.conexao.commit()

  @staticmethod
  def deletar(db, pratos_id):
    db.cursor.execute('DELETE FROM pratosBanco WHERE id = ?', (pratos_id,) )
    db.conexao.commit()

  def atualizar(self, novo_nome, novo_preco, novo_link, nova_categoria):
    self.db.cursor.execute('UPDATE pratosBanco SET nomePrato = ?, preco = ?, linkDaImagem = ?, categoria = ? WHERE nomePrato = ?', (novo_nome, novo_preco, novo_link, nova_categoria, self.nome) )
    self.db.conexao.commit()
    self.nome = novo_nome
    self.preco = novo_preco
    self.linkDaImagem = novo_link


  @staticmethod
  def listar_usuarios(db):
    db.cursor.execute('SELECT * FROM pratosBanco')
    pratos = db.cursor.fetchall()
    if pratos:
      for prato in pratos:
        print(f'ID: {prato[0]}, Nome: {prato[1]}, Preco: {prato[2]}, linkDaImagem: {prato[3]}, categoria: {prato[4]}')