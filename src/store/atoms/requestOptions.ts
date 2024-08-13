import { atom } from "recoil";

export const requestOptions = atom({
  key: "requestOptions",
  default: "header",
});
