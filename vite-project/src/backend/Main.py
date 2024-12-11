
from Pratos import Pratos
from GerenciadorBD import GerenciadorBD
from ExportadorParaJS import ExportadorParaJS

db = GerenciadorBD('pratos.db')

# Lista de Pratos para adicionar ao banco de dados
comidas_restaurante = [
    {"nomePrato": "Feijoada", "preco": 19.99, "link": "https://example.com/feijoada.jpg"},
    {"nomePrato": "Coxinha", "preco": 4.99, "link": "https://example.com/coxinha.jpg"},
    {"nomePrato": "Pão de Queijo", "preco": 3.49, "link": "https://example.com/pao_de_queijo.jpg"},
    {"nomePrato": "Açaí", "preco": 7.99, "link": "https://example.com/acai.jpg"},
    {"nomePrato": "Churrasco", "preco": 29.99, "link": "https://example.com/churrasco.jpg"},
    {"nomePrato": "Brigadeiro", "preco": 2.49, "link": "https://example.com/brigadeiro.jpg"},
    {"nomePrato": "Pastel", "preco": 5.99, "link": "https://example.com/pastel.jpg"},
    {"nomePrato": "Moqueca", "preco": 24.99, "link": "https://example.com/moqueca.jpg"},
    {"nomePrato": "Cuscuz", "preco": 6.49, "link": "https://example.com/cuscuz.jpg"},
    {"nomePrato": "Bolo de Rolo", "preco": 8.99, "link": "https://example.com/bolo_de_rolo.jpg"},
    {"nomePrato": "Empada", "preco": 4.49, "link": "https://example.com/empada.jpg"},
    {"nomePrato": "Vatapá", "preco": 18.49, "link": "https://example.com/vatapa.jpg"},
    {"nomePrato": "Quindim", "preco": 3.99, "link": "https://example.com/quindim.jpg"},
    {"nomePrato": "Tacacá", "preco": 12.99, "link": "https://example.com/tacaca.jpg"},
    {"nomePrato": "Escondidinho", "preco": 14.99, "link": "https://example.com/escondidinho.jpg"}
]

# Insert items into the database
for comida in comidas_restaurante:
    prato = Pratos(comida['nomePrato'], comida['preco'], comida['link'], db)
    prato.salvar()

exportar = ExportadorParaJS(db)
exportar.exportar_usuarios('pratos_banco.js')

db.fechar_conexao()