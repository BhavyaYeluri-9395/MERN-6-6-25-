document.getElementById('applicationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission
  const inputs = this.querySelectorAll('input, select, textarea');
  let valid = true;
  
  inputs.forEach((input) => {
    const errorDiv = input.nextElementSibling;
    if (input.type === "radio") return;

    if (!input.checkValidity()) {
      errorDiv.style.display = 'block';
      valid = false;
    } else {
      errorDiv.style.display = 'none';
    }
  });

  // Check radio buttons manually
  const radioGroup = this.querySelectorAll('input[name="hosting"]');
  const radioError = radioGroup[radioGroup.length - 1].nextElementSibling;
  const radioChecked = Array.from(radioGroup).some(r => r.checked);
  if (!radioChecked) {
    radioError.style.display = 'block';
    valid = false;
  } else {
    radioError.style.display = 'none';
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});
