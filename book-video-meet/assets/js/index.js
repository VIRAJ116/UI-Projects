const checkboxes = document.querySelectorAll('.time-checkbox');
const dateElem = document.getElementById("inline");

// function => third party library for calender
const datepicker = new Datepicker(dateElem, {
  buttonClass: "btn",
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        checkboxes.forEach(cb => {
            if (cb !== checkbox) {
                cb.checked = false;
                cb.closest('.time-box').classList.remove('selected');
            }
        });
        if (checkbox.checked) {
            checkbox.closest('.time-box').classList.add('selected');
        } else {
            checkbox.closest('.time-box').classList.remove('selected');
        }
    });
});

// const checkboxes = document.querySelectorAll('.time-checkbox');
// const timeBoxes = document.querySelectorAll('.time-box');

// const dateElem = document.getElementById("inline");

// // function => third party library for calendar
// const datepicker = new Datepicker(dateElem, {
//   buttonClass: "btn",
// });

// timeBoxes.forEach(timeBox => {
//     timeBox.addEventListener('click', () => {
//         const checkbox = timeBox.querySelector('.time-checkbox'); // Find the checkbox within the clicked time-box
//         checkboxes.forEach(cb => {
//             if (cb !== checkbox) {
//                 cb.checked = false;
//                 cb.closest('.time-box').classList.remove('selected');
//             }
//         });
//         checkbox.checked = !checkbox.checked; // Toggle the checkbox
//         if (checkbox.checked) {
//             timeBox.classList.add('selected');
//         } else {
//             timeBox.classList.remove('selected');
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const makePaymentBtn = document.getElementById("makePaymentBtn");
    makePaymentBtn.addEventListener("click", function () {
        const selectedTimeElement = document.querySelector(".time-checkbox:checked + label");
        const selectedDateCalendar = datepicker.getDate();

        if (selectedTimeElement) {
            const selectedTime = selectedTimeElement.textContent;

            const confirmationMessage = `Selected Time: ${selectedTime}`;
            window.alert(selectedDateCalendar.toLocaleDateString() + "\n" + confirmationMessage);
        } else {
            window.alert("Please select a time slot before making a payment.");
        }
    });
});
  
