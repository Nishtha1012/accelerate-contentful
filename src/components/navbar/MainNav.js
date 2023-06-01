import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_NAVBAR_DATA } from '../../graphql/queries'
import MainNavCategories from './MainNavCategories'
import { SubList } from './SubList'

export const MainNav = () => {
    const { data, error, loading } = useQuery(GET_NAVBAR_DATA)
    const [navList, setnavList] = useState();
    useEffect(() => {
        if (data) {
            setnavList(data.navbarListCollection.items)
        }
    }, [data]);
    return (
        <div className='bg-black flex justify-center  items-center h-14 relative'>
            {navList && navList.map((itemList, index) =>
                <MainNavCategories itemList={itemList} key={index} />
            )}
        </div>
    )
}
