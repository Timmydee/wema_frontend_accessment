import { FC, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import FileIcon from "../../assets/file.svg";
import Upload from "../../assets/upload.webp";

interface FileUploadProps {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

const FileUpload: FC<FileUploadProps> = ({ label, id, register, error }) => {
  const [preview, setPreview] = useState<string | null>(null);

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); 
      register.onChange({ target: { name: register.name, value: file } }); // ✅ Update React Hook Form
    }
  };

  return (
    <div className="mt-4">
      <label
        htmlFor={id}
        className="block text-secondary font-medium text-[14px]"
      >
        {label}
      </label>

      <div className="flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-md p-4 mt-1 w-full h-[180px] relative">
        {preview ? (
          <img
            src={preview}
            alt="Uploaded Preview"
            className="w-full h-full object-cover rounded-md bg-blue-500"
          />
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <img
              src={Upload}
              alt="Upload Business Logo"
              className="w-10 h-9 inline-block mr-2"
            />
            <span className="text-[#1A141F] text-[12px] font-normal font-poppins">
              Drag here or click the button below to upload
            </span>
            <div className="flex items-center space-x-2 cursor-pointer bg-[#039BF0] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
              <img src={FileIcon} alt="upload image" />
              <label htmlFor={id} className="">
                Choose File
              </label>
              <input
                id={id}
                type="file"
                accept="image/*"
                {...register}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <span className="text-[#4B3A5A] text-[14px] font-poppins">
              Maximum upload size: 10MB (.jpg)
            </span>
          </div>
        )}

        {preview && (
          <div className="absolute bottom-3">
            <label
              htmlFor={id}
              className="cursor-pointer bg-[#039BF0] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Change File
            </label>
            <input
              id={id}
              type="file"
              accept="image/*"
              {...register}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FileUpload;
