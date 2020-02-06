class PageHeader {
    constructor (headerElement) {
        this.headerElement = headerElement;
    };
    updateAverage (newAverage) {
        this.headerElement.querySelector("span").lastChild.textContent = newAverage;
    };
};