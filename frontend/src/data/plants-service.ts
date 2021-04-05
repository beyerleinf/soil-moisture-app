import API from "../utils/API";

export async function getPlants() {
  return (await API.get("/plants")).data;
}

export const fetchPlants = () => {
  console.log("fetch");

  return wrapPromise(getPlants());
};

function wrapPromise(promise: Promise<any>) {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
