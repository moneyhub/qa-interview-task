const passwordField = $("#password"),
    repeatPasswordField = $("#passwordRepeat"),
    termsCheckbox = $("#terms");

function validateForm() {
    if (!isPasswordLengthValid() || !passwordsAreMatch()) {
        alert("Failed to create account")
        return false
    }
    alert("Account created successfully")
    return true
}

function isPasswordLengthValid() {
    const passwordText = passwordField.val()
    if (passwordText.length > 17 || passwordText.length < 6) {
        setBorderColour(passwordField, "red")
        return false
    }
    return true
}

function passwordsAreMatch() {
    if (passwordField.val() !== passwordField.val()) {
        setBorderColour(passwordField, "red")
        setBorderColour(repeatPasswordField, "red")
        return false
    }
    return true
}

function termsAreChecked() {
    if (!termsCheckbox.is(':checked')) {
        setBorderColour($("#termsAndConditions"), "red")
        return false
    }
    return true
}

function setBorderColour(field, colour) {
    field.css("border-style", "solid")
    field.css("border-color", colour)
}