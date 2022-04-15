let botoncontacto;
botoncontacto = document.body.querySelector("button#contacto");
console.log(botoncontacto);

function alhacerclickenelbotoncontacto(eventorecibido) {
  console.log("clickenelboton");
  console.log(eventorecibido);
  document.querySelector(".contacto").scrollIntoView({
    behavior: "smooth",
  });
}
botoncontacto.addEventListener("click", alhacerclickenelbotoncontacto);
