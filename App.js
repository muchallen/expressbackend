const express = require('express')

const bodyParser = require('body-parser')
const User = require('./User')

const app = express();


app.use(bodyParser.urlencoded({extended:false}))

app.get('/users', function(req,res){
    try{
        User.getUsers(function(err,data){
            if(err){
                throw err
            }
            else {
                res.send(data)
            }
        })
    }

    catch(error){
        res.status(500).send(error);
    }
    
    
})

app.get('/user/:id', function(req,res){
try{
    User.getUser(req.params.id,function(err, data){
    if(err){
        throw err
    }
    else {
        res.send(data);
    }
})
}
catch(error){
    res.status(500).send(error);
}
    
})

app.post('/adduser', function(req, res){
try {
    User.insertUser(req.body,function(err,data){
        if(err)
        throw err
        else
        res.send(data)
    })
} catch (error) {
    res.status(500).send(error)
}
})

app.put('/updateuser/:id',function(req,res){
try {
    User.updateUser(req.params.id,req.body,function(err,data){
        if(err)
        {
            throw err
        }
        else{
            res.send(data);
        }
    })
} catch (error) {
    res.status(500).send(error)
}
})

app.delete('/user/:id', function(req, res){
    try {
        User.deleteUser(req.params.id,function(err,data){
            if (err){
                throw err
            }
            else
            res.send(data)
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


app.listen(4000);

