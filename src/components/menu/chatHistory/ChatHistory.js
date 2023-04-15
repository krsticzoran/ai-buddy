import NewChat from "../newChat/NewChat";
import "./chat-history.css";

const myDummyArray = [
  "conversation 1",
  "conversation 2",
  "some conv",
  "english translate",
  "chat",
  "advice",
  "javascript",
  "react",
  "java",
  "html",
  "css",
  "advice",
  "happy new year",
];

const ChatHistory = () => {
  return (
    <div className="chat-history px-3">
      <NewChat></NewChat>
      {myDummyArray.map((chat, index) => (
        <button
          key={index}
          className="button-history btn text-start rounded-lg text-decoration-none w-100"
        >
          <i class="fa-regular fa-message me-2"></i>
          <span className="me-2">{chat}</span>
        </button>
      ))}
    </div>
  );
};

export default ChatHistory;
