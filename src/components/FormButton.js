const FormButton = ({ clickFn, color, text }) => {
  const style = `px-5 py-2 bg-${color}-500 hover:bg-${color}-600 active:bg-${color}-700 rounded-full text-white font-bold text-l tracking-wide focus:outline-none`;
  return (
    <button type="button" onClick={clickFn} className={style}>
      {text}
    </button>
  );
};

export default FormButton;
