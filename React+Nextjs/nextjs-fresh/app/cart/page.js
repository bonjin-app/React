// 'use client'; // Client Component
// 큰 페이지는 Server Component

import React from 'react'
import age from './data';

export default function page() {
  return (
    <div>
        <h4 className='title'>Cart</h4>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </div>
  )
}

function CartItem() {
    return (
        <div className='cart-item'>
            <p>상품명 {age}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}