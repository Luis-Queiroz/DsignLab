# Dsign Lab — site

Site do estúdio de design gráfico **Dsign Lab**: Identidade > Artes > Conteúdo.

Feito só com HTML, CSS e JavaScript puro. Não precisa instalar nada.

## Estrutura

```
index.html          página do site
css/style.css       visual (cores, fontes, layout)
js/main.js          interações (serviços e filtro do portfólio)
assets/img/         logo, favicon e imagens do portfólio
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `dsignlab`).
2. Envie **o conteúdo desta pasta** para a raiz do repositório. O `index.html` precisa ficar na raiz, não dentro de outra pasta.
   Pelo navegador: *Add file > Upload files*, arraste tudo e clique em *Commit changes*.
3. Vá em *Settings > Pages*.
4. Em *Source*, escolha *Deploy from a branch*. Selecione a branch `main` e a pasta `/ (root)`, depois clique em *Save*.
5. Em cerca de 1 minuto, o site fica no ar em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Para testar no computador antes, é só abrir o `index.html` no navegador.

## Como adicionar um projeto ao portfólio

1. Coloque a imagem em `assets/img/` (de preferência horizontal, com até cerca de 1800 px de largura).
2. No `index.html`, dentro de `<div class="grade">`, copie um bloco `<article class="projeto ...">` e troque:
   - `data-cat`: `identidade`, `artes` ou `conteudo`
   - `src` e `alt` da imagem
   - o título no `<h3>` e a categoria no `<span>`
3. O tamanho do bloco é definido por `projeto--7` (largo) ou `projeto--5` (estreito). Em cada linha, os números devem somar 12.

### Quando tiver projetos de Conteúdo

- No `index.html`, adicione o botão de filtro junto aos outros:
  `<button type="button" class="filtro" data-filtro="conteudo" aria-pressed="false">Conteúdo</button>`
- No `js/main.js`, mude `temProjetos: false` para `true` no bloco `conteudo`.

## Onde editar textos e contatos

- **Texto "Sobre":** procure por `sobre__extra` no `index.html`.
- **Contatos** (WhatsApp, Instagram, e-mail): seção `id="contato"` no `index.html`.
- **Cor de destaque:** `--destaque` no início do `css/style.css`.
