import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import Heart from "./heart/Heart";
import "./App.css";
import ColorSwatches from "./editor/Colors";
import AnimationSelector from "./editor/Animation";
import SymbolEditor from "./editor/Text";
import MessageEditor from "./editor/Message";
import SizeSelector from "./editor/Size";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [editorOpen, setEditorOpen] = useState(true);

  const editor = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };

  const editorButton = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
      y: "-100%",
    },
  };

  return (
    <div>
      <motion.div className="bg-zinc-900 h-screen flex flex-row p-16 relative">
        <motion.div
          className="h-full"
          variants={editor}
          animate={editorOpen ? "open" : "closed"}
          style={{ position: editorOpen ? "" : "fixed" }}
        >
          <Editor onClose={() => setEditorOpen(false)} />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 p-5 cursor-pointer"
          onClick={() => setEditorOpen(true)}
          variants={editorButton}
          animate={editorOpen ? "open" : "closed"}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.05 }}
            className="rounded-full bg-zinc-800 p-2 px-4 text-zinc-300 uppercase font-bold"
          >
            Edit
          </motion.div>
        </motion.div>
        <Heart />
      </motion.div>
      <div className="absolute right-0 bottom-0 text-zinc-600 text-sm p-2 font-bold">
        Created by Julius van Voorden
      </div>
    </div>
  );
}
function Editor({ onClose }) {
  return (
    <div className="h-full border border-zinc-700 rounded bg-zinc-800 p-8 space-y-5 relative">
      <CloseButton onClose={onClose} />
      <h1 className="text-4xl font-black gradient-title text-center pb-5">
        Heart Generator
      </h1>
      <ColorSwatches />
      <AnimationSelector />
      <SizeSelector />
      <SymbolEditor />
      <MessageEditor />
    </div>
  );
}

function CloseButton({ onClose }) {
  return (
    <motion.div
      onClick={onClose}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.05 }}
      className="absolute right-0 top-0 text-zinc-400 p-4 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="15"
        width="15"
        fill="currentColor"
        viewBox="0 0 329.26933 329"
      >
        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
      </svg>
    </motion.div>
  );
}

export default App;
