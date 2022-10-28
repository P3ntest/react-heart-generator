import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import Title from "./common/Title";

function SymbolEditor() {
  const currentSymbol = useStoreState((store) => store.symbol);
  const setSymbol = useStoreActions((store) => store.setSymbol);

  return (
    <div className="">
      <Title>Symbol</Title>
      <motion.input
        // whileHover={{ scale: 1.15 }}
        // whileTap={{ scale: 1.05 }}
        className="border shadow border-zinc-700 p-2 px-4 rounded bg-zinc-900 outline-none text-white font-bold"
        placeholder="Heart Symbol"
        type="text"
        value={currentSymbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
    </div>
  );
}

export default SymbolEditor;
