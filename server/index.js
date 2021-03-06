const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://192.168.28.135' }));

// Routes
app.use('/api/employees', require('./routes/employee.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on http://192.168.28.135:3000');
})