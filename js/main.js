document.addEventListener("DOMContentLoaded", function() {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

function toggleDescricao(event) {
    const descricao = event.target.closest('.bg-gray-700').querySelector('.descricao-completa');
    const botao = event.target;
    descricao.classList.toggle("hidden");
    botao.textContent = descricao.classList.contains("hidden") ? "Saiba mais" : "Ver menos";
}

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', toggleDescricao);
});