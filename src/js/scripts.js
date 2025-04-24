"use strict";
window.addEventListener("DOMContentLoaded", () => {
    // Pop-up menu + contacts

    // Pop-up menu
    const popUpMenu = document.querySelector(".pop_up_menu"),
        header = document.querySelector(".main_page_header"),
        window = document.querySelector("html"),
        contactMeMenu = document.querySelector(".contact_me_pop_up");

    let headerHeight = header.clientHeight;

    displayMenu();

    document.addEventListener("scroll", () => {
        headerHeight = header.clientHeight;
        displayMenu();
    });

    function displayMenu() {
        if (window.scrollTop > headerHeight) {
            popUpMenu.classList.add("show_side_menu");
            popUpMenu.classList.remove("hide_side_menu");
            contactMeMenu.classList.add("show_contact_me");
            contactMeMenu.classList.remove("hide_contact_me");
        } else {
            popUpMenu.classList.remove("show_side_menu");
            popUpMenu.classList.add("hide_side_menu");
            contactMeMenu.classList.add("hide_contact_me");
            contactMeMenu.classList.remove("show_contact_me");
        }
    }

    // Contacts fixed menu
    const contactsMenu = document.querySelector(".contacts_fixed_menu"),
        contactsMenuItem = document.querySelectorAll(".contacts_item");

    let fixedContactsMenuHeight = contactsMenu.clientHeight;

    changeContactsMenuColor();

    document.addEventListener("scroll", () => {
        changeContactsMenuColor();
    });

    function changeContactsMenuColor() {
        if (window.scrollTop >= fixedContactsMenuHeight) {
            contactsMenuItem.forEach((item) => {
                item.classList.remove("wheat_font");
                item.classList.add("black_font");
            });
        } else {
            contactsMenuItem.forEach((item) => {
                item.classList.add("wheat_font");
                item.classList.remove("black_font");
            });
        }
    }

    // Modal window

    const sendEmailButton = document.querySelector(".send_request"),
        contactForm = document.querySelector(".contact_form"),
        inputName = document.querySelector(".input_user_name"),
        inputMail = document.querySelector(".input_user_email"),
        inputText = document.querySelector(".input_text"),
        modalWindow = document.querySelector(".modal-body"),
        test = document.getElementById("contact_me"),
        contactMeModal = new bootstrap.Modal(document.getElementById("contact_me"), {
            keyboard: false,
        });

    sendEmailButton.addEventListener(
        "click",
        (e) => {
            e.preventDefault();
            showLoading();
            sendFormData(contactForm);
        },
        { once: true }
    );

    async function sendFormData(form) {
        const data = new FormData(form);
        return await fetch("../mailer/smart.php", {
            method: "POST",
            body: data,
        })
            .then((response) => response.json())
            .then((response) => {
                if (response == true) {
                    showSucess();
                    setTimeout(() => {
                        contactMeModal.hide();
                    }, 3000);
                }
            })
            .catch(() => {
                showFailure();
                setTimeout(() => {
                    contactMeModal.hide();
                }, 5000);
            });
    }

    function showSucess() {
        modalWindow.innerHTML = "";
        modalWindow.innerHTML = `
        <h2>Спасибо! Ваш вопрос успешно отправлен.</h2>
    `;
    }

    function showFailure() {
        modalWindow.innerHTML = "";
        modalWindow.innerHTML = `
        <h2>Что-то пошло не так...</h2>
        <p>Перезагрузите страницу и попробуйте позже.</p>
    `;
    }

    function showLoading() {
        modalWindow.innerHTML = "";
        const loading = document.createElement("img");
        loading.src = "img/Animations/loading2.gif";
        loading.style.cssText = "max-height: 50px; max-width: 50px; margin: 0 auto; display: block";
        // inputText.after(loading);
        modalWindow.innerHTML = `
        <h2>Отправляем ваш вопрос...</h2>
    `;
        modalWindow.append(loading);
    }
});
