import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/app'
import { setMsg } from 'src/features/testSlice'

const Home: NextPage = () => {
    const dispatch = useAppDispatch()
    const { msg } = useAppSelector(state => state.test)

    useEffect(() => {
        setTimeout(() => dispatch(setMsg('Not hello world!')), 3000)
    })

    return (
        <div className="bg-black text-white">
            <Link href="/">{msg}</Link>
        </div>
    )
}

export default Home
