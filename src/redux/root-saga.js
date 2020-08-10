import { fetchCollectionStart } from "./shop/shop.sagas";
const { all, call } = require("redux-saga/effects");

export default function* rootSaga() {
  yield all([call(fetchCollectionStart)]);
}
