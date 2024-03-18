console.log("check");
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const path=require('path')

mongoose.connect("mongodb+srv://1:1@cluster0.3mvzkz0.mongodb.net/jobapplicationdb",{}).then(()=>{
        console.log("db connected");
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine',"ejs");
app.use("/",require('./server/routes/route'));
app.use(express.static('public'))
app.use(express.static('images'))
app.use("/public", express.static(path.join(__dirname, 'public')));

// app.get("/",(req,res)=>{   
//         res.render('index')
// })
// app.get("/form",(req,res)=>{
//         res.render('form')
// })
// app.get('/thankyoupage',(req,res)=>{
//         res.render('thankyoupage')
// })

app.listen(10000);