# 📅 Cronograma de Desenvolvimento — Mi Audota (Frontend)

> **Projeto:** Mi Audota — Frontend para a Pets API  
> **Stack:** React + Vite (JavaScript) + Axios  
> **API Base:** `http://localhost:3003`

---

## ✅ Fase 0 — Fundação (em andamento)

> Toda a lógica base da aplicação, sem nenhuma tela ainda.

- [x] Definição de stack e arquitetura
- [x] Estruturação de pastas (feature-based)
- [x] Configuração do projeto Vite + React
- [x] HTTP Client (`shared/api/client.js`) com axios
- [x] Constantes de endpoints (`shared/constants/endpoints.js`) ← **em andamento**
- [ ] Constantes de rotas do frontend (`shared/constants/routes.js`)
- [ ] Constantes de chaves do localStorage (`shared/constants/storage-keys.js`)
- [ ] Services: `enderecos`, `usuarios`, `instituicoes`, `pets`
- [ ] Services: `matches`, `adocoes`, `resgates`, `doacoes`

---

## 🟡 Segunda Entrega — 26/05 (Terça-feira)

> Primeiras telas visíveis: Landing Page inicial.

### Estrutura
- [ ] Estruturação de pastas completa
- [ ] Conexão com a API (client + services básicos funcionando)

### Landing Page — Parte 1
- [ ] **Cabeçalho:** logo atualizada + links âncora para seções da landing page
- [ ] **Rodapé:** links presentes (sem redirecionamento ainda)
- [ ] **Seção Hero (principal):**
  - Frase de efeito
  - Card de simulação de adoção ao lado
  - Botões "Quero adotar" e "Sou uma ONG"
  - Estatísticas de persuasão (ex.: "1200+ cadastros", "847 adoções realizadas")
- [ ] **Seção "Como Funciona":**
  - Passo a passo da adoção explicado em cards

---

## 🟡 Terceira Entrega — 29/05 (Sexta-feira)

> Landing Page completa.

### Landing Page — Parte 2
- [ ] **Links do cabeçalho** direcionando para as seções corretas (scroll suave)
- [ ] **Seção "Para Instituições":**
  - Argumentos para convencer ONGs a usar a plataforma
  - Botão de cadastro de ONG
  - Imagem/card com estatísticas sobre ONGs
- [ ] **Seção de Depoimentos:**
  - Cards com histórias de usuários/adotantes
- [ ] **Banner final da página:**
  - Botão "Começar"
  - Botão "Ver pets disponíveis"

---

## 🟠 Quarta Entrega — 02/06 (Terça-feira)

> Autenticação e listagem de pets.

### Autenticação
- [ ] **Tela de cadastro** — adotante
- [ ] **Tela de cadastro** — instituição (ONG)
- [ ] **Tela de login** — adotante
- [ ] **Tela de login** — instituição (ONG)
- [ ] Proteção de rotas (ProtectedRoute)
- [ ] Persistência do token JWT no localStorage
- [ ] Interceptors do axios (request + response/401)

### Pets
- [ ] **Tela de pets disponíveis:**
  - Cards de pets
  - Pop-up de detalhe ao clicar no card

---

## 🔴 Entrega Final — 09/06 (Terça-feira)

> Refinamentos, fluxos completos e polimento.

- [ ] **Tela de conclusão de adoção** ("Adoção realizada com sucesso!")
- [ ] Links do rodapé redirecionando para telas específicas
- [ ] Detalhes e refinamentos visuais gerais
- [ ] Revisão de responsividade
- [ ] Revisão de estados de loading, erro e lista vazia

---

## 🗂️ Backlog (se sobrar tempo)

> Funcionalidades desejáveis mas não obrigatórias para as entregas.

- [ ] Sistema de Match (swipe estilo Tinder) — usuário swipa em pets
- [ ] Sistema de Match — instituição swipa em usuários
- [ ] Tela "Meus Matches"
- [ ] Tela "Minhas Adoções" com status
- [ ] Tela de reportar resgate com mapa (React Leaflet)
- [ ] Tela de doações
- [ ] Dashboard da instituição
- [ ] Gerenciamento de pets (CRUD) pela instituição

---

## 📌 Legenda

| Símbolo | Significado |
|---|---|
| ✅ | Concluído |
| 🟡 | Em breve / próxima entrega |
| 🟠 | Planejado |
| 🔴 | Entrega final |
| ⬜ | Backlog |