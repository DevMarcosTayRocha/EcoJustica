// HEADER HEADER HEADER HEADER HEADER HEADER

window.addEventListener('scroll', function () {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});

// HEADER HEADER HEADER HEADER HEADER HEADER