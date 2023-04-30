export type FolderData = {
  title: string;
  links: {
    label: string;
    url: string;
  }[];
};

const data: FolderData[] = [
  {
    title: "Vite Basics",
    links: [
      { label: "Vite Website", url: "https://vite.org" },
      {
        label: "Vite White Paper",
        url: "https://github.com/vitelabs/whitepaper",
      },
      {
        label: "ViteBridge White Paper",
        url: "https://docs.vite.org/go-vite/bridge/ViteBridge.html",
      },
      { label: "Full Documentation", url: "https://docs.vite.org" },
    ],
  },
  {
    title: "Block Explorers",
    links: [
      { label: "ViteScan", url: "https://vitescan.io" },
      {
        label: "ViteView",
        url: "https://viteview.flex justify-center items-centerz",
      },
      { label: "ViteTools", url: "https://vitetxs.de" },
      { label: "VITCScan", url: "https://vitcscan.com/" },
    ],
  },
  {
    title: "Vite Wallets",
    links: [
      { label: "Official Web Wallet", url: "https://vite.net" },
      {
        label: "Official Android Wallet",
        url: "https://play.google.com/store/apps/details?id=net.vite.wallet",
      },
      {
        label: "Official iOS Wallet",
        url: "https://apps.apple.com/us/app/vite-multi-chain-wallet/id1437629486",
      },
      {
        label: "Official Desktop Wallet (Mac/Windows)",
        url: "https://github.com/vitelabs/vite-wallet/releases",
      },
      {
        label: "Official Ledger Integration",
        url: "https://docs.vite.org/go-vite/tutorial/ledger-install.html",
      },
      {
        label: "Vite Passport Browser Wallet Extension",
        url: "https://chrome.google.com/webstore/detail/vite-passport/eckbjklobbepbbcklkjjgkkkpdakglmf",
      },
      {
        label: "Viterium Wallet",
        url: "https://viterium.io/",
      },
    ],
  },
  {
    title: "DEXes",
    links: [
      { label: "ViteX Homepage", url: "https://vitex.net" },
      { label: "ViteX Dashboard", url: "https://x.vite.net" },
      {
        label: "ViteX Help Center",
        url: "https://vitex.zendesk.com/hc/en-001",
      },
      { label: "ViteX Twitter", url: "https://twitter.com/ViteXExchange" },
      {
        label: "Uniswap",
        url: "https://app.uniswap.org/#/swap?inputCurrency=0xadd5e881984783dd432f80381fb52f45b53f3e70&outputCurrency=0xdac17f958d2ee523a2206206994597c13d831ec7",
      },
      {
        label: "SushiSwap",
        url: "https://app.sushi.com/swap",
      },
      {
        label: "1inch",
        url: "https://app.1inch.io/#/1/swap/USDT/VITE",
      },
      {
        label: "PancakeSwap",
        url: "https://pancakeswap.finance/swap#/swap?outputCurrency=0x2794dad4077602ed25a88d03781528d1637898b4",
      },
      {
        label: "VITCSwap",
        url: "https://swap.vitc.org/#/app/swap?from=80f3751485e4e8345605&to=5649544520544f4b454e",
      },
    ],
  },
  {
    title: "Dapps",
    links: [
      // { label: '', url: '' },
      { label: "ViteBridge", url: "https://bridge-buidl.vite.net/" },
      { label: "Viva staking pools", url: "https://www.vivafi.org/" },
      { label: "BeefStake", url: "https://stake.vitc.org/" },
      {
        label: "Vite Quota Bank",
        url: "https://niklr.github.io/vite-quota-bank",
      },
      {
        label: "Vite Quota GitHub",
        url: "https://github.com/niklr/vite-quota-bank",
      },
      { label: "Immutable Notes", url: "https://immutablenotes.com" },
      {
        label: "Immutable Notes GitHub",
        url: "https://github.com/ImmutableNotes",
      },
      {
        label: "ViteTogether Twitter",
        url: "https://twitter.com/ViteTogether",
      },
    ],
  },
  {
    title: "CEXes",
    links: [
      { label: "Binance", url: "https://www.binance.com/en/trade/VITE_BTC" },
      {
        label: "Okex",
        url: "https://www.okex.com/spot/trade#product=vite_btc",
      },
      {
        label: "Bittrex",
        url: "https://international.bittrex.com/Market/Index?MarketName=BTC-VITE",
      },
      { label: "CoinEx", url: "https://www.coinex.com/exchange/VITE-USDT" },
      { label: "WazirX", url: "https://wazirx.com/exchange/VITE-INR" },
    ],
  },
  {
    title: "Tutorials",
    links: [
      {
        label: "User Guides and Tutorials",
        url: "https://forum.vite.net/category/95/user-guides-tutorials",
      },
      {
        label: "Solidity++ Lessons playlist",
        url: "https://www.youtube.com/playlist?list=PLqCYIDb3UQEnxhXui0v0T7PCxEoPLiL9h",
      },
      {
        label: "dApp Development Workshop part 1/3 — Solidity++",
        url: "https://weserickson.medium.com/dapp-development-workshop-part-1-3-solidity-32d58d3fca3b",
      },
      {
        label: "Zero to One DApp Development Guide on Vite",
        url: "https://forum.vite.net/topic/2422/zero-to-one-dapp-development-guide-on-vite",
      },
    ],
  },

  {
    title: "Node Operation",
    links: [
      {
        label: "Official Node Implementation",
        url: "https://github.com/vitelabs/go-vite",
      },
      {
        label: "Guide for Full Node Operation",
        url: "https://docs.vite.org/go-vite/tutorial/node/install.html",
      },
      {
        label: "Guide for Operating an SBP Node",
        url: "https://vite.org/superNodes",
      },
      {
        label: "Full Node Online Check",
        url: "http://www.ekte.pl/greedy/v03/index.php",
      },
      {
        label: "PoW Integration for Nodes",
        url: "https://github.com/vitelabs/pow-gpu",
      },
    ],
  },

  {
    title: "Development Libraries",
    links: [
      { label: "Vite.js", url: "https://docs.vite.org/vite.js" },
      { label: "ViteJ", url: "https://github.com/vitelabs/vitej" },
      {
        label: "VSCode Solidity++ Extension",
        url: "https://marketplace.visualstudio.com/items?itemName=ViteLabs.soliditypp",
      },
      {
        label: "ViteConnect Server",
        url: "https://github.com/vitelabs/vite-connect-server",
      },
      {
        label: "ViteConnect Client (@vite/connector)",
        url: "https://github.com/vitelabs/vite-connect-client",
      },
      {
        label: "vite-utils (Python)",
        url: "https://github.com/vitelabs/vite-utils",
      },
    ],
  },
  {
    title: "Faucets",
    links: [
      {
        label: "ViteTokens Faucet",
        url: "https://vitetokens.cc/index.html",
      },
      {
        label: "ViNo Discord and Vite Faucet",
        url: "https://discord.com/invite/MMS7Wa6c94",
      },
      {
        label: "Vite Testnet Faucet",
        url: "https://vitefaucet.flex justify-center items-centerz/",
      },
      { label: "Vitamin Coin Faucet", url: "https://vitaminfaucet.com" },
      { label: "ViteTipBot", url: "https://twitter.com/ViteTipBot" },
      { label: "TipbotVite", url: "https://twitter.com/tipbotvite" },
      { label: "Vitamin Coin Tipbot", url: "https://twitter.com/vitctipbot" },
      { label: "Vite Spot Faucet", url: "https://faucet.vitespot.com" },
    ],
  },
  {
    title: "Community Organizations",
    links: [
      { label: "ViteTools", url: "https://twitter.com/vitetools" },
      { label: "ViNo", url: "https://twitter.com/nanogateorg" },
      { label: "Vitamin Coin", url: "https://www.vitamincoin.org" },
      { label: "Vgate", url: "https://vgate.io" },
      {
        label: "ExperimentDAO | eDAO",
        url: "https://twitter.com/ExperimentDAO",
      },
      { label: "Vite&News", url: "https://twitter.com/vite_news" },
      { label: "VITA INU", url: "https://twitter.com/VitaInuCoin" },
      { label: "VitePunks", url: "https://twitter.com/VitePunks" },
      { label: "Vitoge", url: "https://twitter.com/Vitoge_official" },
      { label: "ViCat", url: "https://twitter.com/ViCat_777" },
    ],
  },
  {
    title: "Community-made Projects",
    links: [
      {
        label: "Vite Node Bot",
        url: "https://github.com/ViNo-community/vite-node-bot",
      },
      {
        label: "Vite Payment Frontend",
        url: "https://github.com/vaibhavgeek/vitepay",
      },
      {
        label: "VitaBot, VitC/Vite Discord tipbot",
        url: "https://github.com/JeanOUINA/VitaBot",
      },
      {
        label: "Vite Explorer",
        url: "https://github.com/staikosi/explorer-vite",
      },
      { label: "vite scripts", url: "https://github.com/theMoe/vite" },
      { label: "ViteScan", url: "https://github.com/yandong3389/vitescan" },
      { label: "rosetta-vite", url: "https://github.com/azbuky/rosetta-vite" },
    ],
  },
  {
    title: "ViteX Integrations",
    links: [
      {
        label: "ViteX API",
        url: "https://docs.vite.org/go-vite/dex/api/gate.html",
      },
      {
        label: "ViteX Hummingbot integration",
        url: "https://github.com/vitelabs/hummingbot/tree/feat/vitex-connector",
      },
      {
        label: "ViteX Python API integration (community created)",
        url: "https://pypi.org/project/vitex-api",
      },
    ],
  },
  {
    title: "Vite Labs Telegram",
    links: [
      { label: "ViteX", url: "https://t.me/vitexexchange" },
      { label: "English", url: "https://t.me/vite_en" },
      { label: "Chinese", url: "https://t.me/vite_zh" },
      { label: "Russian", url: "https://t.me/vite_russian" },
      { label: "Japanese", url: "https://t.me/vite_japanese" },
      { label: "Vietnamese", url: "https://t.me/vite_vietnamese" },
      { label: "Arabic", url: "https://t.me/vite_arabic" },
      { label: "German", url: "https://t.me/vite_german" },
      { label: "Turkish", url: "https://t.me/vite_turkish" },
      { label: "Indonesian", url: "https://t.me/vite_indonesian" },
      { label: "Portuguese", url: "https://t.me/vite_portuguese" },
      { label: "Filipino", url: "https://t.me/vite_filipino" },
      { label: "French", url: "https://t.me/vite_french" },
      { label: "Spanish", url: "https://t.me/vitespanish" },
      { label: "Indian", url: "https://t.me/Vite_India" },
    ],
  },
  {
    title: "Vite Labs Social Media",
    links: [
      { label: "Twitter", url: "https://twitter.com/vitelabs" },
      {
        label: "Vite Discord Development Channel",
        url: "https://discord.com/channels/425843004616474635/425844259745300481",
      },
      { label: "Forum", url: "https://forum.vite.net" },
      { label: "Reddit", url: "https://www.reddit.com/r/vitelabs" },
      { label: "Discord", url: "https://discordapp.com/invite/CsVY76q" },
      { label: "Facebook", url: "https://www.facebook.com/vitelabs" },
      { label: "Instagram", url: "https://www.instagram.com/vite.labs" },
      {
        label: "YouTube",
        url: "https://www.youtube.com/c/vitelabsofficialchannel",
      },
      {
        label: "Korean Kakao Community",
        url: "https://open.kakao.com/o/gWp9av5c",
      },
      { label: "Medium", url: "https://medium.com/vitelabs" },
      { label: "Store", url: "https://global.vite.store" },
      { label: "Türkiye", url: "https://twitter.com/TurkeyVite" },
      { label: "Vietnam", url: "https://twitter.com/vite_vietnamese" },
      { label: "Español", url: "https://twitter.com/Vite_Spanish" },
      { label: "العربية", url: "https://twitter.com/Vite_LabsArabic" },
      { label: "Vite India", url: "https://twitter.com/vite_india" },
      { label: "Vite Korea", url: "https://twitter.com/vite_korea" },
    ],
  },
];

export default data;
