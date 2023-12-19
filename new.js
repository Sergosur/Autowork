console.log('Скрипт работает');
//console.log(weight.value);  /* Комментарий */
//console.log(document.forms.my_body.mass.value);
function calc_age(year_of_birth) {
    let dt = new Date();
    var result = dt.getFullYear() - year_of_birth;
    age.innerHTML = result;
	return result;
}
var year = 2013
var words = {  // пары 'ключ': 'значение'
	'dictionary': 'словарь',
	'task': 'задание'
};
console.log(words['task']);
console.log(words.task);
