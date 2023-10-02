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
