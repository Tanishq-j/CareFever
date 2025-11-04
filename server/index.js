const express = require('express');
const userRoutes = require('./routes/user.route');

const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});