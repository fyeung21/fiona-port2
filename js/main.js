const projects = document.getElementsByClass('projects-btn');

projects.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById(`${event.target.dataset.target}`).scrollIntoView({ behavior: 'smooth' })
});