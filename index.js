module.exports = (req, res) => {
  const path = req.url === '/' ? '' : req.url;
  res.writeHead(301, {
    Location: `https://do-ce.com${path}`
  });
  res.end();
};
