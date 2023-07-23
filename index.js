require('dotenv').config({path : './.env'});
const express= require('express');
const chatRoutes = require('./routes/chat.routes');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
res.send('Chatbot is running')
})
app.get('/status', (req, res) => {
    try {
        res.send({health: "Green ✅", message: "Systum is up and running"})
    } catch (error) {
        res.status(500).send({Health: "Red ❌", message: error.message})
    }
})
app.use('/api', chatRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {    
    console.log(`Server running on port ${port}`);
});
