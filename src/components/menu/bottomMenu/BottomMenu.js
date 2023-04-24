import Logout from "./logout/Logout.js";
import ClearCoversation from "./clear/ClearConversation.js";
import "./bottom-menu.css";

const Account = () => {
  return (
    <div className="account px-3">
      <div className="account-border">
        <ClearCoversation></ClearCoversation>
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Account;
