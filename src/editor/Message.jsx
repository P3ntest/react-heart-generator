import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import Title from "./common/Title";

function MessageEditor() {
  const currentMessage = useStoreState((store) => store.message);
  const setMessage = useStoreActions((store) => store.setMessage);

  return (
    <div className="">
      <Title>Message</Title>
      <textarea
        className="border shadow border-zinc-700 p-2 px-4 rounded bg-zinc-900 outline-none text-white font-bold w-full"
        placeholder="Personalized Message"
        type="text"
        value={currentMessage}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}

export default MessageEditor;
