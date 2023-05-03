import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import {  useRecoilState, useRecoilValue } from 'recoil'
import { cartItemAtom, cartTotalSelector } from '../recoil/cardItemAtom';
import dummyData from '../data/dummyData';

export default function Main() {
    const [cartItem, setCartItem] = useRecoilState(cartItemAtom);
    const cartCount = useRecoilValue(cartTotalSelector);

    return (
        <>
            <div>Main</div>
            {cartItem.map((e) => (
                <Fragment key={e.id}>
                    <p>{e.title}</p>
                    <button onClick={() => {
                        setCartItem((prev) => prev.filter((f) => f.id !== e.id))
                    }}>삭제</button>
                </Fragment>
            ))}

            <button onClick={() => {
                var lastItem = {
                    id: 1,
                    print: 9999,
                    title: '리코일 처음',
                    description: '리코일 처음 내용',
                };
                if(dummyData.length > 0) {
                    lastItem = dummyData[dummyData.length-1];
                }

                setCartItem([
                    ...cartItem,
                    lastItem,
                ])
            }}>추가</button>

            <p>총합</p>
            <p>{cartCount}</p>
        </>

    )
}
