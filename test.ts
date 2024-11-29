import { CurrencyInWords } from './index.js'; // Replace with the actual file name

async function runTests() {
  const amount = 3293111.11;
  const words = await CurrencyInWords(amount, 'Ringgit', 'Sen');
  console.log(words);
}

runTests();
