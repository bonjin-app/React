import React from 'react'
import HeadInfo from '../components/HeadInfo'
import Image from 'next/image'
import styles from '../styles/Photo.module.css'
import Link from 'next/link'

export default function photo({ photos }) {
    return (
        <div>
            <HeadInfo
                title="My Blog Photo"
            />
            <h1>photo</h1>
            <ul className={styles.photo}>
                {photos.map((m, i) => {
                    return (
                        <li key={i} >
                            <Link href={`/photo/${m.id}`}>
                                <div>
                                    <Image
                                        src={m.thumbnailUrl}
                                        width={100}
                                        height={100}
                                    />
                                    <span>{m.title}</span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10');
    const photos = await res.json();

    return {
        props: {
            photos: photos,
        }
    }
}