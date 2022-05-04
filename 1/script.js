var equation = document.getElementById('Equation');
var answer = document.getElementById('Answer');
answer.focus();
function keyDown(e) {
    if (e.keyCode == 46) document.getElementById('ClearAll').click();
    if (e.keyCode == 13) document.getElementById('Equal').click();
    if (e.keyCode == 8) document.getElementById('Back').click();
    if (e.keyCode == 111 || e.keyCode == 191) document.getElementById('Div').click();
    if (e.keyCode == 106 || e.keyCode == 56) document.getElementById('Mul').click();
    if (e.keyCode == 109 || e.keyCode == 189) document.getElementById('Sub').click();
    if (e.keyCode == 107 || e.keyCode == 187) document.getElementById('Add').click();
    if (e.keyCode == 96 || e.keyCode == 48) document.getElementById('Zero').click();
    if (e.keyCode == 97 || e.keyCode == 49) document.getElementById('One').click();
    if (e.keyCode == 98 || e.keyCode == 50) document.getElementById('Two').click();
    if (e.keyCode == 99 || e.keyCode == 51) document.getElementById('Three').click();
    if (e.keyCode == 100 || e.keyCode == 52) document.getElementById('Four').click();
    if (e.keyCode == 101 || e.keyCode == 53) document.getElementById('Five').click();
    if (e.keyCode == 102 || e.keyCode == 54) document.getElementById('Six').click();
    if (e.keyCode == 103 || e.keyCode == 55) document.getElementById('Seven').click();
    if (e.keyCode == 104 || e.keyCode == 56) document.getElementById('Eight').click();
    if (e.keyCode == 105 || e.keyCode == 57) document.getElementById('Nine').click();
    if (e.keyCode == 190 || e.keyCode == 110) document.getElementById('Dot').click();
    return false;
}
function ClearAll() {
    answer.focus();
    equation.value = '';
    answer.value = '0';
}
function Clear() {
    answer.focus();
    answer.value = '0';
}
function Equal() {
    answer.focus();
    if (equation.value.includes('*') || equation.value.includes('+') || equation.value.includes('/') || equation.value.includes('-')) {
        equation.value += answer.value;
        Calculate();
        equation.value = answer.value;
    }
    else {
        equation.value = answer.value;
    }
    answer.value = equation.value;
    equation.value = "";
}
function NumberClick(button) {
    answer.focus();
    if (answer.value.length == 1 && button.value == '0' && answer.value.substr(0, 1) == "0") {
        return;
    }
    if (answer.value.length == 0 && button.value == '0') {
        answer.value += "0";
        return;
    }
    if (answer.value.includes('.') && button.value == '0') {
        answer.value += "0";
        return;
    }
    if (button.value != ".") {
        if (answer.value.length == 1 && answer.value.substr(0, 1) == "0") {
            answer.value = "";
        }
        answer.value += button.value;
        return;
    }
    if (button.value == "." && !(answer.value.includes('.'))) {
        answer.value += '.';
    }
}
function Back() {
    answer.focus();
    if (answer.value.length > 1) {
        answer.value = answer.value.slice(0, -1);
        return;
    }
    else {
        answer.value = 0;
    }
}
function Operator(button) {
    answer.focus();
    if (equation.value.includes('*') || equation.value.includes('+') || equation.value.includes('/') || equation.value.includes('-')) {
        equation.value += answer.value;
        Calculate();
        equation.value = answer.value;
    }
    else {
        equation.value = answer.value;
    }
    equation.value += button.value;
    answer.value = "0"
}
function Calculate() {
    answer.focus();
    if (equation.value.includes('+')) {
        answer.value = parseFloat(equation.value.split('+')[0]) + parseFloat(equation.value.split('+')[1]);
        return;
    }
    if (equation.value.includes('-')) {
        answer.value = parseFloat(equation.value.split('-')[0]) - parseFloat(equation.value.split('-')[1]);
        return;
    }
    if (equation.value.includes('*')) {
        answer.value = parseFloat(equation.value.split('*')[0]) * parseFloat(equation.value.split('*')[1]);
        return;
    }
    if (equation.value.includes('/')) {
        answer.value = parseFloat(equation.value.split('/')[0]) / parseFloat(equation.value.split('/')[1]);
        return;
    }
}