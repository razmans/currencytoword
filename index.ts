/**
 * @module CurrencyInWords
 * @description Converts a monetary value to words in the specified currency format.
 * @param {number} value - The monetary amount to be converted (integer or float).
 * @param {string} currency - The currency code (e.g., "usd", "gbp").
 * @param {string} coins - The name of the fractional unit (e.g., "cents", "pence").
 * @example
 * // Converts 100 to words in USD
 * CurrencyInWords(100, 'USD', 'cents'); // "ONE HUNDRED USD ONLY"
 * @example
 * // Converts 1.25 to words in USD with fractional unit "cents"
 * CurrencyInWords(1.25, 'USD', 'cents'); // "ONE USD AND TWENTY-FIVE CENTS ONLY"
 * @example
 * // Converts 1234.56 to words in GBP with fractional unit "pence"
 * CurrencyInWords(1234.56, 'GBP', 'pence'); // "ONE THOUSAND TWO HUNDRED THIRTY-FOUR GBP AND FIFTY-SIX PENCE ONLY"
 * @returns {string} - The currency amount converted to words.
 */
/** Convert currency in number into words */

export function CurrencyInWords(
  value: Number,
  currency: string,
  coins: string
): string {
  var fraction = Math.round(frac(value) * 100);
  var f_text = '';

  if (fraction > 0) {
    f_text = 'AND ' + convert_number(fraction) + ` ${coins.toUpperCase()}`;
  }

  return (
    convert_number(value) + ` ${currency.toUpperCase()} ` + f_text + ' ONLY'
  );
}

/**
 * @module NumberInWords
 * @description Converts a numeric value to its word representation.
 * Handles both integer and fractional parts of the number.
 * @param {number} value - The numeric value to be converted to words (can be a float or integer).
 * @example
 * // Converts 123 to words
 * NumberInWords(123); // "ONE HUNDRED TWENTY-THREE"
 * @example
 * // Converts 123.45 to words
 * NumberInWords(123.45); // "ONE HUNDRED TWENTY-THREE AND FORTY-FIVE"
 * @example
 * // Converts 1 to words
 * NumberInWords(1); // "ONE"
 * @example
 * // Converts 0.75 to words
 * NumberInWords(0.75); // "SEVENTY-FIVE"
 * @returns {string} - The number converted to words, with "AND" added for fractional parts.
 */
/** Convert number into words */

export function NumberInWords(value: Number): string {
  var fraction = Math.round(frac(value) * 100);
  var f_text = '';

  if (fraction > 0) {
    f_text = 'AND ' + convert_number(fraction);
  }

  return convert_number(value) + f_text;
}

function frac(f) {
  return f % 1;
}

function convert_number(number) {
  if (number < 0 || number > 999999999) {
    return 'NUMBER OUT OF RANGE!';
  }
  var Gn = Math.floor(number / 10000000); /* Crore */
  number -= Gn * 10000000;
  var kn = Math.floor(number / 100000); /* lakhs */
  number -= kn * 100000;
  var Hn = Math.floor(number / 1000); /* thousand */
  number -= Hn * 1000;
  var Dn = Math.floor(number / 100); /* Tens (deca) */
  number = number % 100; /* Ones */
  var tn = Math.floor(number / 10);
  var one = Math.floor(number % 10);
  var res = '';

  if (Gn > 0) {
    res += convert_number(Gn) + ' BILLION';
  }
  if (kn > 0) {
    res += (res == '' ? '' : ' ') + convert_number(kn) + ' MILLION';
  }
  if (Hn > 0) {
    res += (res == '' ? '' : ' ') + convert_number(Hn) + ' THOUSAND';
  }

  if (Dn) {
    res += (res == '' ? '' : ' ') + convert_number(Dn) + ' HUNDRED';
  }

  var ones = Array(
    '',
    'ONE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIGHT',
    'NINE',
    'TEN',
    'ELEVEN',
    'TWELVE',
    'THIRTEEN',
    'FOURTEEN',
    'FIFTEEN',
    'SIXTEEN',
    'SEVENTEEN',
    'EIGHTEEN',
    'NINETEEN'
  );
  var tens = Array(
    '',
    '',
    'TWENTY',
    'THIRTY',
    'FOURTY',
    'FIFTY',
    'SIXTY',
    'SEVENTY',
    'EIGHTY',
    'NINETY'
  );

  if (tn > 0 || one > 0) {
    if (!(res == '')) {
      res += ' AND ';
    }
    if (tn < 2) {
      res += ones[tn * 10 + one];
    } else {
      res += tens[tn];
      if (one > 0) {
        res += '-' + ones[one];
      }
    }
  }

  if (res == '') {
    res = 'zero';
  }
  return res;
}
