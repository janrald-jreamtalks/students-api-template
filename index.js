// ---------------------------- Part 1 ----------------------------
// Import the Express Library
let express = require('express')

// Import Axios
let axios = require('axios') 

// Initialize the Express App
let app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Start the Web Server on Port 5000
app.listen(8000, () => {
    console.log("App is listening on port 8000")
})

// ---------------------------- End of Part 1 ----------------------------

// ---------------------------- Part 2 ----------------------------

// Get Students Endpoint
app.get('/students', async (req, res) => {
    try {

        const students = await axios.get('https://json-server-template-wpd7.onrender.com/students')
        res.status(200).json(students.data)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
    
})

// Add Students Endpoint
app.post('/students', async (req, res) => {
    try {

        const student = await axios.post('https://json-server-template-wpd7.onrender.com/students', req.body)
        console.log(student.data)
        res.status(200).json(student.data)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
    
})
