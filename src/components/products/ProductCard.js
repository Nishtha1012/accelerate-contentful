import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className='w-52 group'>
            <div className='border-2 relative'>
                <div className='absolute top-2 right-2  bg-zinc-200 p-2 rounded-full '>
                    <svg
                        width="22px"
                        className="hover:fill-black"
                        height="22px"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z"
                            stroke="#000"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <img src={product.productImageCollection.items[0].url} alt={product.altText} className='px-3' />

                <button className='bg-black border-black absolute bottom-5 right-5 p-2 rounded-md hover:bg-white  hover:ease-in duration-300 hover:border hidden group-hover:block group/bag'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" class="bi bi-bag-dash-fill" viewBox="0 0 16 16" className='hover:ease-in duration-300 group-hover/bag:fill-black'>
                        <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                    </svg>
                </button>
            </div>
            <span className='text-sm'>{product.productsName}</span>
            <p className='font-medium text-sm'>$ {product.productPrice}.00</p>
        </div>
    )
}

export default ProductCard