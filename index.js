var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  //console.log(_url);
  var queryData = url.parse(_url, true).query;
  //console.log(queryData);
  //console.log(url.parse(_url, true));
  var title = queryData.id;
  var pathname = url.parse(_url, true).pathname;

  var description = '';

  var filelist = '';
  fs.readdir('./data', filelist);
  var list = '<ul>';
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</li>`;
    i = i + 1;
  }
  list = list + '</ul>';
  //console.log(list);

  var maintext = function(title, description, template) {
    //console.log(filelist);

    template = `<!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>
    `;
  }

  if (pathname === '/') {
    if (queryData.id === undefined) {
      title = 'Welcome';
      description = 'Hello, node JS';
      var template = '';
      maintext(title,description,template);
      response.writeHead(200);
      response.end(template);
    } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
        var template='';
        maintext(title,description,template);
        response.writeHead(200);
        response.end(template);
      });
    }
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
