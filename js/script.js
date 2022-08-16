// Active Link Menu
const links = document.querySelectorAll(".header-menu a");
const activeLink = (link) => {
    if(location.href.includes(link.href)){
        link.classList.add("active");
    };
};

links.forEach(activeLink);


// Active budget items
const params = new URLSearchParams(location.search);
const selectProduct = (params) => {
    params.forEach(param => {
        const product = document.querySelector(`#${param}`);
        if(product){
            product.checked = true;
        } 
    });
}
selectProduct(params);

// Questions
const questions = document.querySelectorAll(".questions button");

const eventQuestions = (questions) => {
    questions.addEventListener('click', event => {
        console.log(event.target)
        const question = event.target;
        const controls = question.getAttribute("aria-controls");
        const answer = document.querySelector(`#${controls}`);
        answer.classList.toggle('active');
        const isTrue = answer.classList.contains("active");
        question.setAttribute('aria-expanded', isTrue.toString());

    });
}

questions.forEach(eventQuestions);


// Image Galery
const imgs = document.querySelectorAll(".bike-images img");
const imgContainer = document.querySelector(".bike-images")

imgs.forEach((img) => {
    img.addEventListener('click', event => {
        const img = event.target;
        const media = matchMedia('(min-width: 1000px)').matches;
        if(media){
            imgContainer.prepend(img);
        }
    })
})

// Animations
if(window.SimpleAnime){
    new SimpleAnime()
} 