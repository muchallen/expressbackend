const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"school"
})

db.connect(function(err){
    if(err){
        console.log("database connection failed");
    }
    else
    console.log("database connection was successfull");
})


exports.getUsers= function(callback){
    let sql = "Select * from users"
    db.query(sql,function(err,data){
        if(err){
            callback(err)
        }
        else
        {
            callback(null, data);
        }
    })
    }

exports.getUser= function(id,callback){
let sql = "Select * from users where userid=?"
db.query(sql,[id],function(err,data){
    if(err){
        callback(err)
    }
    else
    {
        callback(null, data);
    }
})
}

exports.insertUser= function(data,callback){
    let sql = "Insert into users set ?";

    db.query(sql,[data],function(err,data){
        if(err){
            callback(err)
        }
        else
        {
            callback(null,data)
        }
    })
}
exports.updateUser=function(id,data,callback){
    let sql = "update users set ? where userid=?";
    db.query(sql,[data,id],function(err,data){
        if(err){
            callback(err)
        }
        else{
            callback(null,data)
        }
    })
}

exports.deleteUser=function(id,callback){
    let sql = "delete from users where userid=?"

    db.query(sql,[id], function(err,data){
        if (err)
        callback(err)
        else(
            callback(null,data)
        )
    })
}

