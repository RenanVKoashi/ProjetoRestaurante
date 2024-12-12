
from Pratos import Pratos
from GerenciadorBD import GerenciadorBD
from ExportadorParaJS import ExportadorParaJS

db = GerenciadorBD('pratos.db')

# Lista de Pratos para adicionar ao banco de dados
comidas_restaurante = [
    { "id": 1, "nome": "Feijoada", "preco": "19.99", "linkDaImagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtJ_H--tEhzPt4FTKOaBUVQwE6sATQSIlug&s", "categoria": "Jantar" },
    { "id": 2, "nome": "Coxinha", "preco": "4.99", "linkDaImagem": "https://www.thespruceeats.com/thmb/5ftNyXO0kOOxPVU2uBHF45k0OGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/coxinha-brazilian-chicken-croquettes-3029668-Hero-5b7d5f9546e0fb00252abc5f.jpg", "categoria": "Aperitivos" },
    { "id": 3, "nome": "Pao de Queijo", "preco": "3.49", "linkDaImagem": "https://img.freepik.com/free-photo/delicious-cheese-bread-baked-arrangement_23-2149042413.jpg?t=st=1734043674~exp=1734047274~hmac=c3b18cd4ecdd4e506efc80bb1e4bf809144b46afb7228841ac9c977292a505d4&w=740", "categoria": "Aperitivos" },
    { "id": 4, "nome": "Petit Gateau", "preco": "7.99", "linkDaImagem": "https://s2-receitas.glbimg.com/PSo7shjUPc3x5w_8zMTj3J4ZrEM=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/E/p/KwxNhgRFSwV6vTBCzmqA/petit-gateau.jpg", "categoria": "Sobremesa" },
    { "id": 5, "nome": "Churrasco", "preco": "89.99", "linkDaImagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIU8dh5xi2tmB5_5uCYEL_BPZb9MAFc1Filw&s", "categoria": "Jantar" },
    { "id": 6, "nome": "Brigadeiro", "preco": "2.49", "linkDaImagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQ1co4M1NE4YhqMPTVe_sBHrWVy9nZqt1vg&s", "categoria": "Sobremesa" },
    { "id": 7, "nome": "Pastel", "preco": "19.99", "linkDaImagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPg-YJqhwZ8IpoR5XHiO11PR51w2Iq5uS8DA&s", "categoria": "Aperitivos" },
    { "id": 8, "nome": "Moqueca", "preco": "24.99", "linkDaImagem": "https://static.itdg.com.br/images/640-440/1ae0fdb277d066045833d9f418dc236c/94841-original.jpg", "categoria": "Jantar" },
    { "id": 9, "nome": "Cuscuz", "preco": "20.49", "linkDaImagem": "https://i.panelinha.com.br/i1/bk-3729-cuscuz-de-milho-1.webp", "categoria": "Jantar" },
    { "id": 10, "nome": "Bolo de Rolo", "preco": "8.99", "linkDaImagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/d5c3b12263781084d3e84b11c2d33027.jpg", "categoria": "Sobremesa" },
    { "id": 11, "nome": "Empada", "preco": "4.49", "linkDaImagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5NfpmijzmUacVZ5UTH_NWUXWCePo8r1hZA&s", "categoria": "Aperitivos" },
    { "id": 12, "nome": "Vatapa", "preco": "18.49", "linkDaImagem": "https://static.itdg.com.br/images/1200-630/39df6bdede6c48b411e97c1a163f5593/101816-original.jpg", "categoria": "Jantar" },
    { "id": 13, "nome": "Quindim", "preco": "3.99", "linkDaImagem": "https://s2-receitas.glbimg.com/N-Sk8HaGCRjoV5Pby7CrMcKmK5E=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/k/e/ArHrTSSIuAYwfFBFBqGA/quindim-de-liquidificador.jpg", "categoria": "Sobremesa" },
    { "id": 14, "nome": "Tacaca", "preco": "12.99", "linkDaImagem": "https://acozinhabrasileira.com.br/wp-content/uploads/2021/09/receita-de-tacaca.jpg", "categoria": "Jantar" },
    { "id": 15, "nome": "Escondidinho", "preco": "14.99", "linkDaImagem": "https://acarnequeomundoprefere.com.br/uploads/media/image/_PNK9716-escondidinho-de-linguica-toscana-inteira_resize1.jpg", "categoria": "Jantar" },
    { "id": 16, "nome": "Caipirinha", "preco": "8.99", "linkDaImagem": "https://images.mrcook.app/recipe-image/01908f0e-8931-7cd8-97f1-2d99a41dd657", "categoria": "Bebida" },
    { "id": 17, "nome": "Mojito", "preco": "10.99", "linkDaImagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7newxgzNWgN0WmmN-e0jdt49XY7OBMFeig&s", "categoria": "Bebida" },
    { "id": 18, "nome": "Pina Colada", "preco": "12.49", "linkDaImagem": "https://static.itdg.com.br/images/1200-675/2bf79f2086a02a4317e8748c564ae8b1/pina-colada.jpg", "categoria": "Bebida" },
    { "id": 19, "nome": "Suco de Laranja", "preco": "4.99", "linkDaImagem": "https://blog.atacadao.com.br/wp-content/uploads/2024/01/Drinks-com-suco-de-laranja-conheca-opcoes-Foto-de-um-copo-de-suco-de-laranja-com-varias-laranjas-em-volta-Atacadao.jpg", "categoria": "Bebida" },
    { "id": 20, "nome": "Coca-Cola", "preco": "3.99", "linkDaImagem": "https://superboaopcao.loji.com.br/storage/uploads/XkMTT9rtm2yaMFnLJz0pPOY7WSvvzSiz2TKo8Hrx.jpeg", "categoria": "Bebida" }
]

# Insert items into the database
for comida in comidas_restaurante:
    prato = Pratos(comida['nomePrato'], comida['preco'], comida['link'], comida['categoria'], db)
    prato.salvar()

exportar = ExportadorParaJS(db)
exportar.exportar_pratos('pratos_banco.js')

db.fechar_conexao()