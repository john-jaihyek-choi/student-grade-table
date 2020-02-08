class App {
    constructor (gradeTable, pageHeader, gradeForm) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
        averageNumber = Number(sumNumber / grades.length).toFixed(2);
        if(averageNumber === "NaN") {
            this.pageHeader.updateAverage("N/A");
        } else {
            this.pageHeader.updateAverage(averageNumber);
        };
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
    deleteGrade (id) {
        $.ajax({
            method: "DELETE",
            url: "http://sgt.lfzprototypes.com/api/grades/" + id,
            headers: {"X-Access-Token": "pDNAN20x"},
            success: this.handleDeleteGradeSuccess,
            error: this.handleDeleteGradeError
        })
    };
    handleCreateGradeError (error) {
        console.log(error);
    };
    handleCreateGradeSuccess () {
        this.getGrades();
    };
    handleDeleteGradeError (error) {
        console.log(error);
    };
    handleDeleteGradeSuccess (){
        this.getGrades();
    }
    start () {
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
    };
};