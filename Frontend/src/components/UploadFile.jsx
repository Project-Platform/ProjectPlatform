import { FileUpload } from "material-tailwind";

function UploadButton() {
  const handleFileUpload = (files) => {
    // Handle the uploaded files
    console.log(files);
  };

  return (
    <FileUpload
      color="lightBlue"
      buttonType="filled"
      buttonText="Upload File"
      buttonProps={{
        className: "rounded-full",
      }}
      onChange={handleFileUpload}
    />
  );
}

export default UploadButton;
