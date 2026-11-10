# cstsi-202602-aei

Atividades da disciplina **AEI — Animação de Elementos de Interface**
(CSTSI, IFSul Câmpus Pelotas, Prof. Gill Velleda Gonzales · 2026/02). Aulas 01 a 06.

## Aula 04 — Anime.js

### Atividade pedida pelo professor

Desenvolver **quatro animações** com a biblioteca Anime.js e integrar ao projeto de front:

1. Uma animação alterando **propriedades CSS** e utilizando **ease-functions** da biblioteca.
2. Uma animação em algum **elemento SVG** (ícone, logotipo ou qualquer outra imagem).
3. Uma animação do tipo **Motion Path**.
4. Uma animação do tipo **Morph**.

### O que foi feito no código

- **`atividade-04-1` — propriedades CSS + ease-function.** Um botão que, no clique,
  sobe e volta (`translateY`), cresce e volta (`scale`) e pisca de cor
  (`backgroundColor`). O primeiro trecho de cada propriedade usa `outQuad`; a volta
  usa a ease-function `outElastic(1, 0.4)` da biblioteca, que dá o repique elástico.
- **`atividade-04-2` — elemento SVG.** A lua (`src/img/lua.svg`) foi colada inline no
  HTML para a animação alcançar os `path` internos. No clique, os `path` percorrem
  `#00ff00 → #0000ff → #ff0000 → #000000` pela propriedade `fill` em keyframes,
  enquanto o `svg` inteiro varia o `scale`.
- **`atividade-04-3` — Motion Path.** Um céu azul com uma órbita elíptica desenhada
  num `path`. `svg.createMotionPath('#orbita')` devolve os valores de `translateX`,
  `translateY` e `rotate`, espalhados no `animate` para o sol dar voltas em `loop`
  (`ease: 'linear'`). O sol é `src/img/sol.svg` sobre uma bola com `radial-gradient`
  de amarelo no centro a branco na borda.
- **`atividade-04-4` — Morph.** Um ícone de menu de três traços. No clique, o traço
  de cima e o de baixo viram as diagonais de um "X" com `svg.morphTo`, e o traço do
  meio some com `opacity`. Clicando de novo, volta ao menu.

### O que foi instalado / mudado em configuração

- **Nada instalado.** A Anime.js 4.0.0 é carregada por CDN como módulo ESM, dentro do
  `<script type="module">` de cada página:
  `import { animate, svg } from 'https://cdn.jsdelivr.net/npm/animejs@4.0.0/+esm'`.
  `package.json` e `package-lock.json` não mudaram.
- **`vite.config.js`:** as quatro páginas da Aula 04 entraram em
  `build.rollupOptions.input`.
- **`src/index.html`:** nova seção "Aula 04" com os quatro links.

### O que foi adicionado

- `src/aula-04/atividade-04-1/` — `index.html` + `index.css`: botão e a animação do pulo.
- `src/aula-04/atividade-04-2/` — `index.html` + `index.css`: lua SVG inline e a animação de `fill`/`scale`.
- `src/aula-04/atividade-04-3/` — `index.html` + `index.css`: céu, órbita e o sol em Motion Path.
- `src/aula-04/atividade-04-4/` — `index.html` + `index.css`: menu que vira X com Morph.
- `src/img/lua.svg` e `src/img/sol.svg` — os ícones das atividades 2 e 3, movidos da
  raiz do projeto para a pasta de imagens.

## Aula 05 — Tailwind e SVGator

### Atividade pedida pelo professor

1. **Recriar uma animação do projeto de front aplicando Tailwind** e classes utilitárias,
   criando pelo menos uma classe.
2. **Criar ou editar uma animação SVG no SVGator** e importar o SVG exportado no projeto
   de front. Em React, importar com a tag `object` e exportar como CSSOnly.

### O que foi feito no código

- **`atividade-05-1` — Tailwind.** O skeleton loader da `atividade-02-6` foi recriado sem
  `index.css`: tamanho do card, altura e largura das barras, cantos arredondados, margens
  e o gradiente da foto viraram classes utilitárias (`w-80`, `h-5`, `w-3/5`, `rounded`,
  `mb-4`, `bg-linear-to-br`). A classe criada é a `brilho`, declarada com `@utility`
  dentro do `<style type="text/tailwindcss">`; ela guarda o gradiente de 200% de largura e
  chama a animação `--animate-brilho`, que está no `@theme` junto com os `@keyframes` —
  é assim que a versão 4 registra uma animação nova no tema. O `setTimeout` troca o
  skeleton pelo conteúdo com a utilitária `hidden`.
- **`atividade-05-2` — SVG animado.** O `src/img/sol-animado.svg` tem oito raios dentro de
  um `g` que gira 360° e um disco que pulsa de `scale`. Os `@keyframes` ficam dentro do
  próprio arquivo, que é o formato do export CSSOnly: a animação roda sem JavaScript. A
  página importa com `<object data="../../img/sol-animado.svg" width="300" height="300">`,
  a tag indicada pelo professor. O arquivo foi escrito à mão nesse formato, não saiu do
  editor do SVGator.

### O que foi instalado / mudado em configuração

- **Nada instalado.** O Tailwind 4 é carregado por CDN na própria página:
  `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`. Ele
  compila no navegador o que estiver em `<style type="text/tailwindcss">`, então o
  `@theme` e o `@utility` funcionam sem build. `package.json` e `package-lock.json` não
  mudaram.
- **`vite.config.js`:** as duas páginas da Aula 05 entraram em
  `build.rollupOptions.input`.
- **`src/index.html`:** nova seção "Aula 05" com os dois links.

### O que foi adicionado

- `src/aula-05/atividade-05-1/` — só `index.html`: o Tailwind substitui o `index.css`.
- `src/aula-05/atividade-05-2/` — `index.html` + `index.css`: a página que importa o SVG.
- `src/img/sol-animado.svg` — o sol com os raios girando e o disco pulsando.

## Aula 06 — Slider, Parallax e componente animado (React Bits)

### Atividade pedida pelo professor

Aplicar animações com **slider de imagens** e **efeito parallax** através de bibliotecas
JavaScript, e adicionar **algum componente animado** da React Bits, Lightswind UI ou outra
semelhante, explorando as configurações para personalizar os efeitos.

### O que foi feito no código

- **`atividade-06-1` — Swiper.** Quatro wallpapers num slider com `effect: 'cube'`. O
  `autoplay` troca a cada 2s (`delay: 2000`) e pausa com o mouse em cima
  (`pauseOnMouseEnter`); `loop` deixa girar sem fim, `speed: 800` é a duração do giro do
  cubo e o `cubeEffect` liga a sombra embaixo e nas faces. Os módulos `Autoplay` e
  `EffectCube` entram em `modules`, igual ao `swiper_init.js` do professor.
- **`atividade-06-2` — simpleParallax.** Duas imagens entre espaços vazios para dar
  rolagem. A biblioteca envolve cada `img` numa `div` com `overflow: hidden`, aumenta a
  imagem pelo `scale` e desloca conforme a rolagem na direção do `orientation`. A primeira
  usa `orientation: 'up'` com `scale: 1.5`; a segunda, `'down right'` com `scale: 2` e
  `delay: 0.5`, que suaviza o movimento atrasando o acompanhamento da rolagem.
- **`atividade-06-3` — React Bits.** O componente `SplitText` da React Bits (o mesmo do
  exemplo do professor) quebra o texto em letras com o `SplitText` do GSAP e anima cada uma
  de `from` para `to` com intervalo de `delay` ms entre elas. Personalizei a entrada: as
  letras sobem de 60px girando de -20° para 0° com `ease: 'back.out(1.7)'`, que passa um
  pouco do ponto e volta. O `SplitText.jsx` partiu do código da React Bits, enxugado para
  o que esta página usa: só divide em letras, dispara com o `ScrollTrigger` quando o topo
  do texto chega a 90% da tela e deixa o `display: inline-block` e o `overflow: hidden` no
  `.titulo` do CSS (o `overflow` esconde as letras enquanto sobem). O `main.jsx` monta o
  componente na `div#texto`.

### O que foi instalado / mudado em configuração

- **Instalado por npm** (`dependencies` do `package.json`), as mesmas bibliotecas dos
  exemplos do professor: `swiper`, `simple-parallax-js`, `react`, `react-dom`, `gsap` e
  `@gsap/react`. Desta vez não foi por CDN porque o componente da React Bits é React e
  precisa do Vite para compilar o JSX — o Vite 8 já faz isso sem plugin.
- **`vite.config.js`:** as três páginas da Aula 06 entraram em
  `build.rollupOptions.input`.
- **`src/index.html`:** nova seção "Aula 06" com os três links.

### O que foi adicionado

- `src/aula-06/atividade-06-1/` — `index.html` + `index.css`: o slider.
- `src/aula-06/atividade-06-2/` — `index.html` + `index.css`: as imagens com parallax.
- `src/aula-06/atividade-06-3/` — `index.html` + `index.css` + `main.jsx` + `SplitText.jsx`.
- `src/img/wallpapers/` — quatro wallpapers tirados dos exemplos do professor.

## Como rodar

As páginas da Aula 04 importam a biblioteca como módulo ES, então precisam de um
servidor (não abrem por `file://`). As demais aulas abrem direto no navegador.

```
npm install
npm run dev
```

## Uso de IA

Seguindo a orientação da disciplina: houve apoio de ferramentas de IA na preparação
do ambiente — configuração do Vite e este README, testes feitos a partir das
ferramentas Claude Code, Gemini Pro e Grok.
