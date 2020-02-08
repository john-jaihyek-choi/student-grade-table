class GradeTable {
    constructor (tableElement, noGradesElement) {
        this.tableElement = tableElement;
        this.deleteGrade = null;
        this.noGradesElement = noGradesElement;
    };
    updateGrades (grades) {
        var tableBody = this.tableElement.querySelector("tbody")
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        };
        for (var i = 0; i < grades.length; i++) {
            var tableRow = this.renderGradeRow(grades[i], this.deleteGrade);
            this.tableElement.querySelector("tbody").append(tableRow);  
        };

        if (tableBody.childElementCount > 0) {
            document.querySelector(".gradeRecord").classList.add("d-none");
        } else {
            document.querySelector(".gradeRecord").classList.remove("d-none");
        };
    };
    onDeleteClick (deleteGrade) {
        this.deleteGrade = deleteGrade;
    };
    renderGradeRow (data, deleteGrade) {
        var tableRow = document.createElement("tr");
        var nameData = document.createElement("td");
        var courseData = document.createElement("td");
        var gradeData = document.createElement("td");
        var deleteButton = document.createElement("button");

        nameData.textContent = data.name;
        courseData.textContent = data.course;
        gradeData.textContent = data.grade;
        deleteButton.textContent = "DELETE";
        deleteButton.className = "btn btn-danger my-2";
        
        deleteButton.addEventListener("click", function () {
            deleteGrade(data.id);
        })
        tableRow.append(nameData, courseData, gradeData, deleteButton);
        return tableRow;
    };
}