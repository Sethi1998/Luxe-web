import Image from "next/image";
export const Notifications = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl lg:text-4xl font-semibold">Notifications</h2>
      <div className="flex justify-between items-center mt-8 border-b border-t cursor-pointer p-4 hover:bg-gray-100">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <Image
            src="/img/Mercedes1.png"
            width={30}
            height={30}
            alt="profile"
            className="w-20 h-20 object-cover rounded-full"
          />
          <div>
            <h2 className="font-semibold">New Message</h2>
            <p>Ojomo has send you a message Please check</p>
            <span className="tetx-sm">24/09/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};
