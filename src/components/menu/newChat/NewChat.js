import "./new-chat.css";

const NewChat = () => {
  return (
    <div className="new-chat-padding">
      <button className="new-chat btn text-start rounded-lg text-decoration-none w-100 ">
        <i className="fa-solid fa-plus me-2"></i>
        <span>New chat</span>
      </button>
    </div>
  );
};

export default NewChat;
