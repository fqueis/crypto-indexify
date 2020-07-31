![](https://img.shields.io/badge/status-In_Development-red?style=for-the-badge)
![](https://img.shields.io/badge/coverage-30%25-red?style=for-the-badge)
![](https://img.shields.io/github/package-json/v/fqueis/crypto-indexify?style=for-the-badge)
![](https://img.shields.io/github/last-commit/fqueis/crypto-indexify?style=for-the-badge)

# Crypto Indexify :gem:

Basic index fund manager to automatically divide your cryptocurrency investment across the top 20 (configurable) crypto currencies ajusting the market cap by the square root of an 10-day (configurable) exponentially moving average

 ## About
 
There are thousands of crypto currencies in the market and can be difficult and time consuming to find the best ones, holding only Bitcoin and/or Ethereum limits your exposure to the money coming into the market. [Index investing](https://www.investopedia.com/terms/i/index-investing.asp) is a strategy that invests across an entire market to minimize unsystematic risk related to a specific market without decreasing expected returns.

With an index fund you don't worry about deciding what, when and how much to invest in your crypto allowing you to not make any emotional based decisions.

## Samples
<details>
  <summary>07/30/2020 - Using 20 markets, a 15-day exponentially moving average and excluding stable coins</summary>

```json
[
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
</details>
<details>
  <summary>07/30/2020 - Using 30 markets, a 5-day exponentially moving average and excluding stable coins</summary>

```json
[
  {
    "symbol": "bitcoin",
    "allocation": "24.81%"
  },
  {
    "symbol": "ethereum",
    "allocation": "10.55%"
  },
  {
    "symbol": "ripple",
    "allocation": "5.71%"
  },
  {
    "symbol": "bitcoin-cash",
    "allocation": "3.99%"
  },
  {
    "symbol": "cardano",
    "allocation": "3.69%"
  },
  {
    "symbol": "bitcoin-cash-sv",
    "allocation": "3.46%"
  },
  {
    "symbol": "litecoin",
    "allocation": "3.31%"
  },
  {
    "symbol": "crypto-com-chain",
    "allocation": "3.02%"
  },
  {
    "symbol": "binancecoin",
    "allocation": "3.02%"
  },
  {
    "symbol": "chainlink",
    "allocation": "2.94%"
  },
  {
    "symbol": "eos",
    "allocation": "2.93%"
  },
  {
    "symbol": "tezos",
    "allocation": "2.51%"
  },
  {
    "symbol": "stellar",
    "allocation": "2.48%"
  },
  {
    "symbol": "okb",
    "allocation": "2.24%"
  },
  {
    "symbol": "monero",
    "allocation": "2.08%"
  },
  {
    "symbol": "tron",
    "allocation": "1.98%"
  },
  {
    "symbol": "leo-token",
    "allocation": "1.94%"
  },
  {
    "symbol": "vechain",
    "allocation": "1.82%"
  },
  {
    "symbol": "huobi-token",
    "allocation": "1.78%"
  },
  {
    "symbol": "cdai",
    "allocation": "1.77%"
  },
  {
    "symbol": "ethereum-classic",
    "allocation": "1.60%"
  },
  {
    "symbol": "neo",
    "allocation": "1.60%"
  },
  {
    "symbol": "iota",
    "allocation": "1.57%"
  },
  {
    "symbol": "dash",
    "allocation": "1.52%"
  },
  {
    "symbol": "cosmos",
    "allocation": "1.48%"
  },
  {
    "symbol": "zcash",
    "allocation": "1.45%"
  },
  {
    "symbol": "maker",
    "allocation": "1.23%"
  },
  {
    "symbol": "nem",
    "allocation": "1.19%"
  },
  {
    "symbol": "ontology",
    "allocation": "1.18%"
  },
  {
    "symbol": "compound-governance-token",
    "allocation": "1.16%"
  }
]
  ```
</details>

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
