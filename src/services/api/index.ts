import axios from "axios";
import { getCookies } from "../cookies";

async function apiHandler(
  path: string,
  method = "GET",
  params = {},
  Headers?: string
) {
  const headers = {
    Authorization: getCookies("token"),
    "content-type": Headers && "multipart/form-data",
  };
  switch (method) {
    case "GET":
      try {
        return await axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, {
            headers: headers,
          })
          .then((res) => res)
          .catch((e) => {
            return e;
          });
      } catch (err) {
        console.log(err, "Error in Api");
      }
      break;

    case "POST":
      try {
        return await axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, params, {
            headers: headers,
          })
          .then((res) => res)
          .catch((e) => {
            return e;
          });
      } catch (err) {
        console.log(err, "Error in Api");
      }
      break;

    default:
  }
}

export { apiHandler };
