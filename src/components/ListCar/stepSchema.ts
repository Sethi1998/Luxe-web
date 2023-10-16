import * as yup from "yup";

export const Step1Schema = yup.object().shape({
  address: yup.string().required("Location is required"),
  state: yup.string(),
  city: yup.string(),
  postalCode: yup.string(),
  category: yup.string().required("Vehicle Type is required"),
  year: yup.string().required("Year is required"),
  make: yup.string().required("Make is required"),
  model: yup.string().required("Vehicle Type is required"),
  trim: yup.string().required("Trim is required"),
  color: yup.string().required("Color is required"),
  vinNumber: yup.string().required("VIN Number is required"),
});
export const Step2Schema = yup.object().shape({
  plateNumber: yup.string().required("Plate Number is required"),
  door: yup.string().required("Door is required"),
  seat: yup.string().required("Seat is required"),
  fuelType: yup.string().required("Fuel Type is required"),
  transmission: yup.string().required("Transmission is required"),
  odometer: yup.string().required("Odometer is required"),
});

export const Step3Schema = yup.object().shape({
  discount: yup.string().required("Discount is required"),
  discountAmount: yup.string().required("Discount Amount is required"),
  amount: yup.string().required("Amount is required"),
  insurance: yup.string().required("Insurance is required"),
});

export const Step4Schema = yup.object().shape({
  frontImage: yup.string().required("Field is required"),
  leftImage: yup.string().required("Field is required"),
  rightImage: yup.string().required("Field is required"),
  backImage: yup.string().required("Field is required"),
  interiorImage: yup.string().required("Field is required"),
  backSeat: yup.string().required("Field is required"),
  description: yup.string(),
});
