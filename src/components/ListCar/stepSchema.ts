import * as yup from "yup";

export const Step1Schema = yup.object().shape({
  address: yup.string().required("Location is required"),
  category: yup.string().required("Vehicle Type is required"),
  year: yup.string().required("Year is required"),
  make: yup.string().required("Make is required"),
  model: yup.string().required("Vehicle Type is required"),
  trim:yup.string().required("Vehicle Type is required")
});
