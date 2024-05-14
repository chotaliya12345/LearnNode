// // const http = require("http");
// // const url = require("url");
// // const server = http.createServer((req, res) => {
// //   // console.log(req.method);
// //   // console.log(req.url);
// //   // console.log(req.headers);
// //   // console.log(url.parse(req.url, true).query.pid);

// //   res.writeHead(200, { "Conent-Type": "appilaction/json" });
// //   res.write("hello");
// //   res.end();
// // });

// // server.listen(3000, () => {
// //   console.log("server started 3000 port.");
// // });

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/url") {
//     // Read the file and serve its content
//     fs.readFile("./src/url.js", (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("File not found");
//       } else {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(data);
//       }
//     });
//   } else {
//     // Handle other requests
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
