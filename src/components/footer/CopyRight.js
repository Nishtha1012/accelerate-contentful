import React from 'react'

const CopyRight = ({ copyright }) => {
    return (
        copyright &&
        <div className='py-5 text-center bg-neutral-800 text-white text-sm font-light'>{copyright[0].copyrightText}</div>
    )
}

export default CopyRight