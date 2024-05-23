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
    } else {
        msg.textContent = '';
        input_value.setCustomValidity('');
    }
    input_value.reportValidity();
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

    let name_moeda_to_conversion = document.querySelector('#name_country_conversion');
    let name_moeda_result = document.querySelector('#name-moeda-result');

    let value_to_conversion = document.querySelector('#value_moeda_to_conversion');
    let value_result_conversion = document.querySelector('#value_result_conversion');

    let tempNameMoeda = name_moeda_to_conversion.innerText;
    console.log(tempNameMoeda);
    name_moeda_to_conversion.innerText = name_moeda_result.innerText;
    name_moeda_result.innerText = tempNameMoeda;
    
    let tempSrc = img_value_conversion.src;
    img_value_conversion.src = img_converter_value.src;
    img_converter_value.src = tempSrc;
});

async function getResponse_usd_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_brl_bid() {
    try {
        const response =  await getResponse_usd_brl();
        return response.USDBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_brl_ask() {
    try {
        const response =  await getResponse_usd_brl();
        return response.USDBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_cad_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/CAD-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};


async function get_cad_brl_bid() {
    try {
        const response =  await getResponse_cad_brl();
        return response.CADBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_cad_brl_ask() {
    try {
        const response =  await getResponse_cad_brl();
        return response.CADBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_eur_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_brl_bid() {
    try {
        const response =  await getResponse_eur_brl();
        return response.EURBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_brl_ask() {
    try {
        const response =  await getResponse_eur_brl();
        return response.EURBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_gbp_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/GBP-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_gbp_brl_bid() {
    try {
        const response =  await getResponse_gbp_brl();
        return response.GBPBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_gbp_brl_ask() {
    try {
        const response =  await getResponse_gbp_brl();
        return response.GBPBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_ars_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/ARS-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_ars_brl_bid() {
    try {
        const response =  await getResponse_ars_brl();
        return response.ARSBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_ars_brl_ask() {
    try {
        const response =  await getResponse_ars_brl();
        return response.ARSBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_btc_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/BTC-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_btc_brl_bid() {
    try {
        const response =  await getResponse_btc_brl();
        return response.BTCBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_btc_brl_ask() {
    try {
        const response =  await getResponse_btc_brl();
        return response.BTCBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_jpy_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/JPY-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_jpy_brl_bid() {
    try {
        const response =  await getResponse_jpy_brl();
        return response.JPYBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_jpy_brl_ask() {
    try {
        const response =  await getResponse_jpy_brl();
        return response.JPYBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_brl_try() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/TRY-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_brl_try_bid() {
    try {
        const response =  await getResponse_brl_try();
        return response.TRYBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_brl_try_ask() {
    try {
        const response =  await getResponse_brl_try();
        return response.TRYBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_aud_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/AUD-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_aud_brl_bid() {
    try {
        const response =  await getResponse_aud_brl();
        return response.AUDBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_aud_brl_ask() {
    try {
        const response =  await getResponse_aud_brl();
        return response.AUDBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_chf_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/CHF-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_chf_brl_bid() {
    try {
        const response =  await getResponse_chf_brl();
        return response.CHFBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_chf_brl_ask() {
    try {
        const response =  await getResponse_chf_brl();
        return response.CHFBRL.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_cny_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/CNY-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_cny_brl_bid() {
    try {
        const response =  await getResponse_cny_brl();
        return response.CNYBRL.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_cny_brl_ask() {
    try {
        const response =  await getResponse_cny_brl();
        return response.CNYBRL.ask;
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
    let options = [];

    for (let i = 0; i < select_one.options.length; i++) {
        let tempText = select_one.options[i].textContent;
        options.push(tempText);
    }

    select_one.addEventListener('change', () => {
        document.querySelector('#img_value_conversion').classList.remove('d-none');

        if(select_one.value === select_two.value) {
            btn_conversion.disabled = true;
        } else {
            btn_conversion.disabled = false;
        }
        
        if(select_one.value === 'brl') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/br.png';
            document.querySelector('#name_country_conversion').textContent = options[1];
        } else if(select_one.value === 'usd') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/us.png';
            document.querySelector('#name_country_conversion').textContent = options[2];
        } else if(select_one.value === 'cad') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/ca.png';
            document.querySelector('#name_country_conversion').textContent = options[3];
        } else if(select_one.value === 'eur') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/eu.png';
            document.querySelector('#name_country_conversion').textContent = options[4];
        } else if (select_one.value === 'gbp') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/gb.png';
            document.querySelector('#name_country_conversion').textContent = options[5];
        } else if (select_one.value === 'ars') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/ar.png';
            document.querySelector('#name_country_conversion').textContent = options[6];
        } else if (select_one.value === 'btc') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/sv.png';
            document.querySelector('#name_country_conversion').textContent = options[7];
        } else if (select_one.value === 'jpy') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/jp.png';
            document.querySelector('#name_country_conversion').textContent = options[8];
        } else if (select_one.value === 'try') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/tr.png';
            document.querySelector('#name_country_conversion').textContent = options[9];
        }  else if (select_one.value === 'aud') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/au.png';
            document.querySelector('#name_country_conversion').textContent = options[10];
        } else if (select_one.value === 'chf') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/ch.png';
            document.querySelector('#name_country_conversion').textContent = options[11];
        }  else if (select_one.value === 'cny') {
            document.querySelector('#img_value_conversion').src = 'https://flagcdn.com/40x30/cn.png';
            document.querySelector('#name_country_conversion').textContent = options[12];
        }
    });

    select_two.addEventListener('change', () => {
        document.querySelector('#img_converter_value').classList.remove('d-none');
        
        if(select_one.value === select_two.value) {
            btn_conversion.disabled = true;
        } else {
            btn_conversion.disabled = false;
        }
        if(select_two.value === 'brl') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/br.png';
            document.querySelector('#name-moeda-result').textContent = options[1];
        } else if(select_two.value === 'usd') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/us.png';
            document.querySelector('#name-moeda-result').textContent = options[2];
        } else if(select_two.value === 'cad') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/ca.png';
            document.querySelector('#name-moeda-result').textContent = options[3];
        } else if(select_two.value === 'eur') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/eu.png';
            document.querySelector('#name-moeda-result').textContent = options[4];
        } else if (select_two.value === 'gbp') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/gb.png';
            document.querySelector('#name-moeda-result').textContent = options[5];
        } else if (select_two.value === 'ars') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/ar.png';
            document.querySelector('#name-moeda-result').textContent = options[6];
        } else if (select_two.value === 'btc') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/sv.png';
            document.querySelector('#name-moeda-result').textContent = options[7];
        } else if (select_two.value === 'jpy') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/jp.png';
            document.querySelector('#name-moeda-result').textContent = options[8];
        } else if (select_two.value === 'try') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/tr.png';
            document.querySelector('#name-moeda-result').textContent = options[9];
        }  else if (select_two.value === 'aud') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/au.png';
            document.querySelector('#name-moeda-result').textContent = options[10];
        } else if (select_two.value === 'chf') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/ch.png';
            document.querySelector('#name-moeda-result').textContent = options[11];
        }  else if (select_two.value === 'cny') {
            document.querySelector('#img_converter_value').src = 'https://flagcdn.com/40x30/cn.png';
            document.querySelector('#name-moeda-result').textContent = options[12];
        }
    });
}

setInformations();

async function addValue() {
    const value_cotacao_usd_brl_bid = await get_usd_brl_bid();
    const value_contacao_usd_brl_ask = await get_usd_brl_ask();

    const value_cotacao_cad_brl_bid = await get_cad_brl_bid();
    const value_cotacao_cad_brl_ask = await get_cad_brl_ask();

    const value_cotacao_eur_brl_bid = await get_eur_brl_bid();
    const value_cotacao_eur_brl_ask = await get_eur_brl_ask();

    const value_cotacao_gbp_brl_bid = await get_gbp_brl_bid();
    const value_cotacao_gbp_brl_ask = await get_gbp_brl_ask();

    const value_cotacao_ars_brl_bid = await get_ars_brl_bid();
    const value_cotacao_ars_brl_ask = await get_ars_brl_ask();

    const value_cotacao_btc_brl_bid = await get_btc_brl_bid();
    const value_cotacao_btc_brl_ask = await get_btc_brl_ask();

    const value_cotacao_jpy_brl_bid = await get_jpy_brl_bid();
    const value_cotacao_jpy_brl_ask = await get_jpy_brl_ask();

    const value_cotacao_brl_try_bid = await get_brl_try_bid();
    const value_cotacao_brl_try_ask = await get_brl_try_ask();

    const value_cotacao_aud_brl_bid = await get_aud_brl_bid();
    const value_cotacao_aud_brl_ask = await get_aud_brl_ask();

    const value_cotacao_chf_brl_bid = await get_chf_brl_bid();
    const value_cotacao_chf_brl_ask = await get_chf_brl_ask();

    const value_cotacao_cny_brl_bid = await get_cny_brl_bid();
    const value_cotacao_cny_brl_ask = await get_cny_brl_ask();



    let select_one = document.getElementById('select_one');
    let select_two = document.getElementById('select_two');

    try {
        const value_result_conversion_bid = document.querySelector('#value_result_conversion_bid');
        const value_result_conversion_ask = document.querySelector('#value_result_conversion_ask');
        const value = input_value.value.trim();

        document.querySelectorAll('#value_moeda_to_conversion').forEach(value_moeda => {
            value_moeda.innerHTML = value;
        });


        // de brl para
        if(select_one.value === 'brl' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value / value_cotacao_usd_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_contacao_usd_brl_ask).toFixed(2);
        } else if (select_one.value === 'usd' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_usd_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_contacao_usd_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'cad') {
            value_result_conversion_bid.innerHTML = (value / value_cotacao_cad_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_cad_brl_ask).toFixed(2);
        } else if (select_one.value === 'cad' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_cad_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_cad_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value / value_cotacao_eur_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_brl_ask).toFixed(2);
        } else if (select_one.value === 'eur' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_eur_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_eur_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'gbp') {
            value_result_conversion_bid.innerHTML = (value / value_cotacao_gbp_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_gbp_brl_ask).toFixed(2);
        } else if (select_one.value === 'gbp' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_gbp_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_gbp_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'ars') {
            value_result_conversion_bid.innerHTML = (value / value_cotacao_ars_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_ars_brl_ask).toFixed(2);
        } else if (select_one.value === 'ars' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_ars_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_ars_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'btc') {
            value_result_conversion_bid.innerHTML = (value / value_cotacao_btc_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_btc_brl_ask).toFixed(2);
        } else if (select_one.value === 'btc' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_btc_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_btc_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'jpy') {
            value_result_conversion_bid.innerHTML = (value / value_cotacao_jpy_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_jpy_brl_ask).toFixed(2);
        } else if (select_one.value === 'jpy' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_jpy_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_jpy_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'try') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_brl_try_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_brl_try_ask).toFixed(2);
        } else if (select_one.value === 'try' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_brl_try_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_brl_try_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'aud') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_aud_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_aud_brl_ask).toFixed(2);
        } else if (select_one.value === 'aud' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_aud_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_aud_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'chf') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_chf_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_chf_brl_ask).toFixed(2);
        } else if (select_one.value === 'chf' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_chf_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_chf_brl_ask * value).toFixed(2);
        }

        if(select_one.value === 'brl' && select_two.value === 'cny') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_cny_brl_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_cny_brl_ask).toFixed(2);
        } else if (select_one.value === 'cny' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_cny_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_cny_brl_ask * value).toFixed(2);
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
