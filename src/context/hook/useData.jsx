import { useContext } from "react";

import { DataContext } from "../DataProvider";

function useData() {
  return useContext(DataContext);
}

export default useData;
