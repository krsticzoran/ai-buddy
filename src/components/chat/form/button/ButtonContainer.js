const ButtonContainer = (props) => {
  return (
    <div
      className=" position-absolute top-50 end-0 translate-middle-y"
      style={{ zIndex: "999" }}
    >
      {props.children}
    </div>
  );
};

export default ButtonContainer;
