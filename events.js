let Email = document.getElementById('email');
Email.onfocus = function () {
    Email.style.backgroundColor = 'violet';


}
Email.onblur = function () {
    Email.style.backgroundColor = 'white';
}
function validation()
{
    // if the first name is empty event is triggered after clicking the submit button
    
    if(document.getElementById("fname").value.trim()== "")
    {
        alert("Please enter a first name")
        return false;
    }
    if(document.getElementById("lname").value.trim()== "")
    {
        alert("Please enter a last name")
        return false;
    }
    if(document.getElementById("email").value.trim()== "")
    {
        alert("Please enter a email")
        return false;
    }
}