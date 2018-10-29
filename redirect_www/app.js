const http = require('http')
const { PORT = 3000 } = process.env

const redirectUrl = "https://steinfletcher.com"

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Location', redirectUrl)
  res.statusCode = 301
  res.end(`Redirecting to ${redirectUrl}`)
}).listen(PORT)
