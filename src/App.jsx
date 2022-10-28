import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import Heart from "./heart/Heart";
import "./App.css";
import ColorSwatches from "./editor/Colors";
import AnimationSelector from "./editor/Animation";
import SymbolEditor from "./editor/Text";
import MessageEditor from "./editor/Message";
import SizeSelector from "./editor/Size";

function App() {
  return (
    <div>
      <main className="bg-zinc-900 h-screen flex flex-row p-16">
        <Editor />
        <Heart />
      </main>
      <div className="absolute right-0 bottom-0 text-zinc-600 text-sm p-2 font-bold">
        Created by Julius van Voorden
      </div>
    </div>
  );
}
function Editor() {
  return (
    <div className="border border-zinc-700 rounded bg-zinc-800 p-8 space-y-5">
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

export default App;
