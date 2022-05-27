import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAppSelector } from 'src/app'
import { Button, AppLayout } from 'src/components'
import { useEffect } from 'react'

const NotFoundPage: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace('/')
    })

    return null
}

export default NotFoundPage
