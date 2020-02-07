class App {
    constructor (gradeTable, pageHeader, gradeForm) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
    };
    handleGetGradesError (error) {
        console.error(error);
    };
    handleGetGradesSuccess (grades) {
        this.gradeTable.updateGrades(grades);
        var sumNumber = 0;
        var averageNumber;
        for (var i = 0; i < grades.length; i++) {
            sumNumber = sumNumber + Number(grades[i].grade);
        }; 
        averageNumber = Number(sumNumber / grades.length);
        this.pageHeader.updateAverage(averageNumber);
    };
    getGrades () {
        $.ajax({
            url: "http://sgt.lfzprototypes.com/api/grades",
            headers: {"X-Access-Token": "pDNAN20x"},
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        })
    };
    createGrade (name, course, grade) {
        $.ajax({
            method: "POST",
            url: "http://sgt.lfzprototypes.com/api/grades",
            data: {
                "name": name,
                "course": course,
                "grade": grade
            },
            headers: {"X-Access-Token": "pDNAN20x"},
            success: this.handleCreateGradeSuccess,
            error: this.handleCreateGradeError
        })
    };
    handleCreateGradeError (error) {
        console.log(error);
    }
    handleCreateGradeSuccess () {
        this.getGrades();
    }
    start () {
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
    };
};