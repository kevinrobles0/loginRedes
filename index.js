const express       = require('express')
const path          = require('path')
const bodyParser    = require('body-parser')
const app           = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.use(express.static(path.join(__dirname,'view')));

app.listen(80,()=>{
    console.log('server started');
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/authenticate', (req,res)=>{

    const {username,password} = req.body;

    if(username == 'admin' && password == '123'){
        res.status(500).send('Bienvenido');
    }else{
        res.status(500).send('Error, verifique sus credenciales');
    }
});

app.get('/register', (req,res)=>{

    const {username,password,confirm_password} = req.query;

    if(password == confirm_password){
        res.status(500).send('Usuario registrado');
    }else{
        res.status(500).send('Ambas contraseñas son diferentes');
    }

});