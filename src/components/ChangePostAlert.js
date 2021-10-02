import FormButton from './FormButton';

const ChangePostAlert = ({ alertText, toggleAlert, submitFn }) => {
  return (
    <div className="absolute left-0 top-0 z-50 flex justify-center items-start h-screen w-screen bg-black bg-opacity-75">
      <div className="h-52 w-104 mt-64 bg-white flex items-center flex-col rounded">
        <h3 className="text-gray-600 mt-16 mb-12 font-semibold">
          Are you sure you want to {alertText} your post?
        </h3>
        <div className="space-x-28">
          <FormButton
            clickFn={submitFn}
            text="Confirm"
            color="amber"
          />
          <FormButton
            clickFn={toggleAlert}
            text="Return"
            outline={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePostAlert;
