export function tracktryRes(url, data, method, fn) {
  data = data || null
  let content
  if (data == null) {
    content = require("querystring").stringify(data)
  } else {
    content = JSON.stringify(data) //json format
  }

  var parse_u = require("url").parse(url, true)
  var isHttp = parse_u.protocol == "http:"
  var options = {
    host: parse_u.hostname,
    port: parse_u.port || (isHttp ? 80 : 443),
    path: parse_u.path,
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(content, "utf8"),
      "Tracktry-Api-Key": process.env.TRACKTRY_API_KEY,
    },
  }
  var req = require(isHttp ? "http" : "https").request(options, function (res) {
    var _data = ""
    res.on("data", function (chunk) {
      _data += chunk
    })
    res.on("end", function () {
      fn != undefined && fn(_data)
    })
  })
  req.write(content)
  req.end()
}
