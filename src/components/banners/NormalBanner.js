import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_NORMAL_BANNERS } from '../../graphql/queries'

export const NormalBanner = () => {
    const { data, error, loading } = useQuery(GET_NORMAL_BANNERS)
    const [normalBanner, setnormalBanner] = useState([])
    useEffect(() => {
        if (data) {
            setnormalBanner(data.bannerCollection.items)
        }
    }, [data])

    return (
        <div className='flex my-3'>
            {normalBanner &&
                normalBanner.map((banner, index) =>
                    <div key={index} className='mx-3 hover:cursor-pointer'><img src={banner.bannerImage.url} /> </div>
                )
            }
        </div>
    )
}
