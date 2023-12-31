import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "../common/Container";
import Layout from "../common/Layout";
import { Input } from "../common/Input";
import { ButtonType, PrimaryButton } from "../common/Button/PrimaryButton";

const ContactSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ContactSchema) });
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-10 py-10 lg:py-20">
          <h2 className="font-semibold text-2xl lg:text-4xl text-left lg:text-center">
            Contact Support
          </h2>
          <div className="flex flex-col items-center w-full gap-8">
            <form className="flex flex-col gap-4 w-full lg:w-[50%]">
              <Input
                label="Title"
                name="title"
                type="text"
                error={errors.title?.message}
                register={register}
              />
              <Input
                label="Email"
                name="email"
                type="text"
                error={errors.email?.message}
                register={register}
              />
              <Input
                label="Message"
                name="message"
                type="text"
                error={errors.message?.message}
                register={register}
              />
              <PrimaryButton label="Submit" type={ButtonType.submit} />
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
