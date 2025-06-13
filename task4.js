// Validation for left form
document.getElementById('leftForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const errors = [];
    
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'description'];
    
    requiredFields.forEach(field => {
        const value = formData.get(field);
        if (!value || value.trim() === '') {
            errors.push(field);
        }
    });
    
    const hosting = formData.get('hosting');
    if (!hosting) {
        errors.push('hosting');
    }
    
    if (errors.length > 0) {
        alert('It is mandatory to fill all fields. Please complete the form.');
    } else {
        alert('Form submitted successfully!');
    }
});

// Validation for right form
document.getElementById('rightForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const errors = [];
    
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city'];
    
    requiredFields.forEach(field => {
        const value = formData.get(field);
        if (!value || value.trim() === '') {
            errors.push(field);
        }
    });
    
    if (errors.length > 0) {
        alert('It is mandatory to fill all fields. Please complete the form.');
    } else {
        alert('Form submitted successfully!');
    }
});
