  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import { WalletProvider } from "@react-dapp/wallet";

  ReactDOM.render(
    <React.StrictMode>
      <WalletProvider config={{
        chainId: 56,
        supportedChainIds: [56],
        wrappedNative: {
          address: '',
          symbol: 'WBNB'
        },
        usd: {
          address: '',
          symbol: 'BUSD'
        },
        nativeUsdLp: {
          address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
          symbol: ''
        }
      }}>
        <App />
      </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
    );
