const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');
const inp = document.querySelector('input');
const form = document.querySelector('form');



btn.addEventListener('dblclick', () => {
    console.log("Clicked");
})

h1.addEventListener('mouseenter', () => {
    h1.style.backgroundColor = 'lightgreen';
    h1.style.fontWeight = '300';
})

h1.addEventListener('mouseleave', () => {
    h1.style.backgroundColor = 'lightblue';
    h1.style.fontWeight = '400';
})

inp.addEventListener('keypress', (e) => {
    if (e.which === 13) {
        console.log("You hit the enter")
    }
    
    if (e.key === "p") {
        console.log("You pressed the p key");
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.dir(form.elements[1].value);
})