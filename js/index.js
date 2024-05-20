const input_value = document.querySelector('#value');
const msg = document.querySelector('.invalid-feedback');
const btn_options = document.querySelector('#btn_troca_options');

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

btn_options.addEventListener('click', () => {
    let select_one = document.getElementById('select_one');
    let select_two = document.getElementById('select_two');
    
    let valorSelectOne = select_one.value;
    let valorSelectTwo = select_two.value;
    
    select_one.value = valorSelectTwo;
    select_two.value = valorSelectOne;
});

async function getResponse_cotacao() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,BRL-USD');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function setResponse_cotacao() {
    try {
        const response =  await getResponse_cotacao();
        console.log(response);
    } catch(e) {
        console.log(e);
    }
}

setResponse_cotacao();

// async function getResponse() {
//     const response = await fetch('https://flagcdn.com/pt/codes.json');
//     const elements = await response.json();
//     console.log(elements)
// };

// getResponse();
