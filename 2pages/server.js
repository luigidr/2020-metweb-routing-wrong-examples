// imports
const express = require('express');
const morgan = require('morgan'); // logging middleware
const dao = require('./dao.js');

// init
const app = express();
const port = 3001;

// set up the middleware
app.use(morgan('tiny'));

// every requests body will be considered as in JSON format
app.use(express.json());

// set up the 'public' component as a static website
app.use(express.static('public'));
app.get('/', (req, res) => res.redirect('/exams.html'));

// === REST API (course, exam) === //

// GET /courses
// Get all courses
// Request body: empty
// Response body: array of objects representing all the courses
app.get('/courses', (req, res) => {
  dao.getAllCourses()
  .then((courses) => res.json(courses))
  .catch(() => res.status(500).end());
});

// GET /exams
// Get all the exams
app.get('/exams', (req, res) => {
  dao.getAllExams()
  .then((exams) => res.json(exams))
  .catch(() => res.status(500).end());
});


// activate the server
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
