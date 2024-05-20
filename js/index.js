const input_value = document.querySelector('#value');
const msg = document.querySelector('.invalid-feedback');

(function() {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
            }
          form.classList.add('was-validated');
        }, false);
    });
})();

input_value.addEventListener('input', (event) => {
    const value = event.target.value.trim();
    if (value === '') {
        msg.textContent = 'O campo não pode ficar em branco';
        input_value.setCustomValidity('Invalid');
    } else if (!/^\d+$/.test(value)) {
        msg.textContent = 'O campo deve conter apenas números';
        input_value.setCustomValidity('Invalid');
        console.log('contém letras');
    } else {
        msg.textContent = '';
        input_value.setCustomValidity('');
    }
    input_value.reportValidity();
    console.log(value);
});