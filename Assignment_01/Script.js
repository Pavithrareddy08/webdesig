var seledctedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    // insertNewRecord(formData);
    resetForm();
    if(seledctedRow === null){
        insertNewRecord(formData);
    }
    else{
        
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["idNumber"] = document.getElementById("idNumber").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    return formData;
    
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHtml = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHtml = data.idNumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHtml = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHtml = data.salary;
    // cell5 = newRow.insertCell(4);
    // cell5.innerHtml = data.salary;
    
}

function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('idNumber').value = '';
    document.getElementById('email').value = '';
    document.getElementById('salary').value = '';
}