# ICCTES · Instituto do Cinturão Cultural, Turístico e Esportivo do Estado do Rio de Janeiro

Plataforma digital desenvolvida com foco em promoção cultural, esportiva e turística, integrando comunidades, atrativos e eventos do Cinturão do Rio de Janeiro. O projeto utiliza tecnologias modernas como React com TypeScript e é hospedado no Firebase Hosting, permitindo escalabilidade e desempenho otimizado para acesso público.

---

## Tecnologias e requisitos para desenvolvimento

1. **Node.js®**  
   Ambiente de execução JavaScript open-source, necessário para rodar as ferramentas de desenvolvimento.  
   Recomendamos a versão estável mais recente.  
   Baixe em: [https://nodejs.org/](https://nodejs.org/)

2. **Firebase CLI**  
   Ferramenta para gerenciamento e deploy no Firebase. Instale globalmente com:
   ```bash
   npm install -g firebase-tools
   ```

3. Acesso ao projeto Firebase do ICCTES  
   É necessário ter permissão no projeto Firebase oficial. Caso não tenha acesso, entre em contato com a equipe de gestão do instituto.

---

## Como rodar localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

```bash
git clone https://github.com/notNilton/icctesrio.git
cd icctesrio

npm install

npm run dev
```

O servidor de desenvolvimento será iniciado. Acesse no navegador: `http://localhost:5173`

---

## Como fazer deploy

Antes do deploy, certifique-se de estar autenticado com uma conta autorizada no projeto Firebase.

### 1. Faça login no Firebase CLI
```bash
firebase login
```
Use uma conta com permissão no projeto ICCTES.

### 2. Configure as variáveis de ambiente

Copie o arquivo de exemplo e preencha com as credenciais fornecidas pelo Firebase Console:

```bash
cp .env.example .env
```

Exemplo de conteúdo do `.env`:
```env
VITE_FIREBASE_API_KEY=AIzaSyDxMp5m1234567890AbCdEfGhIjKlMnOpQ
VITE_FIREBASE_AUTH_DOMAIN=icctes-12345.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=icctes-12345
VITE_FIREBASE_STORAGE_BUCKET=icctes-12345.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=20345678901
VITE_FIREBASE_APP_ID=1:20345678901:web:c7d6e5f4a3b2c1d0e9f8a7b6
```

### 3. Execute o deploy
```bash
npm run deploy
```

Esse comando realiza:
- `npm run build`: gera os arquivos estáticos na pasta `dist`
- `firebase deploy --only hosting`: publica os arquivos no Firebase Hosting

---

## Estrutura do projeto

- `src/` – código-fonte da aplicação (React + TypeScript)
- `dist/` – pasta gerada pelo build (não deve ser versionada)
- `firebase.json` – configurações do Firebase Hosting (alterações somente com autorização)
- `.env` / `.env.example` – variáveis de ambiente para configuração do Firebase

---

## Scripts disponíveis

| Comando         | Descrição                                  |
|-----------------|--------------------------------------------|
| npm run dev     | Inicia o servidor de desenvolvimento       |
| npm run build   | Gera a versão de produção                  |
| npm run serve   | Serve localmente a versão de produção      |
| npm run lint    | Executa análise de código (ESLint)         |
| npm run deploy  | Faz build e envia para o Firebase Hosting  |

---

## Regras para contribuição

- Não modifique `firebase.json` sem autorização da equipe técnica do ICCTES.
- Nunca adicione `node_modules/` ou `dist/` ao controle de versão.
- Alterações na branch principal (`main`) devem ser feitas via Pull Request.
- Teste localmente antes de submeter mudanças.
- Em caso de falha no deploy, comunique imediatamente o gestor do projeto.

---

## Sobre o ICCTES

O **Instituto do Cinturão Cultural, Turístico e Esportivo do Estado do Rio de Janeiro (ICCTES)** tem como missão integrar, valorizar e desenvolver os potenciais culturais, turísticos e esportivos das regiões que compõem o Cinturão do Rio. Através de políticas públicas, parcerias e tecnologia, o instituto promove o fortalecimento comunitário, a sustentabilidade e o acesso democrático à cultura, ao esporte e ao turismo.

🌐 Saiba mais: [www.icctes.rj.gov.br](https://www.icctes.rj.gov.br) *(exemplo)*
