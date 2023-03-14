import { useEffect, useState } from 'react'
import { useData } from '../hooks/useData.jsx'
import { TVShowsSection } from '../components/TVShowsSection.jsx'

export const Homepage = () => {
    const { data, getData } = useData();

    useEffect(() => {
        getData(); 
    }, [])

    return (
        <>
        <h1>Home</h1>
        <TVShowsSection shows={data} />
        </>
    )
}