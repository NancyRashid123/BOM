
const cursor = document.querySelector(".circle_cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX -20 + "px";
    cursor.style.top = e.clientY -20 + "px";
})
const sections = document.querySelectorAll("section")
const menu = document.querySelectorAll(".menu a")
const toTopBtn = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
    const windowScrollY = window.scrollY;
    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionOffsetTop = section.offsetTop;
        menu.forEach((link) => {
            const linkRef = link.getAttribute("href").slice(1);
            if(windowScrollY>=sectionOffsetTop ) {
                if (sectionId === linkRef) {
                    link.classList.add(`active`)
                    document.title = `BOM | ${sectionId.toUpperCase()}`;
                } else {
                    link.classList.remove(`active`)
                }
            }
            
        })
        
    })
    if (windowScrollY >= 100) {
        toTopBtn.classList.add("active")
    }
    else {
        toTopBtn.classList.remove("active");
    }
})

toTopBtn.addEventListener("click", () => { 
    scrollTo({
        top: 0,
    });
})

window.addEventListener("blur", () => {
    document.title = `BOM | BROWSER`
})
const initailaTitle = document.title
window.addEventListener("focus", () => {
    document.title = `${initailaTitle}`
})

const loading_page = document.querySelector(".loading_page")
const loaderCouter = loading_page.children[1]
let counter =0


function intervelCounter() {
    const interval = setInterval(() => {
        counter++;
        if (counter == 100) {
            clearInterval(interval);
                loading_page.classList.add("hiddenLoader");
                loading_page.children[0].classList.add("hiddenTitle");
                loading_page.children[1].classList.add("hiddenTitle");
        }
        loaderCouter.textContent = `${counter}%`;
    },30)
}
intervelCounter();


let counter_time = 0; 
let ampm = 'AM';

function updateClock() {
 
    setInterval(()=>{
        const clockElement = document.getElementById('clock');
        const time = new Date();
        let hours =  time.getHours();
        const minutes = String( time.getMinutes()).padStart(2, '0');
        const seconds = String( time.getSeconds()).padStart(2, '0');
        counter_time = hours;
        if (counter >= 12) {
          ampm = 'PM';
        } else {
          ampm = 'AM';
        }
        hours = hours % 12;
        hours = hours ? hours : 12; 
        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        clockElement.textContent = timeString;
    }, 1000);
}

updateClock();

