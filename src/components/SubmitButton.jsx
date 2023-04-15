import "./SubmitButton.css";
function SubmitButton({ buttonID, buttonClass, buttonType, children }) {
  return (
    <>
      <button type={buttonType} className={buttonClass}>
        {children}
      </button>
    </>
  );
}

export default SubmitButton;
