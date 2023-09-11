import React, { useContext } from "react";
import { Modal } from "./common/Modal";
import { CMSModal } from "../context";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { styleScript } from "@/pages/_app";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./common/Input";
import { PrimaryButton } from "./common/Button/PrimaryButton";
import { apiHandler } from "@/services/api";
import { signup } from "@/services/api/constants";
import { setCookies } from "@/services/cookies";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "./common/Loader";
import { socialLogin } from "./Login";
interface EmailInterface {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  password: string;
}

const EmailSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phone: yup.string(),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .max(32, "Max password length is 32")
    .required("Password is required"),
});
export const Signup = () => {
  const { setLoginPopup, loading, setLoading,setUserInfo} = useContext(CMSModal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });
  const submitHandler = async (data: EmailInterface) => {
    setLoading(true);
    const response = await apiHandler(`${signup}`, "POST", data);
    const output = response.data;
    if (output.success === true) {
      toast.success(output.message);
      setCookies("token", output?.token);
      setUserInfo(output.data)
      setLoading(false);
      setLoginPopup(false);
    }
    if (output.success === false) {
      toast.error(output.message);
      setLoading(false);
    }
  };
  return (
    <Modal close={() => setLoginPopup(false)}>
      <div className="flex flex-col items-center  gap-4">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" width={35} height={30} alt="logo" />
          <h2 className="font-bold text-xl">LuxeRide</h2>
        </div>
        <div>
          <h1 className={twMerge(styleScript.className, "text-5xl")}>
            Welcome Back
          </h1>
        </div>
        <form onSubmit={handleSubmit((data) => submitHandler(data))}>
          <div className="grid grid-cols-2 gap-4 ">
            <Input
              label="First Name"
              name="firstName"
              type="text"
              error={errors.firstName?.message}
              register={register}
            />
            <Input
              label="Last Name"
              name="lastName"
              type="text"
              error={errors.lastName?.message}
              register={register}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Phone"
              name="phone"
              type="number"
              register={register}
            />
            <Input
              label="Email"
              name="email"
              type="text"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <Input
            label="Password"
            name="password"
            type="password"
            error={errors.password?.message}
            register={register}
          />

          <PrimaryButton label="Submit" />
        </form>
        <h2>Or</h2>
        <div className="flex gap-3">
          {socialLogin.map((item) => (
            <Image
              src={item.img}
              width={30}
              height={30}
              alt={item.name}
              key={item.name}
              className="cursor-pointer"
            />
          ))}
        </div>
        <h2 className="text-sm text-secondary ">
          Back to
          <span className="font-semibold text-primary"> Login</span>
        </h2>
        {loading && <Loader />}
        <Toaster />
      </div>
    </Modal>
  );
};
