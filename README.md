# Festa Junina - App Web

Aplicativo web de Festa Junina completo com login, cadastro, sistema de fichas, ranking ao vivo e painel admin integrado ao Supabase.

## Tecnologias

- Frontend: HTML, CSS e JavaScript
- Backend / banco de dados: Supabase
- Hospedagem recomendada: Vercel

## Estrutura do projeto

- `index.html` — interface principal e páginas de autenticação
- `style.css` — estilo visual moderno com tema de festa junina
- `script.js` — lógica de autenticação, CRUD e integração Supabase
- `assets/` — pasta criada para imagens, áudio e recursos futuros
- `README.md` — instruções de instalação e deploy
- `supabase-schema.sql` — modelo de banco para criar as tabelas

## Configuração do Supabase

1. Crie um projeto no [Supabase](https://app.supabase.com).
2. No menu `Authentication`, habilite `Email` como método de login.
3. No menu `SQL`, crie as tabelas usando o arquivo `supabase-schema.sql`.
4. Em `Settings > API`, copie o `URL` e a `anon key`.
5. Abra `script.js` e substitua:

```js
const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
```

pelo seu `URL` e `anon key`.

## Rodando localmente

Basta abrir `index.html` no navegador ou usar uma extensão de servidor local como Live Server no VS Code.

## Deploy no Vercel

1. Conecte o repositório ao Vercel.
2. Configure as variáveis de ambiente no Vercel, caso use build ou chaves no frontend.
3. Deploy automático publicará o app.

> Observação: em sites estáticos, o `anon key` Supabase é usado no frontend. Não compartilhe essa chave publicamente se o projeto não for de demonstração.

## Funcionalidades implementadas

- Tela inicial com tema Festa Junina
- Animações suaves e bandeirinhas
- Login e cadastro com Supabase Auth
- Persistência de sessão
- Cardápio com pedidos
- Sistema de fichas com saldo persistente
- Ranking ao vivo
- Painel admin para adicionar comidas, ver usuários e pedidos







- Use `supabase-schema.sql` para criar o banco de dados com as tabelas necessárias.- Para habilitar o painel admin, defina manualmente `is_admin = true` na tabela `usuarios` para o usuário desejado.## Observações- Modo escuro e notificações animadas- Gerador de QR Code simples