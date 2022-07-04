import './styles/style.scss';

const navigate = document.querySelector('#menu__list').cloneNode(1);
const popup = document.querySelector('#popup');
const open = document.querySelector('#bur');
const phone = document.querySelector('#header__phone').cloneNode(1);
const body = document.body;
const num = document.querySelector('.maxus');
const changes = () => {
    popup.classList.toggle("open");
    open.classList.toggle("active");
    body.classList.toggle("noscroll");
}
open.addEventListener('click', (e) => {
    e.preventDefault();
    changes();
    popup.appendChild(navigate);
    popup.appendChild(phone);
    setInterval(function (){
        navigate.addEventListener('click', () =>{
            changes();
        })
    })
});


const numTop = num.getBoundingClientRect().top;
let start = +num.innerHTML; 
let end = +num.dataset.max;  
window.addEventListener('scroll', function numPartners() {
    if(window.pageYOffset > numTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', numPartners);
        let count = setInterval(function() {
            num.textContent = `${++start}+`;
            if(start == end){
            clearInterval(count);
            }
        }, 20);

    }
});
