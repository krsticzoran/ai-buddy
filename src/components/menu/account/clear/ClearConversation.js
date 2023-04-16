import "./clear-conversation.css";
const ClearCoversation = () => {
  return (
    <button className="clear btn text-start  rounded-lg text-decoration-none w-100 ">
      <i className="fa-solid fa-trash-can me-2"></i>
      <span>Clear conversations</span>
    </button>
  );
};
export default ClearCoversation;
