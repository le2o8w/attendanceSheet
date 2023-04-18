const express = require('express');
const app = express();
const fs = require('fs').promises;

const cors = require('cors');

app.use(cors());

// get all students
app.get('/attendanceSheet', async (req, res) => {
    const data = await fs.readFile('database.json', 'utf-8');
    res.json(JSON.parse(data));
});

app.listen(3000, () => {
    console.log('Server says hi');
})

// sign 

// change presenceState
app.put('/attendanceSheet/:student/prensenceState', async (req, res) => {
    const students = await fs.readFile('database.json', 'utf-8');
    console.log(JSON.parse(students.STUDENTS));
})

// add comment
