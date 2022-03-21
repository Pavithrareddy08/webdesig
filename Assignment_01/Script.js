function onFormSubmit(){
    var formData = readFormData();
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["idNumber"] = document.getElementById("idNumber").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    return formData;
    
}

function 