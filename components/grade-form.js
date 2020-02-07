class GradeForm {
    constructor (formElement) {
        this.formElement = formElement;
        this.createGrade = null;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener("submit", this.handleSubmit);
    };
    onSubmit (createGrade) {
        this.createGrade = createGrade;
    };
    handleSubmit (event) {
        event.preventDefault();
        var formData = new FormData(event.target);
        var nameInput = formData.get("name");
        var courseInput = formData.get("course");
        var gradeInput = formData.get("grade");
        this.createGrade(nameInput, courseInput, gradeInput);
        event.target.reset();
    };
}