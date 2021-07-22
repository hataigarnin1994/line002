function setPhoneNumber() {
  localStorage.setItem("number", document.getElementById("phonenumber").value);
  localStorage.setItem(
    "con_number",
    document.getElementById("phonenumber").value
  );
}

function setHTML() {
  document.getElementById("text_phonenumber").innerHTML = localStorage.getItem(
    "number"
  );
}

function setValue() {
  document.getElementById("phonenumber").value = localStorage.getItem("number");
}

function setPin() {
  localStorage.setItem("code", document.getElementById("code").value);
}
