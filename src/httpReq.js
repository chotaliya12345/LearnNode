const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const pathname = url.parse(req.url, true).pathname;
  const datapath = "./src/assets/data/data.json";

  if (method === "GET" && pathname === "/institute") {
    fs.readFile(datapath, "utf-8", (err, data) => {
      const id = url.parse(req.url, true).query.id;
      if (id) {
        const alldata = JSON.parse(data);

        const obj = alldata.find((v) => v.id == id);

        if (obj) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(obj));
          res.end();
        } else {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ errorMessage: "Data not found" }));
        }
      } else {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ errorMessage: err.message }));
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
        res.end();
      }
    });
  } else if (method === "POST" && pathname === "/institute") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    console.log(body);

    req.on("end", () => {
      try {
        fs.readFile(datapath, "utf-8", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ errorMessage: err.message }));
          }

          const exisData = JSON.parse(data);
          const newData = JSON.parse(body);

          exisData.push(newData);
          console.log(exisData);

          fs.writeFile(datapath, JSON.stringify(exisData), (err) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ errorMessage: err.message }));
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Data added succssfully" }));
          });
        });
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ errorMessage: error.message }));
      }
    });
  } else if (method === "DELETE" && pathname === "/institute") {
    try {
      fs.readFile(datapath, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ errorMessage: err.message }));
        }

        const exisData = JSON.parse(data);

        const id = url.parse(req.url, true).query.id;

        const index = exisData.findIndex((v) => v.id == id);

        exisData.splice(index, 1);

        console.log(exisData, id, index);

        fs.writeFile(datapath, JSON.stringify(exisData), (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ errorMessage: err.message }));
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Data deletd succssfully" }));
        });
      });
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ errorMessage: error.message }));
    }
  } else if (method === "PUT" && pathname === "/institute") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        fs.readFile(datapath, "utf-8", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ errorMessage: err.message }));
          }

          const exisData = JSON.parse(data);
          const newData = JSON.parse(body);
          const id = url.parse(req.url, true).query.id;

          const index = exisData.findIndex((v) => v.id == id);

          exisData[index] = newData;

          fs.writeFile(datapath, JSON.stringify(exisData), (err) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ errorMessage: err.message }));
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Data edited succssfully" }));
          });
        });
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ errorMessage: error.message }));
      }
    });
  }
});

server.listen(3000, () => {
  console.log("server started 3000 port.");
});
