const ChangePostAlert = ({ alertText, toggleAlert, submitFn }) => {
  return (
    <div className="absolute left-0 top-0 z-50 flex justify-center items-start h-screen w-screen bg-black bg-opacity-75">
      <div className="h-48 w-96 mt-64 bg-white flex justify-center items-center flex-col rounded">
        <h3>Are you sure you want to {alertText} your post?</h3>
        <div className="">
          <button onClick={submitFn} className="">
            Confirm
          </button>
          <button onClick={toggleAlert} className="">
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePostAlert;
