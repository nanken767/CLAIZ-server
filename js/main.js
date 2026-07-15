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


/* ========================================
   妖精TOPボタン
======================================== */

const fairyTopBtn = document.getElementById("fairyTopBtn");

if (fairyTopBtn) {
  let isFlying = false;

  // 300px以上スクロールすると表示
  window.addEventListener("scroll", function () {
    if (isFlying) return;

    if (window.scrollY > 300) {
      fairyTopBtn.classList.add("is-show");
    } else {
      fairyTopBtn.classList.remove("is-show");
    }
  });

  fairyTopBtn.addEventListener("click", function () {
    if (isFlying) return;

    isFlying = true;
    fairyTopBtn.classList.add("is-flying");

    // 妖精が上へ飛び始める
    window.setTimeout(function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 350);

    // アニメーション後に元へ戻す
    window.setTimeout(function () {
      fairyTopBtn.classList.remove("is-flying");
      fairyTopBtn.classList.remove("is-show");
      isFlying = false;
    }, 1400);
  });
}





    



});
