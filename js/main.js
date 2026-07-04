$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
 
  $("#navi a").on("click", function () {
    $("header").removeClass("open");
  });

  const openBtn = document.querySelector("#navi .hamburger");
const closeBtn = document.querySelector(".hamburger-close");
const spMenu = document.querySelector(".sp-menu");

openBtn.addEventListener("click", () => {
  spMenu.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  spMenu.classList.remove("is-open");
});

const menuLinks = document.querySelectorAll(".sp-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    spMenu.classList.remove("is-open");
  });

  spMenu.classList.remove("is-open");

});

// =========================
// Service Modal
// =========================

const serviceTriggers = document.querySelectorAll(".service-trigger");
const serviceModals = document.querySelectorAll(".service-modal");
const serviceCloseBtns = document.querySelectorAll(".service-close");

serviceTriggers.forEach((trigger) => {

  trigger.addEventListener("click", () => {

    const modalId = trigger.dataset.service;

    document
      .getElementById(modalId)
      .classList.add("is-open");

  });

});

serviceCloseBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    btn
      .closest(".service-modal")
      .classList.remove("is-open");

  });

});

// 送信メッセージ


let submitted = false;

const form = document.getElementById("contactForm");
const thanks = document.getElementById("formThanks");
const iframe = document.getElementById("hidden_iframe");

form.addEventListener("submit", function () {
  submitted = true;
});

iframe.onload = function () {
  if (submitted) {
    form.style.display = "none";
    thanks.hidden = false;
    submitted = false;
  }
};






    



});
