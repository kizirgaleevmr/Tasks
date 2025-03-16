export default class Tasks {
    constructor() {
        this.tasks = [];
    }
    /** @param {string} csvString */
    importCsv(csvString) {
        // пополняем массив
        return this.tasks.push(csvString.split(",")) ?? "N/A";
    }
    /**
     * @returns {string} - возвращает длину массива если есть или  '0'
     */
    getCount() {
        // выводит длину массива
        return this.tasks.length ?? "0";
    }
    /**
     * @returns {string} - возвращает первый элемент массива
     */
    getFirst() {
        // выводит первый элемент массива
        return this.tasks[0] ?? "N/A";
    }
    /**
     *
     * @returns {string} - возвращает последний элемент массива
     */
    getLast() {
        // выводит последний элемент массива
        return this.tasks.at(-1) ?? "N/A";
    }
    /**
     *
     * @returns {string} - возвращает весь массив в виде строки в нижнем регистре
     */
    getUnformattedTasks() {
        // выводит весь массив в видестроки в нижнем регистре
        return this.tasks.join("; ").toLowerCase();
    }
}
