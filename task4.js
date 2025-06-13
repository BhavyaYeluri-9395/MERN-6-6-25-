function validateForm() {
    let valid = true;

    // Clear previous errors
    const errorFields = ["FirstName", "LastName", "Email", "Phone", "Address", "City"];
    errorFields.forEach(field => {
        document.getElementById("error" + field).innerText = "";
        document.getElementById(field.toLowerCase()).classList.remove("error");
    });

    // Field values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();

    // Validation
    if (firstName === "") {
        setError("firstName", "Please supply your first name");
        valid = false;
    }

    if (lastName === "") {
        setError("lastName", "Please supply your last name");
        valid = false;
    }

    if (email === "") {
        setError("email", "Please supply your email address");
        valid = false;
    }

    if (phone === "") {
        setError("phone", "Please supply your phone number");
        valid = false;
    }

    if (address === "") {
        setError("address", "Please supply your street address");
        valid = false;
    }

    if (city === "") {
        setError("city", "Please supply your city");
        valid = false;
    }

    return valid;
}

function setError(id, message) {
    document.getElementById(id).classList.add("error");
    document.getElementById("error" + capitalize(id)).innerText = message;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
