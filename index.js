//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
let password= null;
app.use(bodyParser.urlencoded({extended: true}));


function authorize(req,res,next){
  console.log(req.body);
  password = req.body.password;
  console.log(password);
  next();
}

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});
app.use(authorize);
console.log(password);
  app.post("/check",(req,res)=>{
    if(password === "ILoveProgramming")
      res.sendFile(__dirname+"/public/secret.html");
    else {
      res.redirect("/")
      //res.sendFile(__dirname+"/public/index.html");
    }
  });


app.listen(port,()=>{console.log("Listening in port 3000");})