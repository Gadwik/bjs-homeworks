//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function isPalindrome() {
    const origin = this.toLowerCase().replace(/\s+/g, '');
    const reversed = origin.split('').reverse().join('');
    return reversed == origin;
}

function getAverageMark(marks) {

        let summ = 0;
        for (i = 0; i < marks.length; i++) {
            summ += Number(marks[i]);
        }
        const average = summ / marks.length;
        const roundedAverage = Math.round(average);
    
        return roundedAverage;
    }

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}