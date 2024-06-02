import { Box } from "@chakra-ui/react";
import "./App.css";
import { Event } from "./components/Event";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { HeroBanner } from "./components/HeroBanner";
import { Introduction } from "./components/Introduction";
import { RoadMapSection } from "./components/RoadMapSection";
import { Tokenomics } from "./components/Tokenomics";
import { Web3ModalProvider } from "./wallet/WalletConnect";
import Timer from "./components/Timer";

function App() {
  return (
    <Web3ModalProvider>

    <Box>
      <HeroBanner />
      <Introduction />
      <Event />
      <Tokenomics />
      <RoadMapSection />
      <FAQ />
      <Footer />
      <Timer/>
    </Box>
    </Web3ModalProvider>
  );
}

export default App;
