const express = require('express');

const app = express();

const PORT = 3010;
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        message : "Home Page :-)"
    })
})

// app.all('*',(req,res)=>{
//     res.status(404).json({
//         message : "Page Not Found "
//     })
// })
app.get('/',(req,res)=>{
    res.status(500).json({
        message : "Page Not Found "
    })
})

app.listen(PORT,()=>{
    console.log(`Server is up and running http://localhost:${PORT}`);
});
