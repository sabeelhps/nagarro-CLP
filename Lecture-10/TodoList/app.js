const inp = document.querySelector('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');


btn.onclick = function () {
    
    const inputText = inp.value;

    const li = document.createElement('li');

    li.onclick = function (e) {
        e.target.remove();
    }

    li.innerText = inputText;

    list.append(li);

    inp.value = "";
}