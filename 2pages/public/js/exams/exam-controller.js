import {getPassedExams} from '../api.js';
import {createExamRow, createExamTable} from './exam-template.js';

class ExamController {

    constructor(appContainer) {
        // reference to the the exam container (HTML element)
        this.appContainer = appContainer;

        this.showExams();
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
}

export default ExamController;
