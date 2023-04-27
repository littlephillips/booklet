// Get all pages and the next button
const pages = document.querySelectorAll('.card');
const nextBtns = document.querySelectorAll('.next-btn');

// Add event listener to each next button
nextBtns.forEach((btn) => {
btn.addEventListener('click', () => {
    // Get the current page number and the user's answer
    const currentPage = btn.parentElement.parentElement;
    const currentPageNum = currentPage.getAttribute('data-page');
    const userAnswer = document.querySelector(`#q${currentPageNum}`).value.toLowerCase();

    // Check if the answer is correct
    switch (currentPageNum) {
    case '1':
        if (userAnswer === 'paris') {
        currentPage.classList.remove('active-card');
        document.querySelector(`[data-page="${parseInt(currentPageNum) + 1}"]`).classList.add('active-card');
        } else {
        alert('Incorrect answer, please try again.');
        }
        break;
    case '2':
        if (userAnswer === 'asia') {
        currentPage.classList.remove('active-card');
        document.querySelector(`[data-page="${parseInt(currentPageNum) + 1}"]`).classList.add('active-card');
        } else {
        alert('Incorrect answer, please try again.');
        }
        break;
    case '3':
        if (userAnswer === 'mount everest') {
        currentPage.classList.remove('active-card');
        document.querySelector(`[data-page="${parseInt(currentPageNum) + 1}"]`).classList.add('active-card');
        } else {
        alert('Incorrect answer, please try again.');
        }
        break;
    }
});
});

