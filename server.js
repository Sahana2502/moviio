const express =require('express');
const {graphqlHTTP}=require('express-graphql');
const schema=require('./schema');
const app =express()
const cors =require('cors');

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

const PORT=process.env.PORT || 5001
app.listen(PORT,()=> console.log(`Server started at ${PORT}`))