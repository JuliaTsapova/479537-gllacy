var initPopup = function() {
  var link = document.querySelector(".feedback-button");
  if (link) {
    var popup = document.querySelector(".modal-wrapper");
    var close = popup.querySelector(".close-button");
    var feedbackName = popup.querySelector(".feedback-name");
    var feedbackEmail = popup.querySelector(".feedback-email");
    var feedbackComment = popup.querySelector("feedback-comment");
    var form = popup.querySelector(".modal");
    var login = popup.querySelector(".feedback-send");

    var storageName = localStorage.getItem("name");
    var storageEmail = localStorage.getItem("email");

    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      form.classList.add("form-show");

      if (storageName) {
        feedbackName.value = storageName;
        if (storageEmail) {
          feedbackEmail.value = storageEmail;
          feedbackComment.focus();
        } else {
          feedbackEmail.focus();
        }
      } else {
        feedbackName.focus();
      }
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      form.classList.remove("form-show");
      form.classList.remove("form-error");
    });

    login.addEventListener("click", function(evt) {
      if (!feedbackName.value || !feedbackEmail.value || !feedbackComment.value) {
        evt.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("form-error");
      } else {
        localStorage.setItem("name", feedbackName.value);
        localStorage.setItem("email", feedbackEmail.value);
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          form.classList.remove("form-show");
          form.classList.remove("form-error");
        }
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  initPopup();
});
