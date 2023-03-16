var express = require('express');

var app = express();
var expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs.engine({
    exitname: 'hbs',
    defaultLayout:'',
    layoutDir:''
}));

app.set('view engine','.hbs');

// app.get('/' , function(req,res){
//     res.send('Hello World!')
// })
app.get('/handlerbars' , function(req,res){
    res.render('index');
})

app.listen(process.env.PORT || '3000'); 