import Account from "../account/accountContainer/Account";
import TopMenu from "../topMenu/TopMenu";

import ChatHistory from "../chatHistory/ChatHistory";
import "./menu-container.css";

const MenuContainer = () => {
  return (
    <div className="container-style">
      <TopMenu></TopMenu>

      <ChatHistory></ChatHistory>

      <Account></Account>
    </div>
  );
};

export default MenuContainer;
