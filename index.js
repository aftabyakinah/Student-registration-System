const textArea = document.querySelector("#studentname");
const textArea2 = document.querySelector("#studentid");
const textArea3 = document.querySelector("#studentclass");
const textArea4 = document.querySelector("#studentcontact");

const Button = document.querySelector(".button1");
const studentlist = document.querySelector("#studentlist");

studentlist.style.maxHeight = '400px'; 
studentlist.style.overflowY = 'auto'; 



Button.addEventListener("click", addstudentdata);

function addstudentdata() {
    if (textArea.value === '' || textArea2.value === '' || textArea3.value === '' || textArea4.value === '') {
        return;
    }

    const studentdatadiv = document.createElement("div");
    const item = document.createElement("p");
    item.innerHTML = `Name: ${textArea.value}, ID: ${textArea2.value}, Class: ${textArea3.value}, Contact: ${textArea4.value}`;
    studentdatadiv.appendChild(item);

    const editbutton = document.createElement("button");
    editbutton.innerHTML = "Edit";
    editbutton.classList.add("button2");
    editbutton.addEventListener("click", function() {
        editstudentdata(studentdatadiv, item, editbutton, deletebutton);
    });

    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = "Delete";
    deletebutton.classList.add("button2");
    deletebutton.addEventListener("click", function() {
        studentlist.removeChild(studentdatadiv);
    });

    studentdatadiv.appendChild(editbutton);
    studentdatadiv.appendChild(deletebutton);

    studentlist.appendChild(studentdatadiv);

    textArea.value = '';
    textArea2.value = '';
    textArea3.value = '';
    textArea4.value = '';
}

function editstudentdata(div, item, editbutton, deletebutton) {
    const currentDetails = item.innerHTML.split(',').map(function(detail) {
    return detail.split(':')[1].trim();
});
    const [currentName, currentId, currentClass, currentContact] = currentDetails;

    const editForm = document.createElement("form");
    editForm.classList.add("inputfields");
    

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = currentName;

    const idInput = document.createElement("input");
    idInput.type = "text";
    idInput.value = currentId;

    const classInput = document.createElement("input");
    classInput.type = "text";
    classInput.value = currentClass;

    const contactInput = document.createElement("input");
    contactInput.type = "text";
    contactInput.value = currentContact;

    
    const saveButton = document.createElement("button");
    saveButton.classList.add("button2");
    saveButton.innerHTML = "Save";
    saveButton.type = "button";
    saveButton.addEventListener("click", function() {
        item.innerHTML = `Name: ${nameInput.value}, ID: ${idInput.value}, Class: ${classInput.value}, Contact: ${contactInput.value}`;
        div.removeChild(editForm);
        div.appendChild(editbutton);
        div.appendChild(deletebutton);
    });

    editForm.appendChild(nameInput);
    editForm.appendChild(idInput);
    editForm.appendChild(classInput);
    editForm.appendChild(contactInput);
    const lineBreak = document.createElement("br");
    editForm.appendChild(lineBreak);

   editForm.appendChild(saveButton);
    

    div.removeChild(editbutton);
    div.removeChild(deletebutton);
    div.appendChild(editForm);


}
studentlist.addEventListener('scroll');
