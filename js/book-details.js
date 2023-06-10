"use strict";

(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

const name = localStorage.getItem("barberName");
const services = localStorage.getItem("services").split(",");
const service = localStorage.getItem("service");
const length = localStorage.getItem("length");

const bookingLength = document.querySelector(".booking-length");
bookingLength.innerHTML = length;

const barberName = document.querySelector(".barber-name");
barberName.innerHTML = name;

const bookingService = document.querySelector(".service-name");
bookingService.innerHTML = toTitleCase(service);

function toTitleCase(text) {
    text = text.toLowerCase().split(" ");
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    return text.join(" ");
}

function storeInfo() {
    const firstName = document.querySelector("#inputFirstName");
    const lastName = document.querySelector("#inputLastName");
    const email = document.querySelector("#inputEmail4");

    localStorage.setItem("fName", firstName.value);
    localStorage.setItem("lName", lastName.value);
    localStorage.setItem("email", email.value);
}
