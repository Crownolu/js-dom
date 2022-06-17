var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{

    }
}

//Retrieve the data
function readFormData(){
        var formData = {};
        formData["firstName"] = document.getElementById("firstName").value;
        formData["lasttName"] = document.getElementById("lastName").value;
        formData["emailAddress"] = document.getElementById("emailAddress").value;
        return formData;
    }

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.lastName; 
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.emailAddress;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button>Edit</button> <button>Delete</button>`
}