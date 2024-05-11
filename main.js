import { ERRORS, hideError, renderError } from "./src/lib";

console.log(ERRORS);

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];

const submitBtn = document.querySelector("button[type='submit']");

function checkBlankFields() {
  return formEls.some((el) => el.value === "");
}

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    if (!elError.validate(e.target.value)) {
      renderError(e.target, elError.msg);
    } else {
      hideError(e.target);
    }

    if (checkBlankFields()) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  });
});
