const delay = ms => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => resolve(ms), 3000);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
