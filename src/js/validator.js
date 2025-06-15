
class Validator {

    static isTaskValid(task) {
        return (task.getTitle
        && task.getTitle.length !== 0
        && task.getDescription
        && task.getDescription.length !== 0);
    }

}