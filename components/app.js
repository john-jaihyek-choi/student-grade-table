class App {
    constructor (gradeTable, pageHeader) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader
    };
    handleGetGradesError (error) {
        console.error(error);
    };
    handleGetGradesSuccess (grades) {
        this.gradeTable.updateGrades(grades);
    };
    getGrades () {
        $.ajax({
            url: "http://sgt.lfzprototypes.com/api/grades",
            headers: {"X-Access-Token": "pDNAN20x"},
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        })
    };
    start () {
        this.getGrades();
    };
};