const app = require('./app');
const db = require('./Config/Db')
const Todomodel = require('./Model/todo.model')
const UserModel = require('./Model/user.model')

const port = 3000;
//defining the port for our server

app.get('/', (req,res)=>{
    res.send('Routing Working')//so now if i change anything in here then it will automatically change 
});



app.listen(port,()=>{
    console.log('Server is listening on port http://localhost:${port} ');
    //making sure we are able to listen by entering node index.js to test. 
});


//now the index.js file will run on nodemon
//in termail you can now use npm run dev whcih will simple run our nodemon index package