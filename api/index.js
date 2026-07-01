export default function handler(req, res) {
  const path = req.url === '/' ? '' : req.url;
  res.writeHead(301, {
    Location: `https://do-ce.cl${path}`
  });
  res.end();
}
