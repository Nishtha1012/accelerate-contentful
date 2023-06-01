import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_TOP_CATEGORIES } from '../../graphql/queries'

const CategoryList = () => {
    const { data, error, loading } = useQuery(GET_TOP_CATEGORIES)
    const [categories, setcategories] = useState();
    useEffect(() => {
        if (data) {
            setcategories(data.topCategoriesCollection.items)
        }
    }, [data])
    return (
        <div>
            <h4 className='font-bold text-2xl text-center mt-10'>Shop By Categories</h4>
            <div className='flex mt-5'>
                {categories && categories.map((category, index) =>
                    <div key={index} className='text-center m-2 hover:text-red-600 hover:cursor-pointer'>
                        <img src={category.categoryImage.url} alt={category.alt} />
                        <span className='uppercase text-base font-medium'>{category.categoryName}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoryList