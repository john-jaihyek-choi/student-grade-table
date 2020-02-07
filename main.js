var tableElement = document.querySelector("table");
var headerElement = document.querySelector("header");
var formElement = document.querySelector("form");
var gradeTable = new GradeTable(tableElement);
var pageHeader = new PageHeader(headerElement);
var gradeForm = new GradeForm(formElement);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();