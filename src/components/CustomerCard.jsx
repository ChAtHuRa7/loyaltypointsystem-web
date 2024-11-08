import React from 'react'

export default function CustomerCard({props}) {
  return (
    <div className='border-2 rounded-lg w-11/12 h-fit py-7 px-10 shadow-md mb-4 hover:shadow-sm'>
      <div className='flex justify-between'>

        <div className='text-gray-700'>
          <p className='text-lg font-semibold'>{props.firstName } {props.lastName}</p>
          <p>{props.email}</p>
          <p>{props.phoneNumber}</p>
          <p>{props.address}</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <p className='text-lg font-semibold text-gray-700'>Loyalty Points</p>
          <p className='text-green-600 text-xl font-bold'>{props.points}</p>
        </div>
      </div>
    </div>
  )
}
