import React from 'react'
import { useParams } from 'react-router-dom'

export default function Page() {
    const {id} = useParams();

  return (
    <>
        <div>Page {id} 입니다.</div>
        <div>페이지 주소는 {id} 입니다.</div>
    </>
  )
}
