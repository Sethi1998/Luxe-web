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
import { ButtonType, PrimaryButton } from "./common/Button/PrimaryButton";
import { apiHandler } from "@/services/api";
import { login } from "@/services/api/constants";
import toast, { Toaster } from "react-hot-toast";
import { setCookies } from "@/services/cookies";
import { Loader } from "./common/Loader";
import { SecondaryButton } from "./common/Button/SecondaryButton";
interface EmailInterface {
  email: string;
  password: string;
}

export const socialLogin = [
  {
    name: "facebook",
    img: "/img/facebook.png",
  },
  {
    name: "google",
    img: "/img/google.png",
  },
  {
    name: "apple",
    img: "/img/apple.png",
  },
];
const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Min password length is 8")
    .required("Password is required"),
});
export const Login = () => {
  const { setLoginPopup, loading, setLoading, setUserInfo } =
    useContext(CMSModal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });

  const submitHandler = async (data: EmailInterface) => {
    setLoading(true);
    const response = await apiHandler(`${login}`, "POST", data);
    const output = response.data;
    if (output.success === true) {
      toast.success(output.message);
      setUserInfo(output.data);
      setCookies("token", output?.token);
      setLoading(false);
      setLoginPopup("");
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
        <form
          className="flex flex-col gap-4 w-[60%]"
          onSubmit={handleSubmit((data) => submitHandler(data))}
        >
          <Input
            label="Email"
            name="email"
            type="text"
            error={errors.email?.message}
            register={register}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            error={errors.password?.message}
            register={register}
          />

          <PrimaryButton label="Submit" type={ButtonType.submit} />
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
          Don’t have an account?{" "}
          <span
            className="font-semibold text-primary cursor-pointer"
            onClick={() => setLoginPopup("signup")}
          >
            Sign up
          </span>
        </h2>
        {loading && <Loader />}
        <Toaster />
      </div>
    </Modal>
  );
};
