import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import Title from "./common/Title";

const COLORS = [
  "#613f98",
  "#66110c",
  "#6da6e0",
  "#822922",
  "#b0e65d",
  "#11d607",
  "#fc9b9e",
  "#260531",
  "#45fcdd",
  "#3dc944",
];

function ColorSwatches() {
  const selectedColor = useStoreState((store) => store.color);
  const setSelectedColor = useStoreActions((actions) => actions.setColor);

  return (
    <div className="">
      <Title>Color</Title>
      <div className="flex flex-wrap gap-2 max-w-sm">
        {COLORS.map((color) => (
          <ColorSwatch
            color={color}
            selected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

function ColorSwatch({ color, selected, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.05 }}
      className={`border shadow cursor-pointer border-zinc-700 p-3 px-5 rounded flex-1 flex align-center justify-center ${
        selected ? "bg-zinc-700" : "bg-zinc-900"
      }`}
      onClick={onClick}
    >
      <div
        className="rounded-full w-5 h-5"
        style={{ backgroundColor: color }}
      ></div>
    </motion.div>
  );
}

export default ColorSwatches;
