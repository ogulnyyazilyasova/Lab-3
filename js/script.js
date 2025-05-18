$(document).ready(function () {
    // Обработка формы
    $("#contactForm").on("submit", function (event) {
        event.preventDefault(); // Отключаем переход на другую страницу

        // Получаем значения полей
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();

        // Проверка корректности данных
        // if (!validateEmail(email) || !validatePhone(phone)) {
        //     $("#modalMessage").text(
        //         "Некорректные данные. Пожалуйста, проверьте введенные данные.",
        //     );
        //     $("#messageModal").modal("show");
        //     return;
        // }

        // Выводим данные в консоль
        console.log("Имя:", name);
        console.log("Электронная почта:", email);
        console.log("Номер телефона:", phone);

        // Отображаем сообщение об успешной отправке
        $("#modalMessage").text("Данные успешно отправлены!");
        $("#messageModal").modal("show");

        // Очистка формы
        $(this).trigger("reset");
    });

    // Функция для проверки электронной почты
    function validateEmail(email) {
        const re = /^[^s@]+@[^s@]+.[^s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Функция для проверки номера телефона
    function validatePhone(phone) {
        return phone.length === 10 && /^d+$/.test(phone);
    }

    // Функция поиска
    $("#searchInput").on("keyup", function () {
        const value = $(this).val().toLowerCase();
        $("#dataList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
