const TitleInput = ({ text, placeholder, changeFn }) => (
  <div className="space-y-1">
    <label
      htmlFor={text}
      className="font-semibold text-gray-600 tracking-wide"
    >
      {text}
    </label>
    <input
      type="text"
      onChange={changeFn}
      placeholder={placeholder}
      className="border-b-2 focus:border-gray-400 pr-12 block focus:outline-none w-128"
    />
  </div>
);

export default TitleInput;
