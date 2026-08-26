# KingLion Móveis Planejados — Site

## Abrir o site
Abra `index.html` no navegador. Para publicar no GitHub Pages, envie todo o conteúdo desta pasta para o repositório.

## Onde alterar cada coisa
- `index.html`: textos e seções da página inicial.
- `projetos.html`: estrutura da página de portfólio e botões de filtro.
- `sobre.html`: textos institucionais.
- `contato.html`: informações de contato.
- `css/global.css`: cores, tipografia, botões, cabeçalho e rodapé.
- `css/home.css`: visual exclusivo da Home.
- `css/projetos.css`: grade e modal da galeria.
- `js/main.js`: menu, animações e ano automático.
- `js/projetos.js`: CADASTRO DAS FOTOS DA GALERIA.

## Adicionar foto nova — método rápido
1. Converta a foto para `.webp`. Recomendado: 1080 a 1400 px no lado maior e 70–82% de qualidade.
2. Coloque em `assets/images/projetos/`.
3. Abra `js/projetos.js`.
4. Dentro de `const GALERIA = [...]`, copie um objeto existente e altere:
   - `arquivo`
   - `categoria`
   - `titulo`
   - `projeto`
5. Salve. A foto aparece automaticamente.

Categorias: `cozinhas`, `dormitorios`, `salas`, `banheiros`, `corporativo`, `outros`.

## Performance
As 19 fotos fornecidas foram convertidas para WebP. A galeria usa `loading=lazy` e mostra 9 itens por vez; o botão “Ver mais projetos” libera os próximos.

## Logo
Arquivo: `assets/images/logos/logo.png`. Para trocar, mantenha o mesmo nome ou altere as referências nos HTMLs.

## WhatsApp
Pesquise por `wa.me/5512991782030` nos arquivos HTML e substitua pelo número desejado.

## Observação sobre fotos originais
Esta pasta contém as versões otimizadas para publicação. Guarde os JPG/PNG originais em seu computador/backup; não é necessário subir os arquivos pesados para o site.
