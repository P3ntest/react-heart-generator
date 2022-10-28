import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import Title from "./common/Title";

const COLORS = [
  "#be123c",
  "#c026d3",
  "#7c3aed",
  "#2563eb",
  "#0891b2",
  "#059669",
  "#65a30d",
  "#ca8a04",
  "#ea580c",
  "#dc2626",
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
