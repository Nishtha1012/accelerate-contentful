import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_FOOTER_DATA } from '../../graphql/queries'
import CopyRight from './CopyRight'
import NewsLetter from './NewsLetter'

const Footer = () => {
    const { data, error, loading } = useQuery(GET_FOOTER_DATA)
    const [footerLogo, setfooterLogo] = useState([])
    const [footerLists, setfooterLists] = useState([])
    const [copyright, setcopyright] = useState('');

    useEffect(() => {
        if (data) {
            console.log(data);
            setfooterLogo(data.footerLevel2LogoCollection.items)
            setfooterLists(data.footerListsCollection.items)
            setcopyright(data.copyrightCollection.items)
        }
    }, [data])
    return (
        <>
            <NewsLetter />
            <div className=' px-16 bg-black py-10 '>
                <div className='grid grid-cols-3 border-b py-5'>
                    <div>
                        <img src={footerLogo[0]?.logo.url} alt={footerLogo[0]?.title} />
                        <div className='font-light text-sm text-gray-400 my-5'>
                            {footerLogo[0]?.description}
                        </div>
                    </div>
                    <div className='col-span-2 grid grid-cols-3'>
                        {footerLists && footerLists.map((list, index) =>
                            <div key={index} className='text-white '>
                                <h3 className='uppercase font-medium my-2'>{list.listHeading}</h3>
                                <ul>
                                    {list.listItemsCollection.items.map((item, index) => <li key={index} className='font-light text-sm text-gray-400 my-2 cursor-auto hover:text-red-800 hover:cursor-pointer '>{item.itemName}</li>)}
                                </ul>
                            </div>)}
                    </div>
                </div>
            </div>
            <CopyRight copyright={copyright} />
        </>
    )
}

export default Footer