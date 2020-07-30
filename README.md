![status](https://img.shields.io/badge/status-In_Development-red?style=for-the-badge)
![coverage](https://img.shields.io/badge/coverage-30%25-red?style=for-the-badge)

# Crypto Indexify :gem:

Basic index fund manager to automatically divide your cryptocurrency investment across the top 20 (configurable) crypto currencies ajusting the market cap by the square root of an 10-day (configurable) exponentially moving average

 ## About
 
There are thousands of crypto currencies in the market and can be difficult and time consuming to find the best ones, holding only Bitcoin and/or Ethereum limits your exposure to the money coming into the market. [Index investing](https://www.investopedia.com/terms/i/index-investing.asp) is a strategy that invests across an entire market to minimize unsystematic risk related to a specific market without decreasing expected returns.

With an index fund you don't worry about deciding what, when and how much to invest in your crypto allowing you to not make any emotional based decisions.

## Output 
- 07/30/2020 - Using 20 markets, a 10-day exponentially moving average and excluding stable coins
```

  {
    "symbol": "bitcoin",
    "allocation": "28.74%"
  },
  {
    "symbol": "ethereum",
    "allocation": "11.94%"
  },
  {
    "symbol": "ripple",
    "allocation": "6.58%"
  },
  {
    "symbol": "bitcoin-cash",
    "allocation": "4.57%"
  },
  {
    "symbol": "cardano",
    "allocation": "4.31%"
  },
  {
    "symbol": "bitcoin-cash-sv",
    "allocation": "3.99%"
  },
  {
    "symbol": "litecoin",
    "allocation": "3.77%"
  },
  {
    "symbol": "chainlink",
    "allocation": "3.59%"
  },
  {
    "symbol": "binancecoin",
    "allocation": "3.53%"
  },
  {
    "symbol": "crypto-com-chain",
    "allocation": "3.53%"
  },
  {
    "symbol": "eos",
    "allocation": "3.40%"
  },
  {
    "symbol": "tezos",
    "allocation": "3.07%"
  },
  {
    "symbol": "stellar",
    "allocation": "2.97%"
  },
  {
    "symbol": "okb",
    "allocation": "2.62%"
  },
  {
    "symbol": "monero",
    "allocation": "2.43%"
  },
  {
    "symbol": "tron",
    "allocation": "2.32%"
  },
  {
    "symbol": "leo-token",
    "allocation": "2.29%"
  },
  {
    "symbol": "vechain",
    "allocation": "2.21%"
  },
  {
    "symbol": "huobi-token",
    "allocation": "2.11%"
  },
  {
    "symbol": "cdai",
    "allocation": "2.01%"
  }
]
```

## Installation

```
git clone https://github.com/fqueis/crypto-indexify && cd crypto-indexify
npm i && npm run start
```

## Development
Want to contribute? Great! Feel free to send a pull request

## Disclaimer

I'm not a financial adviser and these ideas don't represent any financial advice. Investing in crypto is risky and the market can change anytime.
Please use with caution.
