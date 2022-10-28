import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import { ANIMATIONS } from "../editor/Animation";
import { SIZES } from "../editor/Size";
import "./Heart.css";

function Heart() {
  const color = useStoreState((state) => state.color);
  const symbol = useStoreState((state) => state.symbol);
  const message = useStoreState((state) => state.message);
  const scale = SIZES[useStoreState((state) => state.size)].scale;

  const animationClass =
    ANIMATIONS[useStoreState((state) => state.animation)].animation;

  const symbolLength = symbol.trim().length;

  return (
    <motion.div
      layout
      className="w-full flex-1 flex flex-col items-center justify-center space-y-6"
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 1.05 }}
        drag
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
      >
        <div className={animationClass}>
          <motion.div className="relative" animate={{ scale: 1, color }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100 * scale}
              height={100 * scale}
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            <motion.div
              className="absolute text-white font-black min-w-max"
              style={{
                left: "50%",
                top: "10%",
                transform: "translateX(-50%)",
                fontSize: (250 / (symbolLength + 4)) * scale,
              }}
            >
              {symbol}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className="text-white font-bold text-center max-w-xs text-2xl">
        {message}
      </div>
    </motion.div>
  );
}

export default Heart;
