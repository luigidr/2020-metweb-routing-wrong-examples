"use strict";

import ExamController from './exams/exam-controller.js';
import CourseController from './courses/course-controller.js';

const appContainer = document.querySelector('#app-container');

// creating our apps, according to the URL
if(window.location.pathname === '/exams.html')
  new ExamController(appContainer);
else
  new CourseController(appContainer);
