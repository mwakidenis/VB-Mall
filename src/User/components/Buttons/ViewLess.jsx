import React from 'react'

function ViewLess() {
    return (
        <>
            <button
                type='button'
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 ml-4"
                onClick={handleViewLess}
            >
                View Less
            </button>
        </>
    )
}

export default ViewLess
