# BiblioHub

Projeto React + Vite preparado para execução no **GitHub Codespaces**.

## Executar no Codespaces

Ao criar um Codespace, as dependências são instaladas automaticamente. Depois, no terminal:

```bash
npm start
```

A aplicação será iniciada na porta **5173**. Se a página não abrir automaticamente, use a aba **PORTS / PORTAS** do Codespaces e selecione **Open in Browser** na porta 5173.

Se necessário, execute manualmente:

```bash
npm install
npm start
```

## Outros comandos

```bash
npm run build
npm run preview
```

## Estrutura principal

- `src/App.jsx` — aplicação principal
- `src/components/` — componentes React
- `src/data/books.js` — dados dos livros
- `src/styles/global.css` — estilos
- `package.json` — dependências e comandos
- `.devcontainer/devcontainer.json` — configuração do Codespaces

## Observações

- Não versione `node_modules/`.
- O projeto utiliza Node.js 22 no Codespaces.
- O Vite usa a porta 5173.
- Não use `npm audit fix --force` sem testar as alterações.
