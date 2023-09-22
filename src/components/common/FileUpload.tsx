import Image from "next/image";

interface FileProp {
  label: string;
}
export const FileUpload = ({ label }: FileProp) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <div className="flex rounded-xl border border-dashed p-4 w-[200px] justify-center">
        <input type="file"  hidden/>
        <span className="flex gap-2 text-center items-center">
            <Image src='/Icon.png' width={20} height={20} alt="upload"/>
            <h2>Upload Images</h2>
        </span>
      </div>
    </div>
  );
};
