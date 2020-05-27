import {getCourses} from '../api.js';
import {createCourseRow, createCourseTable} from './course-template.js';

class CourseController {

    constructor(appContainer) {
        // reference to the the exam container (HTML element)
        this.appContainer = appContainer;

        this.showCourses();
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

export default CourseController;
