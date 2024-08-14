document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question-container');
    const finalButtonContainer = document.getElementById('end-container');
    const loadingContainer = document.getElementById('loading-container');
    let currentQuestionIndex = 0;

    questions[currentQuestionIndex].classList.add('active');

    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', function() {
            const next = this.getAttribute('data-next');

            questions[currentQuestionIndex].classList.remove('active');
            currentQuestionIndex++;

            if (next === 'loading') {
                loadingContainer.style.display = 'block';

                setTimeout(() => {
                    loadingContainer.style.display = 'none';
                    finalButtonContainer.style.display = 'block';
                }, 4000); // 4 seconds
            } else {
                questions[currentQuestionIndex].classList.add('active');
            }
        });
    });
});