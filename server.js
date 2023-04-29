var express = require('express');
var app = express();
const mysql = require("mysql");
var cors = require('cors')
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
    host: "localhost",
    user: "sp5_admin",
    password: "SP5_yellow2023!",
    database: "sp5_app",
    port:'3306'
});

app.all('/get', function (req, res){
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    db.query("SELECT * FROM users where username = ? and password = ?;", [username, password]
        ,(err, result)=> 
        {
            if(err){
                console.log(err)
            }
            else{
                res.send(result);  
        }
        }
     ); 

})

app.all('/grab_notes', function (req, res){
    const user_id = req.body.user_id;
    console.log(user_id);
    db.query("SELECT * FROM note_list where Creator_ID = ?;", [user_id]
        ,(err, result)=> 
        {
            if(err){
                console.log(err)
            }
            else{
                res.send(result);  
        }
        }
     ); 

});

app.all('/grab_shared_notes', function (req, res){
    const user_id = req.body.user_id;
    console.log(user_id);
    db.query("SELECT * FROM note_list join shared_list where note_list.Creator_ID = shared_list.Owner_ID and shared_list.shared_user = ? and note_list.Note_ID = shared_list.Note_ID;", [user_id]
        ,(err, result)=> 
        {
            if(err){
                console.log(err)
            }
            else{
                res.send(result);  
        }
        }
     ); 

});

app.all('/create_account', function (req, res){
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const email = req.body.email;
    db.query("INSERT INTO users (first_name, last_name, email_add, username, password) values (?,?,?,?,?);", [firstname, lastname, email, username, password]
        ,(err, result)=> 
        {
            if(err){
                console.log(err)
            }
            else{
                console.log('user created')
                res.send(true);  
        }
        }
     );

});

app.all('/create_note', function (req, res){
    const note = req.body.note;
    const userId = req.body.userId;
    const date = req.body.date;
    const title = req.body.title
	console.log(userId);
    db.query("insert into note_list (Creator_ID, note, Shared_status, create_date, Note_Title) values (?, ?, false, ?, ?);", [userId, note, date, title]
        ,(err, result)=> 
        {
            if(err){
                console.log(err)
            }
            else{
                console.log('note created')
                res.send(true);  
        }
        }
     );

});

app.all('/share_note', function(req,res){
    const user_id = req.body.user_id;
    const note_id = req.body.note_id;
    console.log(user_id);
    console.log(note_id);
    db.query("update note_list set Shared_status = true where Creator_ID = ? AND NOTE_ID = ?;", [user_id, note_id]), (err,result)=>
    {
        if(err){
            console.log(err)
        }
        else{
            console.log('note shared')
            res.send(true)
        }
    }
})

app.all('/delete_note', function(req,res){
    const user_id = req.body.user_id;
    const note_id = req.body.note_id;
    db.query("delete from note_list where Creator_id = ? AND note_id = ?;" , [user_id, note_id], (err,result)=>
    {
        if(err){
            console.log(err)
        }
        else{
            console.log('note deleted')
            res.send(true)
        }
    })
});


app.all('/email_search', function(req,res){
    const email = req.body.email;
    console.log(email);
    db.query("select User_ID from users where email_add= ? ;" , [email], (err,result)=>
    {
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
});

app.all('/create_share', function (req, res){
    const note_id = req.body.note_id;
    const share_id = req.body.share_id;
    const edit_right = req.body.edit_right;
    const owner_id = req.body.owner_id;
    console.log(note_id);
    console.log(share_id);
    console.log(edit_right);
    console.log(owner_id);
    db.query("insert into shared_list (Note_ID, shared_user, edit_right, Owner_ID) values (?,?,?,?);", [note_id, share_id, edit_right, owner_id]
        ,(err, result)=> 
        {
            if(err){
                console.log(err)
            }
            else{
                console.log('note shared')
                res.send(true);  
        }
        }
     );

});

app.all('/editnote', function(req, res){
    const note_id = req.body.note_id;
    const note = req.body.note;
    console.log(note)
    db.query("update note_list set note = ? where Note_ID= ?;", [note, note_id], (err,result)=>
    {
        if(err){
            console.log(err)
        }
        else{
            console.log('note edited')
            res.send(true)
        }
    }
    );
});


/*app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })*/
  
app.listen(80, function () {
    console.log(' listening on port 443')
  })

/*server.listen(port, function (){
    console.log(`WebSocket server is running on port ${port}`);
  });*/

/*app.listen(3001, () =>{
    console.log("Hello World")}
    )*/