import { atom } from "recoil";

interface loadingModel {
  content?: boolean;
  button?: boolean;
}
const isLoading = atom({
  key: "loading",
  default: {
    button: false,
    content: false
  } as loadingModel
});

export { isLoading };
