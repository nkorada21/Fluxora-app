import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const BillingPlan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>

      <div className='text-center'>
        <h2 className='text-slate-700 text-[42px] font-semibold'>Find the Right Plan for You</h2>
        <p className='text-gray-500 max-w-lg mx-auto'>Get started for free and upgrade whenever you need 
            <span className='text-primary'> more power</span>. 
            Choose the plan that fits your creative workflow.</p>
      </div>

      <div className='mt-14 max-sm:mx-8'>
        <PricingTable />
      </div>

    </div>
  )
}

export default BillingPlan
