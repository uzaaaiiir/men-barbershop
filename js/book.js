"use strict";

const barbers = {
    barber1: {
        barberName: "John Gonzales",
        services: ["HAIRCUT", "HAIRCUT & BEARD TRIM"],
    },
    barber2: {
        barberName: "Michael Chandler",
        services: ["HAIRCUT", "LINEUP", "BEARD TRIM"],
    },
    barber3: {
        barberName: "Charles Mackachev",
        services: ["HAIRCUT", "LINEUP", "BEARD TRIM"],
    },
    barber4: {
        barberName: "Anthony James",
        services: ["HAIRCUT", "HAIRCUT & BEARD TRIM"],
    },
};

const johnBtn = document.querySelector(".john-book-btn");
const michaelBtn = document.querySelector(".michael-book-btn");
const charlesBtn = document.querySelector(".charles-book-btn");
const anthonyBtn = document.querySelector(".anthony-book-btn");
const barberName = document.querySelector(".barber-name");
let barberSelected;

johnBtn.addEventListener("click", (e) => {
    localStorage.setItem("barberName", barbers.barber1.barberName);
    localStorage.setItem("services", barbers.barber1.services);
});

michaelBtn.addEventListener("click", (e) => {
    localStorage.setItem("barberName", barbers.barber2.barberName);
    localStorage.setItem("services", barbers.barber2.services);
});

charlesBtn.addEventListener("click", (e) => {
    localStorage.setItem("barberName", barbers.barber3.barberName);
    localStorage.setItem("services", barbers.barber3.services);
});

anthonyBtn.addEventListener("click", (e) => {
    localStorage.setItem("barberName", barbers.barber4.barberName);
    localStorage.setItem("services", barbers.barber4.services);
});
