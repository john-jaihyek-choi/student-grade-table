var tableElement = document.querySelector("table");
var headerElement = document.querySelector("header");
var gradeTable = new GradeTable(tableElement);
var pageHeader = new PageHeader(headerElement);
var app = new App(gradeTable, pageHeader);
app.start();