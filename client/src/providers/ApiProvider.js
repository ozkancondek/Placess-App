import { createContext, useContext } from "react";
import { useErrorHandler } from "react-error-boundary";
import { initialServices } from "../services/api";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const handleError = useErrorHandler();

  const asyncWrapper = async (cb) => {
    try {
      let res = await cb();
      return res;
    } catch (error) {
      handleError(error);
    }
  };

  const getAllCities = async (id) => {
    let res = await asyncWrapper(() => initialServices.fetchData(id));
    return res;
  };
  const getSingleCity = async (id) => {
    let res = await asyncWrapper(() => initialServices.fetchSingleData(id));
    return res;
  };
  const userRegister = async (data) => {
    let res = await asyncWrapper(() => initialServices.register(data));
    return res;
  };
  const userLogin = async (data) => {
    let res = await asyncWrapper(() => initialServices.login(data));
    return res;
  };

  return (
    <ApiContext.Provider
      value={{ getAllCities, userRegister, userLogin, getSingleCity }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const response = useContext(ApiContext);
  if (!response) {
    throw new Error("useApi need to used in ApiProvider");
  }
  return response;
};
