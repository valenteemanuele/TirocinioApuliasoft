const http = require('http')



const server = http.createServer(function (req, res) {
  const url_json = new URL(req.url, 'http://example.com')
  let data= url_json.searchParams.get('iso')
  const time = new Date(data)
  let result

  if ((req.url).includes("parsetime")) {
    result = {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
  } else if ((req.url).includes("unixtime")) {
    result = { unixtime: time.getTime() }
  }

  if (result) {
    res.end(JSON.stringify(result))
  } else {
    res.end()
  }
})
server.listen(process.argv[2])