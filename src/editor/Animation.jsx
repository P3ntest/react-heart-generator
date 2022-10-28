import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import Title from "./common/Title";

export const ANIMATIONS = [
  {
    name: "None",
    animation: "",
  },
  {
    name: "Rotating",
    animation: "animation-rotate",
  },
  {
    name: "Pulsing",
    animation: "animation-pulse",
  },
];

function AnimationSelector() {
  const selectedAnimationIndex = useStoreState((store) => store.animation);
  const setSelectedAnimationIndex = useStoreActions(
    (actions) => actions.setAnimation
  );

  return (
    <div className="">
      <Title>Animation</Title>
      <div className="flex flex-wrap gap-2 max-w-sm">
        {ANIMATIONS.map((animation, index) => (
          <AnimationSwatch
            {...animation}
            selected={selectedAnimationIndex === index}
            onClick={() => setSelectedAnimationIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function AnimationSwatch({ name, selected, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.05 }}
      className={`border shadow cursor-pointer border-zinc-700 p-2 px-4 rounded flex align-center justify-center ${
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

export default AnimationSelector;
