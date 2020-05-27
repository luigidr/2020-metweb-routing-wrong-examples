import Exam from './exams/exam.js';


/**
 * Get the list of my exams
 */
async function getPassedExams() {
    let response = await fetch('/exams');
    const examsJson = await response.json();
    if (response.ok) {
        return examsJson.map((ex) => Exam.from(ex));
    } else {
        throw examsJson;  // an object with the error coming from the server
    }
}

/**
 * Get the list of courses
 */
async function getCourses() {
    let response = await fetch('/courses');
    const courseJson = await response.json();
    if (response.ok) {
        return courseJson;
    } else {
        throw courseJson;  // an object with the error coming from the server
    }
}


export {getPassedExams, getCourses};
