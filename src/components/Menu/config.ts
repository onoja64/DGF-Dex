import { MenuEntry } from '@onoja64/dgfkit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.dogefarmer.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  
  {
    label: 'Chart',
    icon: 'PoolIcon',
    href: 'https://www.poochat.com/dogefarmer'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap (Coming soon)',
        href: 'https://pancakeswap.info/token/0x00',
      },
      {
        label: 'CoinMarketCap (Coming Soon)',
        href: 'https://coinmarketcap.com/currencies/DogeFarmer/',
      },
      {
        label: 'CoinGecko (Coming soon)',
        href: 'https://www.coingecko.com/en/coins/DogeFarmer',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://dogefarmer.finance/DogeFarmer/",
      },
      {
        label: "Docs",
        href: "https://dogefarmer.finance/#documents",
      },
      {
        label: "Blog",
        href: "https://dogefarmer.finance/",
      },
    ],
  },
  {
    label: 'Audit by Hacken (Coming soon)',
    icon: 'HelmetIcon',
    href: 'https://www.dogefarmer.finance/files/HackenAudit.pdf',
  },
]

export default config

export default config
