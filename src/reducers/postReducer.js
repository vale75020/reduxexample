import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [], // all the fetched posts
  item: {} // new post
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
    //console.log('reducer')
    return {
        ...state,
        items: action.payload
    }
    default:
      return state;
  }
}
