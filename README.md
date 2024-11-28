# CurrencyInWords & NumberInWords Library

This library provides two utilities to convert numeric values to words:

- **CurrencyInWords**: Converts a monetary value to words in the specified currency format.
- **NumberInWords**: Converts a numeric value to its word representation, handling both integer and fractional parts.

## Installation

To install this library, simply include it in your project:

```bash
npm install currency-in-words
```

## Usage

You can import and use either the `CurrencyInWords` or `NumberInWords` function to convert numbers to words.

### CurrencyInWords Example:

```typescript
import { CurrencyInWords } from 'currency-in-words';

const value = 1234.56;
const currency = 'usd';
const coins = 'cents';

const result = CurrencyInWords(value, currency, coins);
console.log(result);  // Output: "ONE THOUSAND TWO HUNDRED THIRTY-FOUR USD AND FIFTY-SIX CENTS ONLY"
```

### NumberInWords Example:

```typescript
import { NumberInWords } from 'currency-in-words';

const value1 = 123;
const value2 = 123.45;
const value3 = 1;

console.log(NumberInWords(value1));  // Output: "ONE HUNDRED TWENTY-THREE"
console.log(NumberInWords(value2));  // Output: "ONE HUNDRED TWENTY-THREE AND FORTY-FIVE"
console.log(NumberInWords(value3));  // Output: "ONE"
```

### Parameters:

#### `CurrencyInWords`
- `value` (Number): The monetary amount to be converted (integer or float).
- `currency` (string): The currency code (e.g., "usd", "gbp").
- `coins` (string): The name of the fractional unit (e.g., "cents", "pence").

#### `NumberInWords`
- `value` (Number): The numeric value to be converted (can be a float or integer).

### Returns:

Both functions return a string representing the value converted to words.

#### Example Outputs for `CurrencyInWords`:

- `CurrencyInWords(100, 'USD', 'cents')` → "ONE HUNDRED USD ONLY"
- `CurrencyInWords(1.25, 'USD', 'cents')` → "ONE USD AND TWENTY-FIVE CENTS ONLY"
- `CurrencyInWords(1234.56, 'GBP', 'pence')` → "ONE THOUSAND TWO HUNDRED THIRTY-FOUR GBP AND FIFTY-SIX PENCE ONLY"

#### Example Outputs for `NumberInWords`:

- `NumberInWords(123)` → "ONE HUNDRED TWENTY-THREE"
- `NumberInWords(123.45)` → "ONE HUNDRED TWENTY-THREE AND FORTY-FIVE"
- `NumberInWords(1)` → "ONE"
- `NumberInWords(0.75)` → "SEVENTY-FIVE"

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
