export const getRequiredStatus = (pathName: string) => {
  if (pathName === "/trips/booked") {
    return "owner";
  }
  if (pathName === "/trips/history") {
    return "owner";
  }
  if (pathName === "/vehicles/listing") {
    return "owner";
  }
  if (pathName === "/") {
    return "user";
  }
  if (pathName === "/favorites") {
    return "user";
  }
  if (pathName === "/profile") {
    return "user" || "owner";
  }
  if (pathName.includes("car-rental")) {
    return "user";
  }
};
