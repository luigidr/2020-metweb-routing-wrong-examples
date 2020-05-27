import {getCourses, getPassedExams } from './api.js';
import {createExamRow, createExamTable} from './templates/exam-template.js';
import {createCourseRow, createCourseTable} from './templates/course-template.js';

class App {

    constructor(appContainer, navLinks) {
        // reference to the the exam container (HTML element)
        this.appContainer = appContainer;
        
        this.navLinks = navLinks;
        for (const link of navLinks.querySelectorAll('.nav-link')) {
            if (link.hash === '#exams')
                link.addEventListener('click', this.showExams);
            else
                link.addEventListener('click', this.showCourses);
        }
    }

    /**
     * Create the HTML table for showing the exams
     * @param {*} exams 
     */
    showExams = async () => {
        const exams = await getPassedExams();
        
        this.appContainer.innerHTML = createExamTable();
        const examTable = document.querySelector('#my-exams');

        for(let exam of exams) {
            const examRow = createExamRow(exam);
            examTable.insertAdjacentHTML("beforeend", examRow);
        }
    }

    /**
     * Create the HTML table for showing the courses
     * @param {*} exams 
     */
    showCourses = async () => {
        const courses = await getCourses();
        
        this.appContainer.innerHTML = createCourseTable();
        const courseTable = document.querySelector('#my-courses');

        for(let course of courses) {
            const courseRow = createCourseRow(course);
            courseTable.insertAdjacentHTML("beforeend", courseRow);
        }
    }
}

export default App;
