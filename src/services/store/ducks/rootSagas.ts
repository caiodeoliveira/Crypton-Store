import * as Effect from "redux-saga/effects";

import { LoginTypes } from "./login/types";
import { HomeTypes } from "./home/types";

import { getRequestTrendingCoins } from "./login/sagas";
import { getRequestAllCoins } from "./home/sagas";

export default function* rootSaga(): any {
  const takeLatest: any = Effect.takeLatest;
  return yield Effect.all([
    takeLatest(LoginTypes.GET_REQUEST_TRENDING_COINS, getRequestTrendingCoins),
    takeLatest(HomeTypes.GET_REQUEST_ALL_COINS, getRequestAllCoins),
  ]);
}
