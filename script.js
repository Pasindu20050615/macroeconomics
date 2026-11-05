const quizData = {
  q1: {
    answer: "A",
    explanation: "Correct! GDP via the expenditures approach is calculated as Consumption (C) + Investment (I) + Government Spending (G) + Net Exports (Exports 'X' minus Imports 'M')[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span)."
  },
  q2: {
    answer: "B",
    explanation: "Correct! Paid childcare services are included in market transactions[span_7](start_span)[span_7](end_span). Intermediate goods (like raw iron)[span_8](start_span)[span_8](end_span), non-market events (life expectancy)[span_9](start_span)[span_9](end_span), and used items are excluded to prevent double counting[span_10](start_span)[span_10](end_span)[span_11](start_span)[span_11](end_span)."
  },
  q3: {
    answer: "C",
    explanation: "Correct! The Gini coefficient ranges from 0 to 1, where 0 represents perfect equality (everyone earns an equal share) and 1 represents total inequality[span_12](start_span)[span_12](end_span)."
  },
  q4: {
    answer: "B",
    explanation: "Correct! Real GDP measures total output adjusted for price changes/inflation[span_13](start_span)[span_13](end_span), whereas Nominal GDP uses unadjusted current market prices[span_14](start_span)[span_14](end_span)."
  }
};

document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let score = 0;
  const totalQuestions = Object.keys(quizData).length;

  for (let key in quizData) {
    const selected = document.querySelector(`input[name="${key}"]:checked`); const expDiv = document.getElementById(`exp-${key}`);
    const cardDiv = document.getElementById(`${key}-card`);  if (selected && selected.value === quizData[key].answer) { score++; expDiv.className = "explanation correct"; expDiv.innerHTML = `<strong>Correct!</strong> ${quizData[key].explanation}`;
    } else {
      const userAnsText = selected ? selected.parentNode.textContent.trim() : "No answer selected";
      expDiv.className = "explanation incorrect";
      expDiv.innerHTML = `<strong>Incorrect!</strong> Your answer: "${userAnsText}".<br>${quizData[key].explanation}`;
    }
  }

  // Display Score
  const resultBox = document.getElementById('result-box');
  const scoreText = document.getElementById('score-text');
  scoreText.textContent = `You scored ${score} out of ${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)`;
  resultBox.classList.remove('hidden');

  // Disable submit button after submission
  document.getElementById('submit-btn').style.display = 'none';
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
