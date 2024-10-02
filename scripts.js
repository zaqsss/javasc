document.addEventListener("DOMContentLoaded", () => {
    const quizButton = document.getElementById('quizButton');
    const quizPopup = document.getElementById('quizPopup');
    const closeQuiz = document.getElementById('closeQuiz');
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizResult = document.getElementById('quizResult');
    const resultMessage = document.getElementById('resultMessage');
    const curiosity = document.getElementById('curiosity');
    const explanation = document.getElementById('explanation');


    quizButton.addEventListener('click', () => {
        quizPopup.style.display = 'block';
    });


    closeQuiz.addEventListener('click', () => {
        quizPopup.style.display = 'none';
        quizResult.classList.add('hidden');
    });

    quizOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const isCorrect = event.target.getAttribute('data-answer') === 'correct';

            quizResult.classList.remove('hidden');

            if (isCorrect) {
                resultMessage.textContent = 'Correto! Mocha foi o nome original do JavaScript.';
                curiosity.textContent = 'Curiosidade: JavaScript foi criado em apenas 10 dias.';
                explanation.textContent = 'Explicação: O nome foi alterado para JavaScript em uma estratégia de marketing, mesmo que não tenha relação direta com a linguagem Java.';
            } else {
                resultMessage.textContent = 'Resposta incorreta. O nome original era Mocha.';
                curiosity.textContent = 'Curiosidade: JavaScript foi criado em apenas 10 dias.';
                explanation.textContent = 'Explicação: O nome foi alterado para JavaScript em uma estratégia de marketing para aproveitar a popularidade da linguagem Java.';
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const curiosityButton = document.getElementById('curiosityButton');
    const infoButton = document.getElementById('infoButton');
    const curiosityPopup = document.getElementById('curiosityPopup');
    const infoPopup = document.getElementById('infoPopup');
    const closeCuriosity = document.getElementById('closeCuriosity');
    const closeInfo = document.getElementById('closeInfo');


    curiosityButton.addEventListener('click', () => {
        curiosityPopup.style.display = 'block';
    });

    closeCuriosity.addEventListener('click', () => {
        curiosityPopup.style.display = 'none';
    });


    infoButton.addEventListener('click', () => {
        infoPopup.style.display = 'block';
    });

    closeInfo.addEventListener('click', () => {
        infoPopup.style.display = 'none';
    });
});
