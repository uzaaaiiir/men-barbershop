"use strict";

const name = localStorage.getItem("barberName");
const services = localStorage.getItem("services").split(",");
const service = localStorage.getItem("service");
const length = localStorage.getItem("length");
const fullName =
    localStorage.getItem("fName") + " " + localStorage.getItem("lName");
const email = localStorage.getItem("email");

const bookingLength = document.querySelector(".booking-length");
bookingLength.innerHTML = length;

const barberName = document.querySelector(".barber-name");
barberName.innerHTML = name;

const bookingService = document.querySelector(".service-name");
bookingService.innerHTML = toTitleCase(service);

const userName = document.querySelector(".user-full-name");
userName.innerHTML = toTitleCase(fullName);

const userEmail = document.querySelector(".user-email");
userEmail.innerHTML = email;

function toTitleCase(text) {
    text = text.toLowerCase().split(" ");
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    return text.join(" ");
}
