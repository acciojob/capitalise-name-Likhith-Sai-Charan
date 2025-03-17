//your JS code here. If required.

const Fname = document.getElementById("fname");

Fname.addEventListener("blur", () => {
    Fname.value = capitaliseName(Fname.value);
});

function capitaliseName(fname) {
    return fname.toUpperCase();
}
