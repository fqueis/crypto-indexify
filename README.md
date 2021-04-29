![](https://img.shields.io/badge/status-In_Development-red?style=for-the-badge)
![](https://img.shields.io/github/last-commit/fqueis/crypto-indexify?style=for-the-badge)

# Crypto Indexify :gem:

Basic index fund manager to automatically divide your cryptocurrency investment across the top 20 (configurable) crypto currencies ajusting the market cap by the square root of an 10-day (configurable) weighted moving average

 ## About
 
There are thousands of crypto currencies in the market and can be difficult and time consuming to find the best ones, holding only Bitcoin and/or Ethereum limits your exposure to the money coming into the market. [Index investing](https://www.investopedia.com/terms/i/index-investing.asp) is a strategy that invests across an entire market to minimize unsystematic risk related to a specific market without decreasing expected returns.

With an index fund you don't worry about deciding what, when and how much to invest in your crypto allowing you to not make any emotional based decisions.

## Samples results
<details>
  <summary>04/28/2021 - Using 20 markets, a 5-day weighted moving average and excluding stable coins</summary>

```json
[
  {
    "coin": "Bitcoin",
    "mcap": {
      "val": 1028116231054.5498,
      "wma": 1002953639717.4954
    },
    "ratio": 24.45317905030065
  },
  {
    "coin": "Ethereum",
    "mcap": {
      "val": 315040662990.19794,
      "wma": 307697382224.7004
    },
    "ratio": 13.54430731514543
  },
  {
    "coin": "Binance Coin",
    "mcap": {
      "val": 88006798226.51976,
      "wma": 86157427018.60643
    },
    "ratio": 7.167063608212951
  },
  {
    "coin": "XRP",
    "mcap": {
      "val": 61972359814.98788,
      "wma": 61793797344.01338
    },
    "ratio": 6.0697015981157545
  },
  {
    "coin": "Cardano",
    "mcap": {
      "val": 42508052744.49025,
      "wma": 41521956940.07653
    },
    "ratio": 4.975466486997267
  },
  {
    "coin": "Dogecoin",
    "mcap": {
      "val": 40884044589.27487,
      "wma": 38681649934.58153
    },
    "ratio": 4.802279063771392
  },
  {
    "coin": "Polkadot",
    "mcap": {
      "val": 33206249522.058437,
      "wma": 33165148535.382607
    },
    "ratio": 4.446679945952302
  },
  {
    "coin": "Uniswap",
    "mcap": {
      "val": 22328172752.21089,
      "wma": 21211474516.494934
    },
    "ratio": 3.556152102983091
  },
  {
    "coin": "Litecoin",
    "mcap": {
      "val": 17075482817.435257,
      "wma": 16952905454.6094
    },
    "ratio": 3.179193548508536
  },
  {
    "coin": "Bitcoin Cash",
    "mcap": {
      "val": 16805428861.004763,
      "wma": 16510578653.29867
    },
    "ratio": 3.137444453772896
  },
  {
    "coin": "Chainlink",
    "mcap": {
      "val": 15059876003.460323,
      "wma": 15027228986.502954
    },
    "ratio": 2.993190447955147
  },
  {
    "coin": "VeChain",
    "mcap": {
      "val": 12881552161.242146,
      "wma": 12884350028.370003
    },
    "ratio": 2.771571940341642
  },
  {
    "coin": "Solana",
    "mcap": {
      "val": 12184653832.270063,
      "wma": 12121278486.233019
    },
    "ratio": 2.688246648882666
  },
  {
    "coin": "Theta Network",
    "mcap": {
      "val": 11317950153.80305,
      "wma": 10970231424.424826
    },
    "ratio": 2.5574243338655274
  },
  {
    "coin": "Stellar",
    "mcap": {
      "val": 11276782565.638206,
      "wma": 11257018337.540487
    },
    "ratio": 2.590637127202564
  },
  {
    "coin": "Filecoin",
    "mcap": {
      "val": 10311961708.085901,
      "wma": 10296529256.303457
    },
    "ratio": 2.477652114838109
  },
  {
    "coin": "TRON",
    "mcap": {
      "val": 8716739553.089334,
      "wma": 8657381606.53119
    },
    "ratio": 2.2718945985824326
  },
  {
    "coin": "Wrapped Bitcoin",
    "mcap": {
      "val": 8602248996.223707,
      "wma": 8420386882.47087
    },
    "ratio": 2.2405824064592363
  },
  {
    "coin": "Monero",
    "mcap": {
      "val": 7455254633.593193,
      "wma": 7308863228.308366
    },
    "ratio": 2.087467948495002
  },
  {
    "coin": "Terra",
    "mcap": {
      "val": 6511159828.725867,
      "wma": 6641367962.660892
    },
    "ratio": 1.9898652596174156
  }
]
  ```
</details>
<details>
  <summary>04/28/2021 - Using 30 markets, a 3-day weighted moving average and excluding stable coins</summary>

```json
[
  {
    "coin": "Bitcoin",
    "mcap": {
      "val": 1025644066184.0684,
      "wma": 1025633622626.3911
    },
    "ratio": 20.746497194288978
  },
  {
    "coin": "Ethereum",
    "mcap": {
      "val": 315084938197.799,
      "wma": 314349626704.8644
    },
    "ratio": 11.485638187823188
  },
  {
    "coin": "Binance Coin",
    "mcap": {
      "val": 88221126493.15309,
      "wma": 87611628044.4702
    },
    "ratio": 6.063585869354847
  },
  {
    "coin": "XRP",
    "mcap": {
      "val": 61840234264.56233,
      "wma": 62565326959.31512
    },
    "ratio": 5.124075451899311
  },
  {
    "coin": "Cardano",
    "mcap": {
      "val": 42362634264.262665,
      "wma": 42388047822.65433
    },
    "ratio": 4.217648325066966
  },
  {
    "coin": "Dogecoin",
    "mcap": {
      "val": 40746573310.151566,
      "wma": 40146556485.08828
    },
    "ratio": 4.104618582519105
  },
  {
    "coin": "Polkadot",
    "mcap": {
      "val": 33221790454.42623,
      "wma": 33446852169.66301
    },
    "ratio": 3.7465047037067323
  },
  {
    "coin": "Uniswap",
    "mcap": {
      "val": 22264779673.415836,
      "wma": 21898419033.5134
    },
    "ratio": 3.031482306598101
  },
  {
    "coin": "Litecoin",
    "mcap": {
      "val": 17079008926.402807,
      "wma": 17182724786.927563
    },
    "ratio": 2.685311513443084
  },
  {
    "coin": "Bitcoin Cash",
    "mcap": {
      "val": 16790123163.341642,
      "wma": 16819700030.23953
    },
    "ratio": 2.6567933767890635
  },
  {
    "coin": "Chainlink",
    "mcap": {
      "val": 15047889870.601728,
      "wma": 15187094292.3712
    },
    "ratio": 2.524561771326857
  },
  {
    "coin": "VeChain",
    "mcap": {
      "val": 12848685947.158463,
      "wma": 13022823553.676321
    },
    "ratio": 2.3377670602937974
  },
  {
    "coin": "Solana",
    "mcap": {
      "val": 12152902164.93957,
      "wma": 12085554156.505957
    },
    "ratio": 2.2520702899323273
  },
  {
    "coin": "Theta Network",
    "mcap": {
      "val": 11289308526.54297,
      "wma": 11189054504.35866
    },
    "ratio": 2.166932341871507
  },
  {
    "coin": "Stellar",
    "mcap": {
      "val": 11259655268.889393,
      "wma": 11379978593.782011
    },
    "ratio": 2.1853418334832857
  },
  {
    "coin": "Filecoin",
    "mcap": {
      "val": 10307810014.417294,
      "wma": 10342686857.085432
    },
    "ratio": 2.0833649085426247
  },
  {
    "coin": "TRON",
    "mcap": {
      "val": 8698540589.004366,
      "wma": 8784191977.129929
    },
    "ratio": 1.919992650055929
  },
  {
    "coin": "Wrapped Bitcoin",
    "mcap": {
      "val": 8627483377.462942,
      "wma": 8611043220.01061
    },
    "ratio": 1.9009755950011376
  },
  {
    "coin": "Monero",
    "mcap": {
      "val": 7446660812.179367,
      "wma": 7424938912.92233
    },
    "ratio": 1.7652047983826067
  },
  {
    "coin": "Terra",
    "mcap": {
      "val": 6508846182.676813,
      "wma": 6608806366.252656
    },
    "ratio": 1.6653678280724233
  },
  {
    "coin": "NEO",
    "mcap": {
      "val": 6317274274.404011,
      "wma": 6415403733.627693
    },
    "ratio": 1.6408189123252481
  },
  {
    "coin": "PancakeSwap",
    "mcap": {
      "val": 6034911622.340301,
      "wma": 5872867572.815389
    },
    "ratio": 1.5699064034068793
  },
  {
    "coin": "Klaytn",
    "mcap": {
      "val": 5962652513.013225,
      "wma": 6193468759.020276
    },
    "ratio": 1.6121878078912042
  },
  {
    "coin": "IOTA",
    "mcap": {
      "val": 5949312231.9714985,
      "wma": 5923369770.998792
    },
    "ratio": 1.576641955275012
  },
  {
    "coin": "Aave",
    "mcap": {
      "val": 5756329638.776805,
      "wma": 5751651555.112689
    },
    "ratio": 1.5536204916985055
  },
  {
    "coin": "EOS",
    "mcap": {
      "val": 5604573011.258431,
      "wma": 5660183973.854615
    },
    "ratio": 1.5412174960995073
  },
  {
    "coin": "Cosmos",
    "mcap": {
      "val": 5336036589.510163,
      "wma": 5407510054.190747
    },
    "ratio": 1.5064243417009748
  },
  {
    "coin": "Bitcoin SV",
    "mcap": {
      "val": 5305641626.200697,
      "wma": 5350556217.680954
    },
    "ratio": 1.498470241509879
  },
  {
    "coin": "Crypto.com Coin",
    "mcap": {
      "val": 4749637888.191669,
      "wma": 4828010488.484363
    },
    "ratio": 1.4234190024599125
  },
  {
    "coin": "BitTorrent",
    "mcap": {
      "val": 4691001404.416755,
      "wma": 4761353414.13883
    },
    "ratio": 1.4135587591810015
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
