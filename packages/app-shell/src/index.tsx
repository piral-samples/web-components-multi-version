import { renderInstance } from "piral";
import { layout, errors } from "./layout";

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch("./pilets.json").then((res) => res.json());
  },
});
