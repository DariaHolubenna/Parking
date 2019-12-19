let mass = [
    {availe: true},
    {availe: true},
    {availe: true},
    {availe: true},
    {availe: true},
    {availe: true},
    {availe: true},
    {availe: true},
    {availe: true},
    {availe: true},
];
let els = document.querySelectorAll('.root > div');
let free = document.querySelector('.freePlace');
let freePlace = mass.length;
els.forEach(function(el, idx){
    el.addEventListener('click', function(){
        if(mass[idx].availe === false){
            mass[idx].availe = true;
            freePlace += 1;
        } else if(mass[idx].availe === true){
            mass[idx].availe = false;
            freePlace -= 1;
        }
        el.classList.toggle('someClass');
        free.innerHTML = freePlace; 
        console.log(mass[idx].availe);
    });
});
