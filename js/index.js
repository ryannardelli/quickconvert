(function() {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
    });
})();

const input_value = document.querySelector('#value');

input_value.addEventListener('input', (event) => {
    const value = event.target.value.trim();
    console.log(value);
})

// document.querySelector('.invalid-feedback').innerHTML = 'hello';