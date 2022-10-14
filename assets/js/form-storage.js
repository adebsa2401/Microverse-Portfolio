Array.from(document.getElementsByClassName('form-input')).forEach((element) => {
  element.addEventListener('input', (event) => {
    const currentState = JSON.parse(localStorage.getItem('formData') || JSON.stringify({}));
    currentState[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(currentState));
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const currentState = JSON.parse(localStorage.getItem('formData') || JSON.stringify({}));

  Array.from(document.getElementsByClassName('form-input')).forEach((element) => {
    element.value = currentState[element.name] ?? '';
  });
});
