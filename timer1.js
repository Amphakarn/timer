// To test, run "node timer1.js 10 3 5 15 9" in the terminal

const timer = process.argv.slice(2);
if (timer.length >= 1) {
  for (let i of timer) {
    i = Number(i);
    if (i >= 0 && typeof i === 'number') {
      setTimeout(() => {
        process.stdout.write('BEEP!\n');
      }, i * 1000);
    }
  }
}
