const intervals = process.argv.slice(2);
const numIntervals = [];
for (let string of intervals) {
  if (string == Number(string)) {
    numIntervals.push(Number(string));
  }
}

const timer = (intervalsArray) => {
  if (intervalsArray.length === 0) {
    return;
  }
  for (let interval of intervalsArray) {
    if (interval <= 0 || typeof interval !== 'number' || interval === NaN) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval)
  }
};

timer(numIntervals);

// process.stdout.write('\x07'); // <- make beep