document.querySelectorAll('.navbar-list-item[href^="#"]')
.forEach(item => {   
    item.addEventListener('click', function(event){
        event.preventDefault();
        
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:'smooth'
        });
    });
});