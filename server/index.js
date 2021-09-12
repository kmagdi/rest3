const express=require('express');
const cors = require('cors');

const app= express();
app.use(express.json())

app.use(cors());

const PORT=8080;

app.get('/kabat',(req,res,next)=>{
    res.status(200).send([
        {tipus: 'télikabát',
        meret:'xxl'
        },
        {tipus: 'dzseki',
        meret:'sm'
        },
        {tipus: 'poló',
        meret:'m'
        }
])
})

app.post('/kabat/:id',(req,res)=>{
    const {id}=req.params
    const {tipus}=req.body
    if(!tipus)
        res.status(418).send({message:'szükséges a tipus megadása !'})
    res.send({tipus:tipus, id:id})
})

app.listen(PORT,()=>console.log(`server runing on port:${PORT}`));