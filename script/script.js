function calculate() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const results = document.querySelector('.results');
    const isImperial = document.getElementById('imperial').checked;
    const isMetric = document.getElementById('metric').checked;

    // Função para calcular o IMC no sistema métrico
    function bmiMetric() {
        const bmi = weight / Math.pow(height, 2);
        if (bmi < 18.5) {
            results.innerHTML = 'Abaixo do peso'
            results.style.color = 'white'
        } else if (bmi < 24.9) {
            results.innerHTML = 'Peso normal'
            results.style.color = 'white'
        } else if (bmi < 29.9) {
            results.innerHTML = 'Sobrepeso'
            results.style.color = 'white'
        } else if (bmi < 34.9) {
            results.innerHTML = 'Obesidade grau I'
            results.style.color = 'white'
        } else if (bmi < 39.9) {
            results.innerHTML = 'Obesidade grau II'
            results.style.color = 'white'
        } else {
            results.innerHTML = 'Obesidade grau III (mórbida)'
            results.style.color = 'white'
        }

        results.style.fontFamily = 'Inter, sans-serif';
        results.style.fontSize = '1.5rem'
        results.style.width = '60dvh;'
    }

    // Função para calcular o IMC no sistema imperial
    function bmiImperial() {
        const bmi = (weight / Math.pow(height, 2)) * 703;
        if (bmi < 18.5) {
            results.innerHTML = 'Abaixo do peso';
        } else if (bmi < 24.9) {
            results.innerHTML = 'Peso normal';
        } else if (bmi < 29.9) {
            results.innerHTML = 'Sobrepeso';
        } else if (bmi < 34.9) {
            results.innerHTML = 'Obesidade grau I';
        } else if (bmi < 39.9) {
            results.innerHTML = 'Obesidade grau II';
        } else {
            results.innerHTML = 'Obesidade grau III (mórbida)';
        }

        results.style.color = 'white'
        results.style.fontFamily = 'Inter, sans-serif';
        results.style.fontSize = '1.5rem';
        results.style.width = '60dvh;'
    }

    // Verifica se o sistema métrico está selecionado e chama a função apropriada
    if (isMetric) {
        bmiMetric()
    } else {
        bmiImperial()
    }

    if (!isMetric && !isImperial) {
        results.innerHTML = 'Please, select metric or imperial'
    }

    if (!height || !weight) {
        results.innerHTML = 'Please enter valid height and weight values.';
        return;
    }
};

// Evento de clique para o botão de cálculo
const buttonCalculate = document.querySelector('.btn-calculate');
buttonCalculate.addEventListener('click', calculate)