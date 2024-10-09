import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const port = 3000


const todos=[
    {
      "id": 1,
      "title": "Complete Flutter course",
      "description": "Finish the remaining modules of the Flutter development course by the end of the week."
    },
    {
      "id": 2,
      "title": "Update portfolio",
      "description": "Add recent Webflow projects to the portfolio and refine the design."
    },
    {
      "id": 3,
      "title": "Fix PHP form validation",
      "description": "Resolve validation issues in the blood donation management system's form."
    },
    {
      "id": 4,
      "title": "Research mobile app design trends",
      "description": "Explore current trends in mobile app UI/UX for Flutter development inspiration."
    },
    {
      "id": 5,
      "title": "Client feedback meeting",
      "description": "Attend a meeting with the client to discuss updates and changes for their Webflow site."
    },
    {
      "id": 6,
      "title": "Optimize website for SEO",
      "description": "Improve the Webflow website’s SEO by updating meta tags, alt texts, and page speed."
    },
    {
      "id": 7,
      "title": "Learn PHP error handling",
      "description": "Dive into advanced PHP error handling techniques to improve the blood donation app."
    },
    {
      "id": 8,
      "title": "Create app wireframes",
      "description": "Design wireframes for the new blood donation app using Figma or a similar tool."
    },
    {
      "id": 9,
      "title": "Test mobile app",
      "description": "Run tests on the Flutter app for any bugs and performance issues across different devices."
    },
    {
      "id": 10,
      "title": "Watch Soul Regaltos stream",
      "description": "Tune in to Soul Regaltos' stream for insights on engaging mobile gaming audiences."
    }
  ]
  
app.get('/todos',(req,res)=>{
    const todoId=req.query.todoId
    if(todoId){
      res.json(todos[todoId-1])
    }
    res.json({todos})
})
app.get('/todos')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })