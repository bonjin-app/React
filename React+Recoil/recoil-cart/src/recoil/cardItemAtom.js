import { atom, selector } from "recoil";
import dummyData from "../data/dummyData";

export const cartItemAtom = atom({
    key: 'cartItemAtom',
    default: dummyData,
})

export const cartTotalSelector = selector({
    key: 'cartTotalSelector',
    get: ({get}) => {
        const state = get(cartItemAtom);
        return state.reduce((prev, next) => prev + next.price, 0);
    }
})