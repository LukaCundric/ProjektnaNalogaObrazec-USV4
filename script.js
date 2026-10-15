
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
