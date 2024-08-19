// Получаем все кнопки, которые открывают модальные окна
var buttons = document.querySelectorAll(".openModalBtn");

// Добавляем обработчик события для каждой кнопки
buttons.forEach(function(button) {
    button.onclick = function() {
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.style.display = "block";

        // Получаем элемент <span>, который закрывает модальное окно
        var span = modal.querySelector(".close");

        // Когда пользователь нажимает на <span> (x), закрыть модальное окно
        span.onclick = function() {
            modal.classList.add('fade-out');
            setTimeout(function() {
                modal.style.display = "none";
                modal.classList.remove('fade-out');
            }, 300);
        };

        // Когда пользователь нажимает в любом месте вне модального окна, закрыть его
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.add('fade-out');
                setTimeout(function() {
                    modal.style.display = "none";
                    modal.classList.remove('fade-out');
                }, 300);
            }
        };
    };
});
