import Account from "../account/accountContainer/Account";
import Title from "../title/Title";

import ChatHistory from "../chatHistory/ChatHistory";
import "./menu-container.css";

const MenuContainer = () => {
  return (
    <div className="container-style">
      <Title></Title>

      <ChatHistory></ChatHistory>

      <Account></Account>
    </div>
  );
};

export default MenuContainer;
