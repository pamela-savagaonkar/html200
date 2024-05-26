let count = 10;
const timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Blast Off!");
  }
}, 1000);