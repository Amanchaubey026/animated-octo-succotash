import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WagmiProvider, defaultWagmiConfig, createWeb3Modal } from 'wagmi'; // Import createWeb3Modal
import { ChakraProvider } from "@chakra-ui/react";
import { mainnet } from 'wagmi/chains';

const projectId = "608984d00734f1c6953ba992e11bd913";

const chains = [mainnet];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata:{
    name:"test"  
  }
});

// Assuming createWeb3Modal returns something you need to use
const web3Modal = createWeb3Modal({
  chains,
  wagmiConfig: config,
  projectId,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiProvider config={config}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </WagmiProvider>
);
