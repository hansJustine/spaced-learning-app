if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const CustomError = require('./utils/CustomError');
const authRoutes = require('./routes/auth');
const learningRoutes = require('./routes/learning');

mongoose.connect(process.env.DATABASE)
    .then(() => console.log('DATABASE CONNECTED'))
    .catch((err) => console.log(`MONGO CONNECTION ERROR: ${err}`));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('SpacedLearning API is working.'))

app.use('/api/auth', authRoutes);
app.use('/api/learnings', learningRoutes);


app.all('*', (req, res, next) => {
    throw new CustomError('Page not found', 404);
})

app.use((err, req, res, next) => {
    console.dir(err);
    console.log('MESSAGE: ', err.message);
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Something went wrong!';
    return res.status(statusCode).json({ message: err.message, statusCode });
});

let PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`)); 