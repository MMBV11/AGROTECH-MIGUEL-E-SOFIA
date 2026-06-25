# AgroTech - Sistema de Gestão de Gado de Corte

O **AgroTech** é um protótipo de software web criado para a gestão agropecuária e controle de gado de corte. Ele foi desenvolvido com o propósito de ser uma demonstração acadêmica e um portfólio visual, utilizando uma arquitetura 100% *client-side* (frontend) para facilitar o acesso e a hospedagem sem a necessidade de configurações complexas.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído para ser do tipo "Zero Setup", operando de forma autônoma no navegador:
- **HTML5**: Estrutura semântica e acessível da Single Page Application (SPA).
- **CSS3**: Estilização moderna baseada em variáveis (`:root`), Flexbox, CSS Grid e layout totalmente responsivo com um design voltado a sistemas empresariais (SaaS).
- **Vanilla JavaScript**: Toda a lógica de controle de estado, renderização de telas, armazenamento na memória, cálculos e simulação de autenticação foram feitos sem o uso de bibliotecas como React ou Vue.
- **Chart.js** & **FontAwesome**: Importados diretamente por CDN para a renderização de gráficos estáticos e ícones temáticos do agronegócio.

## 🐄 Funcionalidades Disponíveis

1. **Dashboard Estratégico**: Indicadores de total de animais, peso médio, quantidade de lotes, GMD e três gráficos dinâmicos.
2. **Gestão de Animais**: Listagem detalhada (com mínimo de 20 animais pré-cadastrados), permitindo cadastro, edição e exclusão de bovinos (lógica em memória).
3. **Controle de Pesagem**: Histórico de pesagens com atualização automática do peso atual e repercussão imediata nos gráficos do Dashboard.
4. **Relatórios Gerenciais**: Filtros rápidos exibindo "Resumo Geral", "Top 5 Animais Mais Pesados", "Animais em Engorda" e "Animais Prontos para Venda (>500kg)", com opção para exportação em PDF via impressão do navegador.
5. **Lote de Engorda**: Monitoramento exclusivo dos animais ativos no regime de engorda intensiva, simulando dias desde a entrada e previsão de venda.

## 🔑 Credenciais de Acesso (Demonstração)

Para acessar o sistema a partir da tela de login inicial, utilize as credenciais padrão de demonstração:

- **Usuário**: `admin`
- **Senha**: `admin123`

*(Nota: A autenticação é simulada via `sessionStorage` para propósitos exclusivos de demonstração e portfólio).*

## 💻 Instruções para Execução Local

Para rodar este projeto em seu próprio computador, não é necessário instalar Node.js, NPM ou servidores de banco de dados:

1. Faça o clone ou download deste repositório (.zip).
2. Extraia os arquivos para uma pasta.
3. Clique duas vezes no arquivo `index.html`. O sistema será aberto diretamente em seu navegador padrão.
4. Insira as credenciais de demonstração e explore as funcionalidades.

## 🌐 Hospedagem no GitHub Pages

O projeto está totalmente otimizado e estruturado com **caminhos relativos**, sendo 100% compatível com a hospedagem gratuita do GitHub Pages.

**Passo a passo para publicar:**
1. Crie um novo repositório no seu GitHub.
2. Faça o upload ou "push" dos arquivos deste projeto (mantendo a estrutura de `index.html` na raiz, e as pastas `css/`, `js/` e `assets/`).
3. No repositório, vá na aba **Settings** > **Pages**.
4. Em "Build and deployment", selecione a branch `main` (ou `master`) e a pasta `/(root)`.
5. Clique em Save. Após alguns minutos, o GitHub lhe fornecerá um link público onde seu sistema AgroTech já estará acessível e funcional na web!

---
*Projeto com fins acadêmicos e demonstrativos de engenharia de software e design de interfaces.*
