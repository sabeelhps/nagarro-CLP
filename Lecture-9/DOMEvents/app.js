const btn = document.getElementById('btn');

// console.dir(btn);

function scream(event) {
    console.log(event.target);
    console.log("SCREAM!!!!!");
}


btn.onclick = scream;