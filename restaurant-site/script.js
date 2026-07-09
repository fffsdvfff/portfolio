document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".booking-form");

    if (!form) return;

    const phoneInput = document.getElementById("user-phone");
    const dateInput = document.getElementById("booking-date");
    const timeInput = document.getElementById("booking-time");

    if (!phoneInput || !dateInput || !timeInput) return;

    function getTodayDate() {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function getCurrentTime() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");

        return `${hours}:${minutes}`;
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
        const timeValue = timeInput.value;

        if (phoneValue.length < 10) {
            alert("Введіть коректний номер телефону. Мінімум 10 цифр.");
            return;
        }

        if (dateValue < today) {
            alert("Дата бронювання не може бути в минулому.");
            return;
        }

        if (timeValue < "10:00" || timeValue > "22:00") {
            alert("Бронювання можливе тільки з 10:00 до 22:00.");
            return;
        }

        if (dateValue === today && timeValue <= getCurrentTime()) {
            alert("Час бронювання на сьогодні не може бути в минулому.");
            return;
        }

        alert("Дякуємо! Ми зв’яжемося з вами для підтвердження бронювання.");

        form.reset();
    });
});
