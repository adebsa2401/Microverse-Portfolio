document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('input[type="email"]').value;

  if (email === email.toLowerCase()) {
    event.target.submit();
    return;
  }

  const errorEl = document.createElement('label');
  errorEl.className = 'error-label';
  errorEl.innerText = 'The mail address should be in lower case';

  document.getElementById('submit-error-div').append(errorEl);
});
