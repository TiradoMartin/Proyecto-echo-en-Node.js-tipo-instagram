express=require("express");

app=express();
app.get("/",function name(req,res) {
    
    res.send("<h1>hola mundocruel </h1>")
});

app.listen(3000);
