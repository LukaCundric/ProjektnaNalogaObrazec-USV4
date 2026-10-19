document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    Swal.fire({
        icon: "error",
        title: "Prijava neuspešna!",
        text: "Napačen e-poštni naslov ali geslo.",
        confirmButtonText: "V redu",
        confirmButtonColor: "#e60023"
    });
});

document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    Swal.fire({
        icon: "error",
        title: "Registracija neuspešna!",
        text: "Registracija v tem projektu ni omogočena.",
        confirmButtonText: "V redu",
        confirmButtonColor: "#e60023"
    });
});

const geslo = document.getElementById("geslo");
const toggleGeslo = document.getElementById("toggleGeslo");
const eyeIcon = document.getElementById("eyeIcon");

if (geslo && toggleGeslo && eyeIcon) {
    toggleGeslo.addEventListener("click", function () {
        if (geslo.type === "password") {
            geslo.type = "text";
            eyeIcon.src = "Slike/visible.png";
            eyeIcon.alt = "";
            toggleGeslo.setAttribute("aria-label", "Skrij geslo");
        } else {
            geslo.type = "password";
            eyeIcon.src = "Slike/notvisible.png";
            eyeIcon.alt = "";
            toggleGeslo.setAttribute("aria-label", "Pokaži geslo");
        }
    });
}
