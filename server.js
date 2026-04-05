const express = require('express');
const path = require('path');
const app = express();

// Middleware: This allows the server to read form data and use the 'public' folder
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// 1. Home Page Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 2. Form Submission Route
app.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(`NEW LEAD: ${name} (${email}) ${phone} says: ${message}`);
    res.send(`<h1>Thanks ${name}!</h1><p>We'll get back to you at ${email} OR call at ${phone} shortly.</p>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});