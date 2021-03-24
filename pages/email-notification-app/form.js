/*console.log('Hello')

var email = "";

var button = document.getElementById('subscribe-btn');

var input = document.getElementById('email');

var list = document.getElementById('email-list');

button.addEventListener('click', function () {
    email = input.value;

    input.value = '';

    var listItem = document.createElement('li');
    listItem.innerText = email;
    list.appendChild(listItem);

    //alert(`Your email subscription was successfull for ${email}`)
});
*/

var button = document.getElementById('subscribe-btn');
var email = document.getElementById('email');

button.addEventListener('click', function () {
    email.classList.toggle('strikethrough');
})