$(document).ready(function () {
    $("form#contactForm").on("submit", function (event) {
        event.preventDefault();

        const name = $("input#name").val();
        const email = $("input#email").val();
        const phone = $("input#phone").val();

        const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
        const phonePattern = /^\d{10,15}$/;

        if (!emailPattern.test(email)) {
            showMessage("Некорректный адрес электронной почты.");
            return;
        }

        if (!phonePattern.test(phone)) {
            showMessage("Некорректный номер телефона.");
            return;
        }

        if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
            const newData = $("<li></li>")
                .addClass("list-group-item")
                .text(
                    `Имя: ${name} (Email: ${email}, Телефон: ${phone})`,
                );

            const deleteBtn = $("<button></button>")
                .addClass("btn btn-outline-danger")
                .text("Удалить")
                .on("click", function () {
                    $(this)
                        .parent()
                        .fadeOut(300, function () {
                            $(this).remove();
                        });
                });

            newData.append(" ").append(deleteBtn);
            $("#dataList").append(newData);
        }

        console.log(`Имя: ${name}, Email: ${email}, Телефон: ${phone}`);
        showMessage("Данные формы успешно обработаны и отправлены.");
        $("#contactForm")[0].reset();
    });

    function showMessage(message) {
        $("#modalMessage").text(message);
        $("#myModal").modal("show");
    }

    $("#searchInput").on("keyup", function () {
        const value = $(this).val().toLowerCase();
        $("#dataList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
