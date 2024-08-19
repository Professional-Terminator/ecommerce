const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../db.json')); 
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(
    jsonServer.rewriter({
        
        "/api/*":"/$1",
    })
);
server.listen(3000,()=>{
    console.log("Server is running on 3000");
})

module.exports = server;
