class ExportadorParaJS:

  def __init__(self, db):
    self.db = db

  def exportar_usuarios(self, arquivo_js):
    try:
        self.db.cursor.execute('SELECT * FROM pratosBanco')
        pratos = self.db.cursor.fetchall()

        with open(arquivo_js, 'w') as f:
            f.write('export const pratosBanco = [\n')
            for prato in pratos:
                f.write(f"{{ id: {prato[0]}, nome: '{prato[1]}', preco: '{prato[2]}', linkDaImagem: '{prato[3]}' }},\n")
            f.write('];\n')

        print(f"Arquivo {arquivo_js} exportado! ")
    except Exception as e:
       print("Erro ao exportar o arquivo: {e}")