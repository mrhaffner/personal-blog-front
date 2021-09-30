const TitleInput = ({ text, placeholder, changeFn }) => (
  <div className="space-y-1">
    <label htmlFor={text}>{text}</label>
    <input
      type="text"
      onChange={changeFn}
      placeholder={placeholder}
      className="border-b-2 pr-12 block focus:outline-none w-128"
    />
  </div>
);

export default TitleInput;
