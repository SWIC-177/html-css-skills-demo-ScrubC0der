import validator from "validator";

export const ERRORS = [
  {
    id: "name",
    msg: "please enter your name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  {
    id: "email",
    msg: "please enter a valid email.",
    validate(val) {
      return validator.isEmail(val);
    },
  },
  {
    id: "phone",
    msg: "please enter a valid phone number.",
    validate(val) {
      return validator.isMobilePhone(val, "en-US");
    },
  },
  {
    id: "message",
    msg: "please enter a message that's between 10 and 100 characters.",
    validate(val) {
      return val.length >= 10 && val.length <= 100;
    },
  },
];

export const hideError = (el) => {
  el.parentNode.querySelector(".error").classList.remove("is-error");
};

export const renderError = (el, msg) => {
  const errorEl = el.parentNode.querySelector(".error");
  if (errorEl) {
    errorEl.classList.add("is-error");
  } else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    el.parentNode.appendChild(errorElement);
  }
};
