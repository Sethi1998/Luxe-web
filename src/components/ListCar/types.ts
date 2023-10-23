import { string } from "yup";

export type VehicleType = {
  _id: string;
  vehicleTypeName: string;
  vehicleTypeImg: string;
};
export type VehicleCompany = {
  _id: string;
  companyName: string;
  companyImg: string;
};
export type VehicleModel = {
  _id: string;
  categoryId: string;
  subCategoryName: string;
};
export const colors = [
  "Black",
  "White",
  "Silver",
  "Gray",
  "Blue",
  "Red",
  "Green",
  "Brown",
  "Beige",
  "Gold",
  "Yellow",
  "Orange",
  "Purple",
  "Bronze",
  "Copper",
  "Pearl White",
  "Metallic Gray",
  "Midnight Blue",
  "Champagne",
  "Platinum",
  "Burgundy",
  "Magnetic Gray",
  "Deep Ocean Blue",
  "Ruby Red",
  "Forest Green",
];
export const trim = [
  {
    label: "Base Trim",
    value: "Base Trim",
  },
  {
    label: "Hybrid",
    value: "Hybrid",
  },
  {
    label: "Off-Road",
    value: "Hybrid",
  },
  {
    label: "off-Road",
    value: "Hybrid",
  },
  {
    label: "SEL",
    value: "SEL",
  },
  {
    label: "Premium",
    value: "Premium",
  },
];

export const years = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

export const doors = [
  {
    label: "Two-Door (2-Door) Car",
    value: "Two-Door (2-Door) Car",
  },
  {
    label: "Four-Door (4-Door) Car",
    value: "Four-Door (4-Door) Car",
  },
  {
    label: "Five-Door (5-Door) Car",
    value: "Five-Door (5-Door) Car",
  },
  {
    label: "Three-Door and Five-Door Hatchbacks",
    value: "Three-Door and Five-Door Hatchbacks",
  },
  {
    label: "Multi-Door Vehicles",
    value: "Multi-Door Vehicles",
  },
];
export const seats = [
  {
    label: "Two-Seat Car",

    value: "Two-Seat Car",
  },
  {
    label: "Four-Seat Car",
    value: "Four-Seat Car",
  },
  {
    label: "Five-Seat Car",
    value: "Five-Seat Car",
  },
  {
    label: "Seven-Seat Car",
    value: "Seven-Seat Car",
  },
  {
    label: "Eight-Seat Car",
    value: "Eight-Seat Car",
  },
  {
    label: "Nine-Seat and More",
    value: "Nine-Seat and More",
  },
];

export const fuelType = [
  {
    label: "Petrol",
    value: "Petrol",
  },
  {
    label: "Diesel",
    value: "Diesel",
  },
];

export const transmission = [
  {
    label: "0-10k miles",
    value: "0-10k miles",
  },
  {
    label: "10-20k miles",
    value: "10-20k miles",
  },
  {
    label: "20-30k miles",
    value: "20-30k miles",
  },
  {
    label: "30-40k miles",
    value: "30-40k miles",
  },
  {
    label: "40-50k miles",
    value: "40-50k miles",
  },
  {
    label: "50-60k miles",
    value: "50-60k miles",
  },
  {
    label: "60-70k miles",
    value: "60-70k miles",
  },
  {
    label: "70-80k miles",
    value: "70-80k miles",
  },
  {
    label: "80-90k miles",
    value: "80-90k miles",
  },
  {
    label: "90-100k miles",
    value: "90-100k miles",
  },
];
export const odometer = [
  {
    label: "Automatic",
    value: "Automatic",
  },
  {
    label: "Manual",
    value: "Manual",
  },
];
