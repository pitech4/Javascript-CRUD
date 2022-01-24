const input = document.getElementById('inputField');
const button = document.getElementById('buttonField');
const body = document.getElementById('bodyField');

button.addEventListener('click', function() {
    // console.log("Hello");
    const createTag = document.createElement('h1');
    createTag.innerText = input.value;
    body.appendChild(createTag);
    createTag.addEventListener('dblclick', function() {
        bodyField.removeChild(createTag);
    });
});


