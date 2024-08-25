const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.post('/api/', (req, res)=>{
    try{
        const data = req.body.data;
        if(!Array.isArray(data)){
            return res.status(400).json({
                is_success: false,
                message: "Invalid Input format",
            });
        }
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const lowerAlpha = alphabets.filter((char) => char === char.toLowerCase());
        const hLAplha = lowerAlpha.length > 0 ? [lowerAlpha.sort().pop()] : [];

        res.json({
            is_success: true,
            user_id: "Aman_Sharma_21BCE5769",
            email: "aman.sharma2021b@vitstudent.ac.in",
            regno: "21BCE5769",
            numbers,
            alphabets,
            lowerAlpha,
            highest_low: hLAplha
        });
    }
    catch(error){
        res.status(500).json({
            is_success: false,
            message: 'Internal Server Error'
        });
    }
});

app.get('/api/bhfl', (req, res)=>{
    res.json({
        operation_code: 1
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});