import app from "./app.js";

const PORT = process.env.PORT || 4000;
console.log("Port from env:", process.env.PORT);
app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT} `); 
});