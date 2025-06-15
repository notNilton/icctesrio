````markdown
# AltSight · Visão Computacional para Agrotech

> **AltSight** é uma plataforma React+TypeScript que oferece soluções de visão computacional para o setor de agrotech. O front-end é escrito em TypeScript, empacotado com Node.js e hospedado no Firebase Hosting.

---

## 📦 Tecnologias

- **React** + **TypeScript** (TSX)
- **Node.js** (v16+)
- **Firebase Hosting** (via Firebase CLI)
- **React Router** para navegação
- **CSS Modules** / estilos globais
- **React Icons** (`react-icons/fa`, `react-icons/md`)

---

## 🚀 Pré-requisitos

- **Node.js** (v16 ou superior) e **npm** (v8+)
- **Firebase CLI**
  ```bash
  npm install -g firebase-tools
  ```
````

- Conta Firebase com projeto criado e Hosting habilitado

---

## 🎯 Instalação e desenvolvimento local

1. Clone este repositório:

   ```bash
   git clone https://github.com/notNilton/altsight-landingpage.git
   cd altsight
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

   > O servidor de dev abrirá em `http://localhost:5173` (ou porta configurada).

4. Acesse a aplicação no navegador e faça mudanças em tempo real.

---

## 🛠️ Scripts disponíveis

| Comando          | Descrição                                               |
| ---------------- | ------------------------------------------------------- |
| `npm run dev`    | Inicia o servidor de desenvolvimento (Hot-reload)       |
| `npm run build`  | Gera uma build otimizada em `dist/`                     |
| `npm run serve`  | Serve localmente a pasta de produção (`dist/`)          |
| `npm run lint`   | Executa linter (ESLint + Prettier)                      |
| `npm run test`   | Roda testes unitários (caso configurados)               |
| `npm run deploy` | Faz deploy para Firebase Hosting (após `npm run build`) |

---

## ⚙️ Configuração do Firebase

1. Faça login no Firebase CLI:
   ```bash
   firebase login
   ```
2. Aponte para o seu projeto Firebase:
   ```bash
   firebase use --add
   ```
3. Verifique se o `firebase.json` contém:
   ```jsonc
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```
4. Após `npm run build`, faça deploy:
   ```bash
   firebase deploy --only hosting
   ```

---

## 🤝 Contribuição

1. Faça um _fork_ deste repositório.
2. Crie uma branch feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Commit suas alterações e faça _push_:
   ```bash
   git commit -m "feat: adicionar nova funcionalidade X"
   git push origin feature/nova-funcionalidade
   ```
4. Abra um Pull Request descrevendo suas mudanças.

---
