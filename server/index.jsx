
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from "../src/App.tsx"
import { render } from '../src/entry-server.tsx';

const app = express();

app.use('/static', express.static('dist'));

app.get('/*', async(req, res) => {
  const { html } = await render(req);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>SSR</title></head>
    <body>
      <div id="app">${html}</div>
      <script type="module" src="/src/entry-client.tsx"></script>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});