import { SORTFN, SORTID, SORTLN,SORTFNDEC, SORTIDDEC, SORTLNDEC ,DATA} from "../actions/actionType";
const InitialData = [
    {
        "id":1,
        "first_name":"Arjun",
        "SIZE":"S",
        "last_name":"Kapoor"
    },
    {
        "id":2,
        "first_name":"Rajesh",
        "SIZE":"S",
        "last_name":"Kumar"
    },
    {
        "id":3,
        "first_name":"Nithin",
        "SIZE":"M",
        "last_name":"Ghatkari"
    },{
        "id":4,
        "first_name":"Ram",
        "SIZE":"M",
        "last_name":"Kaushik"
    },{
        "id":5,
        "first_name":"Bipin",
        "SIZE":"L",
        "last_name":"Patel"
    },{
        "id":6,
        "first_name":"Raju",
        "SIZE":"M",
        "last_name":"Singh"
    }
]
const IncReducers = (state = InitialData, action) => {
  switch (action.type) {
    case SORTID:
      return {
        ...state,
        count: [...InitialData?.sort((a, b) => (a.id > b.id) ? 1 : -1)]
      };
      case SORTFN:
        return {
          ...state,
          count: [...InitialData?.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)]
        };
        case SORTLN:
      return {
        ...state,
        count: [...InitialData?.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)]
      };
      case SORTIDDEC:
      return {
        ...state,
        count: [...InitialData?.sort((a, b) => (a.id > b.id) ? -1 : 1)]
      };
      case SORTFNDEC:
        return {
          ...state,
          count: [...InitialData?.sort((a, b) => (a.first_name > b.first_name) ? -1 : 1)]
        };
        case SORTLNDEC:
      return {
        ...state,
        count: [...InitialData?.sort((a, b) => (a.last_name > b.last_name) ? -1 : 1)]
      };
      case DATA:
      return {
        ...state,
        count: InitialData
      };
    default:
      return state;
  }
};

export default IncReducers;
