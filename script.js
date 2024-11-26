// Function to show the questionnaire
function showQuestions() {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.classList.remove('hidden'); // Show the questionnaire
  }
  
  // Function to validate the answers and reveal the letter
  function checkAnswers() {
    const quizForm = document.getElementById('quizForm');
    const answers = {
      q1: '28 April',
      q2: 'Earbuds',
      q3: 'Beyond your imagination',
    };
  
    // Retrieve the user's answers
    const userAnswers = {
      q1: quizForm.q1.value,
      q2: quizForm.q2.value,
      q3: quizForm.q3.value,
    };
  
    // Check if all answers are correct
    if (
      userAnswers.q1 === answers.q1 &&
      userAnswers.q2 === answers.q2 &&
      userAnswers.q3 === answers.q3
    ) {
      // Hide the questionnaire
      const questionsContainer = document.getElementById('questionsContainer');
      questionsContainer.style.display = 'none'; // Hide it completely
      
      // Show the letter
      document.getElementById('letterContainer').classList.remove('hidden');
    } else {
      alert('Incorrect answers! Please try again.');
    }
  }
  
  // Function to close the love letter
  function closeLetter() {
    const letterContainer = document.getElementById('letterContainer');
    letterContainer.classList.add('hidden'); // Hide the letter
  }
  