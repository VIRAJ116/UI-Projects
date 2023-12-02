const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const male = document.getElementById("male");
const female = document.getElementById("female");
const address = document.getElementById("address");
const file = document.getElementById("file");
const submitBtn = document.getElementById("submit");

const nameRegex = /^[A-Z][a-z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberRegex = /^[6-9]\d{9}$/;
const addressRegex = /^(?!.{201})[\s\S]*$/;

name.addEventListener('blur', () => {
    if(name.value === "") {
      document.getElementById('error-name').innerHTML = 'Please dont leave empty field';
    } else if(!nameRegex.test(name.value)) {
      document.getElementById('error-name').innerHTML = ('Please enter a valid firstname');
    } else {
      document.getElementById('error-name').innerHTML = '';
    }
});
  
email.addEventListener('blur', () => {
    if(email.value === "") {
      document.getElementById('error-email').innerHTML = 'Please dont leave empty field';
    } else if(!emailRegex.test(email.value)) {
      document.getElementById('error-email').innerHTML = ('Please enter a valid Email');
    } else {
      document.getElementById('error-email').innerHTML = '';
    }
});
  
number.addEventListener('blur', () => {
    if(number.value === "") {
      document.getElementById('error-contact').innerHTML = 'Please dont leave empty field';
    } else if(!numberRegex.test(number.value)) {
      document.getElementById('error-contact').innerHTML = ('Please enter a valid Number');
    } else {
      document.getElementById('error-contact').innerHTML = '';
    }
});

address.addEventListener('blur', () => {
    if(address.value === "") {
      document.getElementById('error-address').innerHTML = '';
    } else if(!addressRegex.test(address.value)) {
      document.getElementById('error-address').innerHTML = ('Please enter a valid address, max 200char');
    } else {
      document.getElementById('error-address').innerHTML = '';
    }
});

file.addEventListener("change", handleImageUpload);

function handleImageUpload(event) {
    const previewImage = document.getElementById("previewImage");
    const fileSizeLimit = 200 * 1024; // 200KB

    const imageFile = event.target.files[0];
    if (imageFile) {
        if (!imageFile.type.includes("image/jpeg") && !imageFile.type.includes("image/png")) {
            alert("Please select a valid image file (jpg or png).");
            return;
        }

        if (imageFile.size > fileSizeLimit) {
            alert("File size exceeds 200KB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            previewImage.src = event.target.result;
        };
        reader.readAsDataURL(imageFile);
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const imageFile = file.files[0];
  
    if (
      name.value === "" ||
      email.value === "" ||
      number.value === "" ||
      address.value === "" ||
      (male.checked == false && female.checked == false)
    ) {
      window.alert("Fill All The Fields !!");
    }

    else if (!nameRegex.test(name.value)) {
        window.alert("Please enter valid name");
    }
    else if(!emailRegex.test(email.value)) {
        window.alert("Please enter valid email");
    }
    else if(!numberRegex.test(number.value)) {
        window.alert("Please enter valid indian number");
    }
    else if(!addressRegex.test(address.value)) {
        window.alert("Please enter address max with 200 char");
    }
    else if(!imageFile) {
        window.alert("Please select an image file");
    }
    else {
        window.alert("submitted form successfully");
    }
});
