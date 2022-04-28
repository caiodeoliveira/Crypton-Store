export const enum HomeTypes {
  GET_REQUEST_ALL_COINS = "GET_REQUEST_ALL_COINS",
  GET_REQUEST_ALL_COINS_SUCCESS = "GET_REQUEST_ALL_COINS_SUCCESS",
  GET_REQUEST_ALL_COINS_ERROR = "GET_REQUEST_ALL_COINS_ERROR",

  GET_REQUEST_TRENDING_COINS = "GET_REQUEST_TRENDING_COINS",
}

export interface HomeState {
  allCoins: number[];
  homeLoad: boolean;
}

export interface AllCoinsState {}