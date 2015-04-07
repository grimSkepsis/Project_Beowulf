
//libraries we need
var sys = require("sys"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs");

//create server listening on port 1337
my_http.createServer(function(request,response){
  //grab url and parse the path name out, then cocatinate with path name of current
  //directory to get the full path name
  var my_path = url.parse(request.url).pathname,
  full_path = path.join(process.cwd(), my_path);

    var tmp  = my_path.lastIndexOf(".");
    var extension  = my_path.substring((tmp + 1));
  //check if the path exists
  filesys.exists(full_path, function(exists){
    //if it does not exist, throw an error
    if(!exists){
        response.writeHeader(404, {"Content-Type":"text/plain"});
        response.write("404 Not Found/n");
        response.end();
    }
    else{
      //if it does exist try to display the file
      filesys.readFile(full_path, "binary", function(err,file){
        //if we can't display the file properly throw an error
        if(err){
          response.writeHeader(500, {"Content-Type": "text/plain"});
          response.write(err + "\n");
          response.end();
        }
        //else display the file
        else{
          // response.writeHeader(200);
          // response.write(file, "binary");
          // response.end();
          if (extension === 'html') response.writeHeader(200, {"Content-Type": 'text/html'});
          else if (extension === 'htm') response.writeHeader(200, {"Content-Type": 'text/html'});
          else if (extension === 'css') response.writeHeader(200, {"Content-Type": 'text/css'});
          else if (extension === 'js') response.writeHeader(200, {"Content-Type": 'text/javascript'});
          else if (extension === 'png') response.writeHeader(200, {"Content-Type": 'image/png'});
          else if (extension === 'jpg') response.writeHeader(200, {"Content-Type": 'image/jpg'});
          else if (extension === 'jpeg') response.writeHeader(200, {"Content-Type": 'image/jpeg'});
          else if (extension === 'svg') response.writeHeader(200, {"Content-Type": 'image/svg+xml'});
          //WHAT DOES BINARY DO!?
          response.end(file, "binary");
        }
      });
    }
  });
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
