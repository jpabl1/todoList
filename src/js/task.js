class Task {

    #title
    #description

    constructor(title, description) {
        this.#title = title;
        this.#description = description;
    }

    get getTitle() {
        return this.#title;
    }

    get getDescription() {
        return this.#description;
    }

    set setTitle(title) {
        this.#title = title;
    }

    set setDescription(description) {
        this.#description = description;
    }

    #toPlainObject() {
        return {
            title: this.#title,
            description: this.#description,
        }
    }

    toJson() {
        return JSON.stringify(this.#toPlainObject());
    }

    static toTask(json) {
        const jsonTask = JSON.parse(json);
        return new Task(jsonTask.title, jsonTask.description);
    }

}