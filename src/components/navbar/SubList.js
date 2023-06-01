import React from 'react'

export const SubList = ({ listItem }) => {
    return (
        <div className=' bg-white text-black absolute mt-10 z-10 flex w-4/5 left-28 p-5 shadow'>
            {listItem.listCollection.items.map((sublist, index) => <div className='p-5' key={index}>
                <h4 className='font-bold hover:text-red-500'>{sublist.title}</h4>
                <div>{sublist.listItemsCollection.items.map((item, index) => <li className='list-none hover:text-red-500 capitalize' key={index}>{item.itemName}</li>)
                }</div>
            </div>)}
        </div>
    )
}
