document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".booking-form");

    if (!form) return;

    const phoneInput = form.querySelector('input[type="tel"]');
    const dateInput = form.querySelector('input[type="date"]');

    function getTodayDate() {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    const today = getTodayDate();

    dateInput.min = today;

    phoneInput.addEventListener("input", function () {
        phoneInput.value = phoneInput.value.replace(/\D/g, "");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const phoneValue = phoneInput.value.trim();
        const dateValue = dateInput.value;

        if (phoneValue.length < 10) {
            alert("Введіть коректний номер телефону. Мінімум 10 цифр.");
            return;
        }

        if (dateValue < today) {
            alert("Дата бронювання не може бути в минулому.");
            return;
        }

        alert("Дякуємо! Ми зв’яжемося з вами для підтвердження бронювання.");

        form.reset();
    });
});
