class GradeTable {
    constructor (tableElement) {
        this.tableElement = tableElement;
    };
    updateGrades (grades) {
        var tableBody = this.tableElement.querySelector("tbody")
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        };
        for (var i = 0; i < grades.length; i++) {
            var tableRow = document.createElement("tr");
            var tableDataStudent = document.createElement("td");
            var tableDataCourse = document.createElement("td");
            var tableDataGrade = document.createElement("td");

            tableDataStudent.textContent = grades[i].name;
            tableDataCourse.textContent = grades[i].course;
            tableDataGrade.textContent = grades[i].grade;

            tableRow.append(tableDataStudent,tableDataCourse,tableDataGrade);
            this.tableElement.querySelector("tbody").append(tableRow);
        };
    };
}