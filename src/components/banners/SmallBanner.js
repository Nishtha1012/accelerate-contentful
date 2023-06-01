import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_SMALL_BANNERS } from '../../graphql/queries'

const SmallBanner = () => {
    const { data, error, loading } = useQuery(GET_SMALL_BANNERS)
    const [smallBanner, setsmallBanner] = useState([])
    useEffect(() => {
        if (data) {
            setsmallBanner(data.bannerCollection.items)
        }
    }, [data])

    return (
        <div className='flex mt-8'>
            {smallBanner &&
                smallBanner.map((banner, index) =>
                    <div key={index} className='mx-3 hover:cursor-pointer'><img src={banner.bannerImage.url} /> </div>
                )
            }
        </div>
    )
}

export default SmallBanner