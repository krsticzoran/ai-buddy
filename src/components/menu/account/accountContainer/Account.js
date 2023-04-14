import Logout from "../logout/Logout.js";
import ClearCoversation from "../clear/ClearConversation.js";
import "./account.css";

const Account = () => {
  return (
    <div className="account ">
      <ClearCoversation></ClearCoversation>
      <Logout></Logout>
    </div>
  );
};

export default Account;
