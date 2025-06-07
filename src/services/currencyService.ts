
interface CurrencyRates {
  [key: string]: number;
}

interface CurrencyConfig {
  symbol: string;
  name: string;
  locale: string;
}

const currencyConfigs: { [key: string]: CurrencyConfig } = {
  INR: { symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
  USD: { symbol: '$', name: 'US Dollar', locale: 'en-US' },
  GBP: { symbol: '£', name: 'British Pound', locale: 'en-GB' },
  AUD: { symbol: 'A$', name: 'Australian Dollar', locale: 'en-AU' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA' },
  EUR: { symbol: '€', name: 'Euro', locale: 'de-DE' },
  SGD: { symbol: 'S$', name: 'Singapore Dollar', locale: 'en-SG' },
  AED: { symbol: 'د.إ', name: 'UAE Dirham', locale: 'ar-AE' },
  JPY: { symbol: '¥', name: 'Japanese Yen', locale: 'ja-JP' },
  Other: { symbol: '$', name: 'Other', locale: 'en-US' }
};

// Exchange rates relative to USD (simplified for demo)
const exchangeRates: CurrencyRates = {
  USD: 1,
  INR: 83.12,
  GBP: 0.79,
  AUD: 1.52,
  CAD: 1.36,
  EUR: 0.92,
  SGD: 1.34,
  AED: 3.67,
  JPY: 149.50,
  Other: 1
};

export class CurrencyService {
  static convertPrice(amountInUSD: number, toCurrency: string): number {
    const rate = exchangeRates[toCurrency] || 1;
    return amountInUSD * rate;
  }

  static formatPrice(amount: number, currency: string): string {
    const config = currencyConfigs[currency] || currencyConfigs.USD;
    
    // For currencies like JPY that don't use decimals
    const minimumFractionDigits = currency === 'JPY' ? 0 : 2;
    const maximumFractionDigits = currency === 'JPY' ? 0 : 2;

    try {
      return new Intl.NumberFormat(config.locale, {
        style: 'currency',
        currency: currency === 'Other' ? 'USD' : currency,
        minimumFractionDigits,
        maximumFractionDigits,
      }).format(amount);
    } catch (error) {
      // Fallback formatting if locale is not supported
      return `${config.symbol}${amount.toLocaleString('en-US', {
        minimumFractionDigits,
        maximumFractionDigits,
      })}`;
    }
  }

  static convertAndFormat(amountInUSD: number, toCurrency: string): string {
    const convertedAmount = this.convertPrice(amountInUSD, toCurrency);
    return this.formatPrice(convertedAmount, toCurrency);
  }

  static getCurrencySymbol(currency: string): string {
    return currencyConfigs[currency]?.symbol || '$';
  }

  static getCurrencyName(currency: string): string {
    return currencyConfigs[currency]?.name || 'Unknown Currency';
  }

  static getAllCurrencies(): string[] {
    return Object.keys(currencyConfigs);
  }

  static getExchangeRate(fromCurrency: string, toCurrency: string): number {
    const fromRate = exchangeRates[fromCurrency] || 1;
    const toRate = exchangeRates[toCurrency] || 1;
    return toRate / fromRate;
  }
}
