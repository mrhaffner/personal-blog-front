const FormButton = ({ clickFn, color, text, outline }) => {
  let style = `px-5 py-2 bg-${color || 'gray'}-500 hover:bg-${
    color || 'gray'
  }-600 active:bg-${
    color || 'gray'
  }-700 rounded-full text-white font-bold text-l tracking-wide focus:outline-none`;
  if (outline) {
    style = `px-5 py-1 border-2 border-${
      color || 'gray'
    }-400 hover:border-${color || 'gray'}-500 active:bg-${
      color || 'gray'
    }-100 rounded-full text-${color || 'gray'}-400 hover:text-${
      color || 'gray'
    }-500 font-semibold text-l focus:outline-none`;
  }
  return (
    <button type="button" onClick={clickFn} className={style}>
      {text}
    </button>
  );
};

export default FormButton;
