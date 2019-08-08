const express = require("express");
const app =express();
const bodyParser =require('body-parser');


app.use(bodyParser.json());
bodyParser.urlencoded({extended:false});

//GET /tasks - this should respond with a list of to-do tasks.
app.get('/tasks',(req,res)=>{
    res.json(tasks);
})

//POST /tasks - this route should accept form data and add it to the to-do list.
app.post('/tasks',(req,res)=>{
let newTask= req.body;
tasks.push(newTask);
res.json(tasks);
})

// DELETE /tasks/:id - this route should allow you to delete a specific task from the array

app.delete('/tasks/:id',(req,res)=>{
let taskDeleteId =parseInt(req.params.id);
tasks.forEach((elem,i)=>{
    if(elem.id === taskDeleteId) {
              tasks.splice(i, 1);
             }
})

  res.json(tasks);
})


const PORT = 7000;
app.listen(PORT,()=>console.log(`listen server ${PORT}`));

const tasks=[
{ id:1,
  title:"Writing",
  isCompleted:true

},
{
    id:2,
    title:"Swiming",
    isCompleted:false
},
{
    id:3,
    title:"Read a book ",
    isCompleted:true
}

]
