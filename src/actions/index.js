import { SORTFN, SORTID, SORTLN,SORTFNDEC, SORTIDDEC, SORTLNDEC,DATA } from "./actionType";

export const SortFn = () => {
  return {
    type: SORTFN
  };
};

export const SortId = () => {
  return {
    type: SORTID
  };
};
export const SortLn = () => {
    return {
      type: SORTLN
    };
  };
export const getData = () =>{
    return {
        type: DATA
    };
}
export const SortFnDEC = () => {
    return {
      type: SORTFNDEC
    };
  };
  
  export const SortIdDEC = () => {
    return {
      type: SORTIDDEC
    };
  };
  export const SortLnDEC = () => {
      return {
        type: SORTLNDEC
      };
    };