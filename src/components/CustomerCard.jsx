import React from 'react'
import AddPoints from './AddPoints'
import RedeemPoints from './RedeemPoints'

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

        <div className='flex flex-col  justify-center items-center gap-4 pr-5'>
          <p className='text-xl font-semibold text-gray-500'>Loyalty Points</p>
          <p className='text-green-600 text-2xl font-bold'>{props.points}</p>
        </div>
      </div>

      <div className='flex justify-between mt-10'>
        <AddPoints props={props}/>
        <RedeemPoints props={props}/>
      </div>
    </div>
  )
}
