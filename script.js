 let heading = document.querySelectorAll("#faq .heading")
 heading.forEach(element => {
    element.onclick =function (e) {
        this.nextElementSibling.classList.toggle("active")
    }
 });