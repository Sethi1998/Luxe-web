/* eslint-disable react/no-unescaped-entities */
import { apiHandler } from "@/services/api";
import Container from "../common/Container";
import { ReactSlider } from "../common/Slider/Slider";
import { useEffect, useState } from "react";
import { getCompanies } from "@/services/api/constants";

export interface CompaniesProp  {
  _id: string;
  companyName: string;
  companyImg: string;
};
export const FindDrive = () => {
  const [companiesData, setCompaniesData] = useState<CompaniesProp[]>([]);
  useEffect(() => {
    fetchCompanies();
  }, []);
  const fetchCompanies = async () => {
    const response = await apiHandler(`${getCompanies}`, "GET");
    setCompaniesData(response.data.data);
  };

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl capitalize font-semibold lg:text-5xl">
          Top Brands
        </h1>
        <p className="text-secondary lg:w-[70%] lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <ReactSlider arrayData={companiesData} />
      </div>
    </Container>
  );
};
