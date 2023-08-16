function validateForm() {
    var company = document.getElementById("company").value;
    var contactName = document.getElementById("contactName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var chairAmount = parseInt(document.getElementById("chair").value);

    if (company === "" || contactName === "" || phoneNumber === "") {
        alert("Please fill in all required fields.");
        return false;
    }else if (isNaN(chairAmount) || chairAmount < 0 || chairAmount > 10) {
        alert("Please enter a valid chair amount between 0 and 10.");
        return false;
    } else {
        alert("Form submitted successfully!");
    }
}

