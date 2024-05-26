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

    let tempNameMoeda = name_moeda_to_conversion.innerText;
    name_moeda_to_conversion.innerText = name_moeda_result.innerText;
    name_moeda_result.innerText = tempNameMoeda;
    
    let tempSrc = img_value_conversion.src;
    img_value_conversion.src = img_converter_value.src;
    img_converter_value.src = tempSrc;
});

// BRL
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

// USD
async function getResponse_usd_cad() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-CAD');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_cad_bid() {
    try {
        const response =  await getResponse_usd_cad();
        return response.USDCAD.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_cad_ask() {
    try {
        const response =  await getResponse_usd_cad();
        return response.USDCAD.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_usd_eur() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-EUR');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_eur_bid() {
    try {
        const response =  await getResponse_usd_eur();
        return response.USDEUR.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_eur_ask() {
    try {
        const response =  await getResponse_usd_eur();
        return response.USDEUR.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_usd_gbp() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-GBP');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_gbp_bid() {
    try {
        const response =  await getResponse_usd_gbp();
        return response.USDGBP.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_gbp_ask() {
    try {
        const response =  await getResponse_usd_gbp();
        return response.USDGBP.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_usd_ars() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-ARS');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_ars_bid() {
    try {
        const response =  await getResponse_usd_ars();
        return response.USDARS.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_ars_ask() {
    try {
        const response =  await getResponse_usd_ars();
        return response.USDARS.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_usd_btc() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/BTC-USD');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_btc_bid() {
    try {
        const response =  await getResponse_usd_btc();
        return response.BTCUSD.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_btc_ask() {
    try {
        const response =  await getResponse_usd_btc();
        return response.BTCUSD.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_usd_jpy() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-JPY');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_jpy_bid() {
    try {
        const response =  await getResponse_usd_jpy();
        return response.USDJPY.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_jpy_ask() {
    try {
        const response =  await getResponse_usd_jpy();
        return response.USDJPY.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_usd_try() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-TRY');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_try_bid() {
    try {
        const response =  await getResponse_usd_try();
        return response.USDTRY.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_try_ask() {
    try {
        const response =  await getResponse_usd_try();
        return response.USDTRY.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_usd_aud() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-AUD');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_aud_bid() {
    try {
        const response =  await getResponse_usd_aud();
        return response.USDAUD.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_aud_ask() {
    try {
        const response =  await getResponse_usd_aud();
        return response.USDAUD.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_usd_chf() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-CHF');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_chf_bid() {
    try {
        const response =  await getResponse_usd_chf();
        return response.USDCHF.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_chf_ask() {
    try {
        const response =  await getResponse_usd_chf();
        return response.USDCHF.ask;
    } catch(e) {
        console.log(e);
    }
}


async function getResponse_usd_cny() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-CNY');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_usd_cny_bid() {
    try {
        const response =  await getResponse_usd_cny();
        return response.USDCNY.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_usd_cny_ask() {
    try {
        const response =  await getResponse_usd_cny();
        return response.USDCNY.ask;
    } catch(e) {
        console.log(e);
    }
}

// CAD
async function getResponse_cad_eur() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/CAD-EUR');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};


async function get_cad_eur_bid() {
    try {
        const response =  await getResponse_cad_eur();
        return response.CADEUR.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_cad_eur_ask() {
    try {
        const response =  await getResponse_cad_eur();
        return response.CADEUR.ask;
    } catch(e) {
        console.log(e);
    }
}


// EUR
async function getResponse_eur_gbp() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-GBP');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_gbp_bid() {
    try {
        const response =  await getResponse_eur_gbp();
        return response.EURGBP.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_gbp_ask() {
    try {
        const response =  await getResponse_eur_gbp();
        return response.EURGBP.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_eur_ars() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/ARS-EUR');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_ars_bid() {
    try {
        const response =  await getResponse_eur_ars();
        return response.ARSEUR.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_ars_ask() {
    try {
        const response =  await getResponse_eur_ars();
        return response.ARSEUR.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_eur_btc() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/BTC-EUR');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_btc_bid() {
    try {
        const response =  await getResponse_eur_btc();
        return response.BTCEUR.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_btc_ask() {
    try {
        const response =  await getResponse_eur_btc();
        return response.BTCEUR.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_eur_jpy() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-JPY');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_jpy_bid() {
    try {
        const response =  await getResponse_eur_jpy();
        return response.EURJPY.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_jpy_ask() {
    try {
        const response =  await getResponse_eur_jpy();
        return response.EURJPY.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_eur_try() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-TRY');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_try_bid() {
    try {
        const response =  await getResponse_eur_try();
        return response.EURTRY.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_try_ask() {
    try {
        const response =  await getResponse_eur_try();
        return response.EURTRY.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_eur_aud() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-AUD');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_aud_bid() {
    try {
        const response =  await getResponse_eur_aud();
        return response.EURAUD.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_aud_ask() {
    try {
        const response =  await getResponse_eur_aud();
        return response.EURAUD.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_eur_chf() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-CHF');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_chf_bid() {
    try {
        const response =  await getResponse_eur_chf();
        return response.EURCHF.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_chf_ask() {
    try {
        const response =  await getResponse_eur_chf();
        return response.EURCHF.ask;
    } catch(e) {
        console.log(e);
    }
}

async function getResponse_eur_cny() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-CNY');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

async function get_eur_cny_bid() {
    try {
        const response =  await getResponse_eur_cny();
        return response.EURCNY.bid;
    } catch(e) {
        console.log(e);
    }
}

async function get_eur_cny_ask() {
    try {
        const response =  await getResponse_eur_cny();
        return response.EURCNY.ask;
    } catch(e) {
        console.log(e);
    }
}

// CNY
async function getResponse_cny_brl() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/CNY-BRL');
        return response.json();
    } catch(e) {
        console.log(e);
    }
};

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

        if(select_one.value === 'gbp' || select_one.value === 'ars' || select_one.value === 'btc' || select_one.value === 'jpy' || select_one.value === 'try' || select_one.value === 'aud' || select_one.value === 'chf' || select_one.value === 'cny' || select_one.value === 'gbp' || select_one.value === 'cad') {
            removeOptionsPerValue('ars');
            removeOptionsPerValue('cad');
            removeOptionsPerValue('btc');
            removeOptionsPerValue('jpy');
            removeOptionsPerValue('try');
            removeOptionsPerValue('aud');
            removeOptionsPerValue('chf');
            removeOptionsPerValue('cny');
            removeOptionsPerValue('gbp');
        } else {
            restoreOptions();
        }

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

async function setVariacao() {
    let variacoes = [];
    const usd_brl_var = await getResponse_usd_brl();
    const eur_brl_var = await getResponse_eur_brl();    
    const gbp_brl_var = await getResponse_gbp_brl();
    const usd_eur_var = await getResponse_usd_eur();
    const usd_gbp_var = await getResponse_usd_gbp();
    const eur_gbp_var = await getResponse_eur_gbp();
    const cad_brl_var = await getResponse_cad_brl();
    const aud_brl_var = await getResponse_aud_brl();
    const jpy_brl_var = await getResponse_jpy_brl();
    const cny_brl_var = await getResponse_cny_brl();

    variacoes.push(usd_brl_var.USDBRL.varBid, eur_brl_var.EURBRL.varBid, gbp_brl_var.GBPBRL.varBid, usd_eur_var.USDEUR.varBid, usd_gbp_var.USDGBP.varBid, eur_gbp_var.EURGBP.varBid, cad_brl_var.CADBRL.varBid, aud_brl_var.AUDBRL.varBid, jpy_brl_var.JPYBRL.varBid, cny_brl_var.CNYBRL.varBid);
    const tds = document.querySelectorAll('#variacao');
    tds.forEach((td, index) => {
        const td_info = variacoes[index];
        td.innerHTML =  td_info;
    })
}

async function addValue() {
    const toast = document.querySelector('#toast');

    const value_cotacao_usd_brl_bid = await get_usd_brl_bid();
    const value_cotacao_usd_brl_ask = await get_usd_brl_ask();

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

    const value_cotacao_usd_cad_bid = await get_usd_cad_bid();
    const value_cotacao_usd_cad_ask = await get_usd_cad_ask();

    const value_cotacao_usd_eur_bid = await get_usd_eur_bid();
    const value_cotacao_usd_eur_ask = await get_usd_eur_ask();

    const value_cotacao_usd_gbp_bid = await get_usd_gbp_bid();
    const value_cotacao_usd_gbp_ask = await get_usd_gbp_ask();

    
    const value_cotacao_usd_ars_bid = await get_usd_ars_bid();
    const value_cotacao_usd_ars_ask = await get_usd_ars_ask();

    const value_cotacao_usd_btc_bid = await get_usd_btc_bid();
    const value_cotacao_usd_btc_ask = await get_usd_btc_ask();

    const value_cotacao_usd_jpy_bid = await get_usd_jpy_bid();
    const value_cotacao_usd_jpy_ask = await get_usd_jpy_ask();

    const value_cotacao_usd_try_bid = await get_usd_try_bid();
    const value_cotacao_usd_try_ask = await get_usd_try_ask();

    const value_cotacao_usd_aud_bid = await get_usd_aud_bid();
    const value_cotacao_usd_aud_ask = await get_usd_aud_ask();

    const value_cotacao_usd_chf_bid = await get_usd_chf_bid();
    const value_cotacao_usd_chf_ask = await get_usd_chf_ask();

    const value_cotacao_usd_cny_bid = await get_usd_cny_bid();
    const value_cotacao_usd_cny_ask = await get_usd_cny_ask();

    const value_cotacao_cad_eur_bid = await get_cad_eur_bid();
    const value_cotacao_cad_eur_ask = await get_cad_eur_ask();

    
    const value_cotacao_eur_gbp_bid = await get_eur_gbp_bid();
    const value_cotacao_eur_gbp_ask = await get_eur_gbp_ask();

     
    const value_cotacao_eur_ars_bid = await get_eur_ars_bid();
    const value_cotacao_eur_ars_ask = await get_eur_ars_ask();

    const value_cotacao_eur_btc_bid = await get_eur_btc_bid();
    const value_cotacao_eur_btc_ask = await get_eur_btc_ask();

    const value_cotacao_eur_jpy_bid = await get_eur_jpy_bid();
    const value_cotacao_eur_jpy_ask = await get_eur_jpy_ask();

    const value_cotacao_eur_try_bid = await get_eur_try_bid();
    const value_cotacao_eur_try_ask = await get_eur_try_ask();

    const value_cotacao_eur_aud_bid = await get_eur_aud_bid();
    const value_cotacao_eur_aud_ask = await get_eur_aud_ask();

    const value_cotacao_eur_chf_bid = await get_eur_chf_bid();
    const value_cotacao_eur_chf_ask = await get_eur_chf_ask();

    const value_cotacao_eur_cny_bid = await get_eur_cny_bid();
    const value_cotacao_eur_cny_ask = await get_eur_cny_ask();

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
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_brl_ask).toFixed(2);
        } else if (select_one.value === 'usd' && select_two.value === 'brl') {
            value_result_conversion_bid.innerHTML = (value_cotacao_usd_brl_bid * value).toFixed(2);
            value_result_conversion_ask.innerHTML = (value_cotacao_usd_brl_ask * value).toFixed(2);
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

        // de usd para
        if(select_one.value === 'usd' && select_two.value === 'cad') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_cad_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_cad_ask).toFixed(2);
        } else if(select_one.value === 'cad' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_cad_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_cad_ask).toFixed(2);
        }

        if(select_one.value === 'usd' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_eur_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_eur_ask).toFixed(2);
        } else if(select_one.value === 'eur' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_eur_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_eur_ask).toFixed(2);
        }

        if(select_one.value === 'usd' && select_two.value === 'gbp') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_gbp_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_gbp_ask).toFixed(2);
        } else if(select_one.value === 'gbp' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_gbp_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_gbp_ask).toFixed(2);
        }

        if(select_one.value === 'usd' && select_two.value === 'ars') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_ars_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_ars_ask).toFixed(2);
        } else if(select_one.value === 'ars' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_ars_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_ars_ask).toFixed(2);
        }

         if(select_one.value === 'usd' && select_two.value === 'btc') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_btc_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_btc_ask).toFixed(2);
        } else if(select_one.value === 'btc' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_btc_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_btc_ask).toFixed(2);
        }

        if(select_one.value === 'usd' && select_two.value === 'jpy') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_jpy_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_jpy_ask).toFixed(2);
        } else if(select_one.value === 'jpy' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_jpy_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_jpy_ask).toFixed(2);
        }

        if(select_one.value === 'usd' && select_two.value === 'try') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_try_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_try_ask).toFixed(2);
        } else if(select_one.value === 'try' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_try_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_try_ask).toFixed(2);
        }

        if(select_one.value === 'usd' && select_two.value === 'aud') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_aud_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_aud_ask).toFixed(2);
        } else if(select_one.value === 'aud' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_aud_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_aud_ask).toFixed(2);
        }

        if(select_one.value === 'usd' && select_two.value === 'chf') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_chf_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_chf_ask).toFixed(2);
        } else if(select_one.value === 'chf' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_chf_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_chf_ask).toFixed(2);
        }

        if(select_one.value === 'usd' && select_two.value === 'cny') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_usd_cny_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_usd_cny_ask).toFixed(2);
        } else if(select_one.value === 'cny' && select_two.value === 'usd') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_usd_cny_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_usd_cny_ask).toFixed(2);
        }

        // de cad para     
        if(select_one.value === 'cad' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_cad_eur_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_cad_eur_ask).toFixed(2);
        } else if(select_one.value === 'eur' && select_two.value === 'cad') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_cad_eur_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_cad_eur_ask).toFixed(2);
        }

        // de eur para
        if(select_one.value === 'eur' && select_two.value === 'ars') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_eur_ars_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_ars_ask).toFixed(2);
        } else if(select_one.value === 'ars' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_eur_ars_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_eur_ars_ask).toFixed(2);
        }

        if(select_one.value === 'eur' && select_two.value === 'gbp') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_eur_gbp_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_eur_gbp_ask).toFixed(2);
        } else if(select_one.value === 'gbp' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_eur_gbp_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_gbp_ask).toFixed(2);
        }

        if(select_one.value === 'eur' && select_two.value === 'btc') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_eur_btc_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_eur_btc_ask).toFixed(2);
        } else if(select_one.value === 'btc' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_eur_btc_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_btc_ask).toFixed(2);
        }

        if(select_one.value === 'eur' && select_two.value === 'jpy') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_eur_jpy_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_eur_jpy_ask).toFixed(2);
        } else if(select_one.value === 'jpy' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_eur_jpy_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_jpy_ask).toFixed(2);
        }

        if(select_one.value === 'eur' && select_two.value === 'try') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_eur_try_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_eur_try_ask).toFixed(2);
        } else if(select_one.value === 'try' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_eur_try_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_try_ask).toFixed(2);
        }

        if(select_one.value === 'eur' && select_two.value === 'aud') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_eur_aud_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_eur_aud_ask).toFixed(2);
        } else if(select_one.value === 'aud' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_eur_aud_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_aud_ask).toFixed(2);
        }

        if(select_one.value === 'eur' && select_two.value === 'chf') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_eur_chf_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_eur_chf_ask).toFixed(2);
        } else if(select_one.value === 'chf' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_eur_chf_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_chf_ask).toFixed(2);
        }

        
        if(select_one.value === 'eur' && select_two.value === 'cny') {
            value_result_conversion_bid.innerHTML = (value *  value_cotacao_eur_cny_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value * value_cotacao_eur_cny_ask).toFixed(2);
        } else if(select_one.value === 'cny' && select_two.value === 'eur') {
            value_result_conversion_bid.innerHTML = (value /  value_cotacao_eur_cny_bid).toFixed(2);
            value_result_conversion_ask.innerHTML = (value / value_cotacao_eur_cny_ask).toFixed(2);
        }
        
    } catch(e) {
        console.log(e);
    }
}

const removedOptions = [];

function removeOptionsPerValue(value) {
    const select = document.getElementById('select_two');
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === value) {
            removedOptions.push(select.options[i]);
            select.remove(i);
            return;
        }
    }
}

function restoreOptions() {
    const select = document.getElementById('select_two');
    while (removedOptions.length > 0) {
        const option = removedOptions.pop();
        select.add(option);
    }
}

async function init() {
    try {
        await Promise.all([setVariacao(), setInformations()]);
    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
    }
}

init();
