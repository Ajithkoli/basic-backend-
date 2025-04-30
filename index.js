const express=require("express");
const app=express();
const port=3000;
const {v4: uuidv4 }=require('uuid');
const methodOverride=require("method-override");

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
       
        username:"",
        content:""
    },
    {
       
        username:"",
        content:""
    },
    {
        
        username:"",
        content:""
    },

];

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
   let {id}=req.params;
   console.log(id);
   res.send("request working"); 
})

