const input_value = document.querySelector('#value');
const msg = document.querySelector('.invalid-feedback');
const btn_options = document.querySelector('#btn_troca_options');
const name_conversion_country = document.querySelector('#name_country_conversion');
const btn_conversion = document.querySelector('#btn_conversion');

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
                addValue();
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

    let img_value_conversion = document.querySelector('#img_value_conversion');
    let img_converter_value = document.querySelector('#img_converter_value');

    // let value_one = document.querySelector('#value_moeda_to_conversion');
    // let value_result = document.querySelector('#value_result_conversion');
    
    let tempSrc = img_value_conversion.src;
    img_value_conversion.src = img_converter_value.src;
    img_converter_value.src = tempSrc;
});

async function getResponse_cotacao() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_brl() {
    try {
        const response =  await getResponse_cotacao();
        return response.USDBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

// async function getResponseImg() {
//     try {
//         const response = await fetch('https://flagcdn.com/pt/codes.json');
//         return response.json();
//     } catch(e) {
//         console.log(e);
//     }
// };

// async function setResponseImg() {
//     try {
//         const response = await getResponseImg();
//         console.log(response);
//     } catch(e) {
//         console.log(e);
//     }
// }

function setInformations() {
    let select_one = document.getElementById('select_one');
    let select_two = document.getElementById('select_two');
    select_one.addEventListener('change', () => {
        if(select_one.value === 'brl') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/br.png';
        } else if(select_one.value === 'usd') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/us.png';
        } else if(select_one.value === 'cad') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/ca.png';
        } else if(select_one.value === 'eur') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/eu.png';
        } else if (select_one.value === 'gbp') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/gb.png';
        } else if (select_one.value === 'ars') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/ar.png';
        } else if (select_one.value === 'btc') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/sv.png';
        } else if (select_one.value === 'jpy') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/jp.png';
        } else if (select_one.value === 'try') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/tr.png';
        }  else if (select_one.value === 'aud') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/au.png';
        } else if (select_one.value === 'chf') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/li.png';
        }  else if (select_one.value === 'cny') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/cn.png';
        }
    });

    select_two.addEventListener('change', () => {
        if(select_two.value === 'brl') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/br.png';
        } else if(select_two.value === 'usd') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/us.png';
        } else if(select_two.value === 'cad') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/ca.png';
        } else if(select_two.value === 'eur') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/eu.png';
        } else if (select_two.value === 'gbp') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/gb.png';
        } else if (select_two.value === 'ars') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/ar.png';
        } else if (select_two.value === 'btc') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/sv.png';
        } else if (select_two.value === 'jpy') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/jp.png';
        } else if (select_two.value === 'try') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/tr.png';
        }  else if (select_two.value === 'aud') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/au.png';
        } else if (select_two.value === 'chf') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/li.png';
        }  else if (select_two.value === 'cny') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/cn.png';
        }
    });
}

setInformations();

async function addValue() {
    const value_cotacao = await get_usd_brl();
    let select_one = document.getElementById('select_one');
    let select_two = document.getElementById('select_two');
    try {
        const value_moeda = document.querySelector('#value_moeda_to_conversion');
        const value_result_conversion = document.querySelector('#value_result_conversion');
        const value = input_value.value.trim();

        console.log(value / value_cotacao);

        if(select_one.value === 'usd' && select_two.value === 'brl') {
            value_moeda.innerHTML = value;
            value_result_conversion.innerHTML = (value_cotacao * value).toFixed(2);
        } else {
            value_moeda.innerHTML = value;
            value_result_conversion.innerHTML = (value / value_cotacao).toFixed(2);
        }   
    } catch(e) {
        console.log(e);
    }
}

// async function init() {
//     try {
//         await Promise.all([addValue()]);
//     } catch (error) {
//         console.error('Erro ao iniciar a aplicação:', error);
//     }
// }

// init();
