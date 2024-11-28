import { CurrencyInWords } from './index.js'; // Replace with the actual file name

async function runTests() {
  const words = await CurrencyInWords(30210.12, 'Ringgit', 'Sen');
  console.log(words);
}

runTests();
