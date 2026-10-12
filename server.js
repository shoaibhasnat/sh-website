import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;
const distPath = join(__dirname, 'dist');

// Serve static files from the dist directory with caching
app.use(express.static(distPath, { maxAge: '1h' }));

// SEO: Redirect /home to / (301 permanent redirect)
app.get('/home', (req, res) => {
  res.redirect(301, '/');
});

app.get('/home/', (req, res) => {
  res.redirect(301, '/');
}); 

// SEO: Redirect www to non-www
app.use((req, res, next) => {
  const host = req.headers.host;
  if (host && host.startsWith('www.')) {
    const newHost = host.slice(4); // remove 'www.'
    const newUrl = `https://${newHost}${req.url}`;
    return res.redirect(301, newUrl);
  }
  next();
});

// SEO: Redirect trailing slashes to non-trailing (except root)
// Only for HTML requests to avoid breaking API calls or static assets
app.use((req, res, next) => {
  const path = req.path;
  const isHtmlRequest = req.headers.accept && req.headers.accept.includes('text/html');
  
  // Skip if it's a file with extension (handled by express.static)
  const ext = path.split('.').pop();
  const hasExtension = path.includes('.') && ext.length > 0 && ext.length < 10;
  
  if (hasExtension) {
    return next();
  }
  
  // Redirect trailing slash to non-trailing (except root)
  if (path !== '/' && path.endsWith('/') && isHtmlRequest) {
    return res.redirect(301, path.slice(0, -1));
  }
  
  next();
});

// SPA fallback: For any route that isn't a static file, serve index.html
app.use('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  
  // Check if the requested path is NOT a file with an extension
  // This ensures actual files like .js, .css, .png are served by express.static above
  const ext = req.path.split('.').pop();
  const hasExtension = req.path.includes('.') && ext.length > 0 && ext.length < 10;
  
  if (hasExtension) {
    // File with extension not found in static files
    return res.status(404).send('File not found');
  }
  
  // Serve index.html for all route requests (SPA routing)
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Index file not found');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
  console.log(`Accessible at http://192.168.100.161:${PORT}`);
});
