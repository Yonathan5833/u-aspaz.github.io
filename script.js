/* =========================================
   UÑAS PAZ - VERSION 3
   JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       LOADER
    ===================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 700);

    });


    /* =====================================
       HEADER
    ===================================== */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* Cerrar menú al seleccionar enlace */

    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon = menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: .12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================
       GALERÍA FILTER
    ===================================== */

    const filters =
        document.querySelectorAll(".filter");

    const galleryItems =
        document.querySelectorAll(".gallery-item");


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            filters.forEach(item => {

                item.classList.remove("active");

            });

            filter.classList.add("active");

            const category =
                filter.dataset.filter;


            galleryItems.forEach(item => {

                if (
                    category === "all" ||
                    item.classList.contains(category)
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });


    /* =====================================
       TESTIMONIAL SLIDER
    ===================================== */

    const track =
        document.getElementById("testimonialTrack");

    const testimonials =
        document.querySelectorAll(".testimonial");

    const prev =
        document.getElementById("prevTestimonial");

    const next =
        document.getElementById("nextTestimonial");

    let currentSlide = 0;


    function showSlide(index) {

        if (index < 0) {

            currentSlide =
                testimonials.length - 1;

        } else if (index >= testimonials.length) {

            currentSlide = 0;

        } else {

            currentSlide = index;

        }

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;

    }


    next.addEventListener("click", () => {

        showSlide(currentSlide + 1);

    });


    prev.addEventListener("click", () => {

        showSlide(currentSlide - 1);

    });


    /* Cambio automático */

    setInterval(() => {

        showSlide(currentSlide + 1);

    }, 6000);


    /* =====================================
       FORMULARIO DE CITA
    ===================================== */

    const form =
        document.getElementById("appointmentForm");


    form.addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const date =
            document.getElementById("date").value;

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value;


        /*
         * IMPORTANTE:
         *
         * Cambia este número por el WhatsApp
         * real de Uñas Paz.
         *
         * Formato:
         *
         * 52 + código de país + número
         *
         * Ejemplo:
         * 521XXXXXXXXXX
         */

        const whatsapp =
            "52XXXXXXXXXX";


        const text =

`Hola, Uñas Paz 🌸

Quiero solicitar una cita.

👤 Nombre: ${name}

📱 Teléfono: ${phone}

📅 Fecha: ${date}

💅 Servicio: ${service}

💬 Mensaje:
${message || "Sin mensaje adicional."}`;


        const url =
            `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;


        window.open(url, "_blank");

    });


    /* =====================================
       FECHA MÍNIMA
    ===================================== */

    const dateInput =
        document.getElementById("date");

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.min = today;


    /* =====================================
       BACK TO TOP
    ===================================== */

    const backTop =
        document.getElementById("backTop");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* =====================================
       AÑO AUTOMÁTICO
    ===================================== */

    document.getElementById("year")
        .textContent =
        new Date().getFullYear();


    /* =====================================
       PREVENIR FECHAS PASADAS
    ===================================== */

    dateInput.addEventListener("change", () => {

        if (dateInput.value < today) {

            dateInput.value = today;

        }

    });


});