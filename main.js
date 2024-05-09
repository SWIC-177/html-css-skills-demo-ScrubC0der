import { ERRORS } from "./src/lib";

console.log(ERRORS);

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];

const submitBtn = document.querySelector("button[type='submit']");

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    console.log(
      ERRORS.find((error) => error.id === e.target.id).validate(e.target.value),
    );
  });
});
