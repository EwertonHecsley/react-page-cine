# CineFlix 🎬

Landing page de catálogo/ranqueamento de filmes, inspirada em interfaces de streaming.  
Projeto focado em **layout moderno**, **componentização em React**, **SCSS Modules** e **responsividade**.

---

<img width="1874" height="897" alt="image" src="https://github.com/user-attachments/assets/54699718-586c-45b2-8d18-3e9d9b38c248" />

---

## ✨ Funcionalidades

- **Header fixo** com logo CineFlix, navegação e ícone de menu hambúrguer no mobile.
- **Hero principal** destacando o filme “Batman”, com:
  - Título em destaque.
  - Texto de sinopse.
  - Botão de ação “Assistir agora”.
- **Lista de filmes em cards**:
  - Imagem do filme aplicada como **background** do card.
  - Informações de **título** e **gênero**.
  - **Star Rating interativo** (1 a 5 estrelas) por card.
- **Fundo com pôster em tela cheia**, com overlay escurecido e leve transparência para destacar o conteúdo.
- **Layout responsivo**, ajustando:
  - Tipografia.
  - Tamanho dos cards.
  - Distribuição dos elementos (desktop, tablet e mobile).
- Estrutura pronta para futura implementação de **modal** com detalhes ao clicar no card.

---

## 🧱 Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)
- SCSS Modules (CSS Modules com SASS)
- HTML5 / CSS3

---

## 🚀 Como rodar o projeto

Pré-requisitos:
- Node.js instalado (versão LTS recomendada).
- npm ou yarn.

### 1. Clonar o repositório
```
  git clone https://github.com/EwertonHecsley/react-page-cine.git
  cd react-page-cine
```

### 2. Instalar dependências
```
  npm install
```

### 3. Rodar em ambiente de desenvolvimento
```
  npm run dev
```

Por padrão, o projeto roda em `http://localhost:5173`.

### 4. Acessar pelo celular na mesma rede (opcional)

Para testar no celular conectado ao mesmo Wi‑Fi:
```
  npm run dev -- --host
```

Depois use o IP da sua máquina no navegador do celular, algo como:

`http://192.168.x.x:5173`

---

## 🧩 Componentes principais

### Header

- Logo CineFlix.
- Navegação com links (Início, Minha Lista).
- Ícones (busca, notificações, usuário).
- Menu hambúrguer no mobile, com navegação adaptada.

### Main

- Hero com:
  - Ícone/informação visual.
  - Título “Batman”.
  - Sinopse.
  - Botão “Assistir agora”.
- Seção de cards:
  - Montada a partir do array `movies` em `data/movies.js`.

### Card

- Recebe via props:
  - `title`
  - `genre`
  - `background` (imagem usada no `background-image` do card).
- Contém:
  - Gênero.
  - Título.
  - Componente de rating (`CardRating`).

### CardRating

- Componente reutilizável de estrelas (1 a 5).
- Controla:
  - `hovered` (estrela em foco).
  - `selected` (nota selecionada).
- Responsivo (ajuste do tamanho das estrelas para telas menores).

---

## 📱 Responsividade

- Uso de **flexbox** e **media queries** diretamente nos SCSS Modules.
- Ajustes principais:
  - Redução de fonte em headings e textos.
  - Cards refluindo de múltiplas colunas no desktop para duas colunas no tablet e uma no mobile.
  - Botões e espaçamentos adaptados para toque em telas menores.

---

## 🔮 Possíveis melhorias futuras

- Implementar **modal** com detalhes do filme ao clicar na parte superior do card.
- Persistir a nota de cada filme (rating) em estado global, contexto ou API.
- Adicionar filtros (por gênero, nota, ano).
- Integração com uma API real de filmes (por exemplo, TMDb).
- Testes básicos de componentes (Jest/React Testing Library).

---

## 👨‍💻 Autor

Desenvolvido por **Ewerton Hecsley**.  

Fique à vontade para abrir _issues_, sugerir melhorias ou usar este projeto como referência de estudo.




