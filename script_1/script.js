'use strict';

let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.call(age, 'Alex', 'Demidenko');
showUser.apply(age, ['Alex', 'Demidenko']);
let showAge = showUser.bind(age);
showAge('Alex', 'Demidenko');