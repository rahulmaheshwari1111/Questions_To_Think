let countClicks = 0;
button.addEventListener('click', function clickHandler() {
  countClicks++;
});

const result = (function immediate(number) {
  const message = `number is: ${number}`;
  return message;
})(100);


setTimeout(function delayedReload() {
  location.reload();
}, 1000);


// Which of these 3 functions access outer scope variables?
// clickHandler accesses the variable countClicks from the outer scope.
// immediate doesn’t access any variables from the outer scope.
// delayedReload accesses the global variable location from the global scope (aka the outermost scope).