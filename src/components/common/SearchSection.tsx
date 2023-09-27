import { usePlacesWidget } from "react-google-autocomplete";
import { LocationIcon } from "@/icons/LocationIcon";
import { CalendarIcon } from "@/icons/CalendarIcon";
import { TimeIcon } from "@/icons/TimeIcon";
import moment from "moment";
import { useRef, useState } from "react";

// type SearchSection = {
//   address: string;
//   startDate: string;
//   startTime: string;
//   endDate: string;
//   endTime: string;
// };
export const SearchSection = () => {
  const startDateRef = useRef<any>(null);
  const startTimeRef = useRef<any>(null);
  const endDateRef = useRef<any>(null);
  const endTimeRef = useRef<any>(null);
  const [searchField, setSearchField] = useState({
    address: "",
    startDate: moment(new Date()).format("YYYY-MM-DD"),
    startTime: moment(new Date()).format("HH:mm"),
    endDate: moment().add(3, "d").format("YYYY-MM-DD"),
    endTime: moment().format("HH:mm"),
  });

  const { ref }: any = usePlacesWidget({
    apiKey: "AIzaSyDGjR7kqAFRiZ6hVluT9LhshR7_wvqOEug",
    onPlaceSelected: (place) =>
      place &&
      setSearchField({
        ...searchField,
        address: place.formatted_address || "",
      }),
  });
  const handleChange = (e: any) => {
    setSearchField({
      ...searchField,
      [e.target.name]: e.target.value,
    });
  };
  console.log(searchField, "seaaa");

  return (
    <div className="flex flex-col bg-white rounded-xl items-centerl gap-6 lg:flex-row lg:h-[120px] lg:rounded-full py-10 px-2 lg:px-10 text-xs lg:text-sm items-center">
      <div className="w-full lg:w-[300px] h-[50px] flex rounded-full border border-[#AAA] items-center jsutify-center px-4 gap-4">
        <LocationIcon />
        <input
          ref={ref}
          className="text-primary font-semibold w-full border-none outline-none"
          placeholder="City, airport,address or hotel"
        />
      </div>
      <div className="lg:w-[300px] h-[50px] flex rounded-full border border-[#AAA] items-center justify-center px-4 gap-4 text-primary font-semibold">
        <span
          className="cursor-pointer"
          onClick={() => {
            startDateRef?.current?.showPicker();
          }}
        >
          <CalendarIcon />
        </span>
        <input
          className="text-primary font-semibold w-full border-none outline-none cursor-pointer"
          placeholder="Start Date"
          name="startDate"
          type="date"
          value={searchField.startDate}
          onChange={handleChange}
          ref={startDateRef}
          onClick={(e: any) => {
            startDateRef?.current?.showPicker();
          }}
        />
        <span>|</span>
        <span className="cursor-pointer">
          <TimeIcon />
        </span>
        <input
          type="time"
          name="startTime"
          ref={startTimeRef}
          onChange={handleChange}
          className="text-primary font-semibold w-full border-none outline-none cursor-pointer"
          value={searchField.startTime}
          onClick={(e: any) => {
            startTimeRef?.current?.showPicker();
          }}
        />
      </div>
      <div className="lg:w-[300px] h-[50px] flex rounded-full border border-[#AAA] items-center justify-center px-4 gap-4 text-primary font-semibold lg:w-[362px]">
        <span
          className="cursor-pointer"
          onClick={() => {
            endDateRef?.current?.showPicker();
          }}
        >
          <CalendarIcon />
        </span>
        <input
          className="text-primary font-semibold w-full border-none outline-none cursor-pointer"
          placeholder="End Date"
          ref={endDateRef}
          name="endDate"
          type="date"
          onClick={() => {
            endDateRef?.current?.showPicker();
          }}
          value={searchField.endDate}
          onChange={handleChange}
        />
        <span>|</span>
        <span
          className="cursor-pointer"
          onClick={() => {
            endTimeRef?.current?.showPicker();
          }}
        >
          <TimeIcon />
        </span>
        <input
          type="time"
          ref={endTimeRef}
          className="text-primary font-semibold w-full border-none outline-none cursor-pointer"
          value={searchField.endTime}
          onChange={handleChange}
          name="endTime"
          onClick={(e: any) => {
            endTimeRef?.current?.showPicker();
          }}
        />
      </div>
    </div>
  );
};
