import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import Title from "./common/Title";

export const SIZES = [
  {
    name: "M",
    scale: 2,
  },
  {
    name: "L",
    scale: 3,
  },
  {
    name: "XL",
    scale: 4,
  },
];

function SizeSelector() {
  const selectedSizeIndex = useStoreState((store) => store.size);
  const setSelectedSizeIndex = useStoreActions((actions) => actions.setSize);

  return (
    <div className="">
      <Title>Size</Title>
      <div className="flex flex-wrap gap-2 max-w-sm">
        {SIZES.map((size, index) => (
          <SizeSwatch
            {...size}
            selected={selectedSizeIndex === index}
            onClick={() => setSelectedSizeIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function SizeSwatch({ name, selected, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.05 }}
      className={`border shadow cursor-pointer border-zinc-700 flex-1 p-2 px-4 rounded flex align-center justify-center ${
        selected ? "bg-zinc-700" : "bg-zinc-900"
      }`}
      onClick={onClick}
    >
      <span
        className={`font-bold ${selected ? "text-white" : "text-zinc-500"}`}
      >
        {name}
      </span>
    </motion.div>
  );
}

export default SizeSelector;
