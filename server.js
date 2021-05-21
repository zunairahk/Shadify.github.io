const express = require('express');
const cors = require('cors');
const connectDB = require('./backend/connection');
const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/guestlistModel', require('./backend/Api/guestlist'));

app.use('/api/bridalDressModel',require('./backend/Api/bridaldress'));
app.use('/api/catererModel', require('./backend/Api/caterer'));
app.use('/api/makeupModel', require('./backend/Api/makeup'));
app.use('/api/photographerModel', require('./backend/Api/photographer'));
app.use('/api/venueModel', require('./backend/Api/venue'));

app.use('/api/signupModel', require('./backend/Api/signup'));


const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));