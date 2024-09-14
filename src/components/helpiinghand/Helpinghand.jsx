import React from 'react'

export const Helpinghand = () => {
  return (

    // this div is of card

    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Image and header section */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src="https://via.placeholder.com/500"
          alt="Business"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="bg-gray-900 text-white px-2 py-1 text-xs font-semibold uppercase rounded">House</span>
          <span className="bg-gray-900 text-white px-2 py-1 text-xs font-semibold uppercase rounded">Family Business</span>
        </div>
      </div>

      {/* Content section */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Oxalis</div>
        <p className="text-gray-600 text-sm mb-4">Brooklyn, NY</p>
        <p className="text-gray-700 text-base mb-4">
          A recognized leader in language immersion & early education, opening second school.
        </p>

        {/* Progress bar */}
        <div className="h-2 relative max-w-full rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-300"></div>
          <div className="absolute top-0 h-full bg-green-500" style={{ width: '57%' }}></div>
        </div>

        {/* Funding details */}
        <div className="mt-2 text-gray-800 font-bold">
          $574,920 <span className="font-normal text-gray-600">raised of $1,000,000</span>
        </div>
      </div>

      {/* Hidden section on hover */}
      <div className="hidden hover:block px-6 py-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
          <div>Security Type</div>
          <div className="font-semibold">Revenue Sharing Note</div>
          <div>Investment Multiple</div>
          <div className="font-semibold">1.4x</div>
          <div>Maturity</div>
          <div className="font-semibold">48 Months</div>
          <div>Min. Investment</div>
          <div className="font-semibold">$100</div>
        </div>
        <button className="w-full bg-pink-500 text-white font-semibold py-2 rounded">
          VIEW
        </button>
      </div>
    </div>

    {/* //card div end */}


    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
     
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">Oxalis</h2>
        <p className="text-sm text-gray-500">Brooklyn, NY</p>
        <p className="mt-2 text-gray-600">
          A recognized leader in language immersion & early education, opening second school.
        </p>

        <div className="mt-4">
          <div className="text-green-500 font-semibold text-lg">
            $574,920 raised of $1,000,000
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "57%" }}></div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-gray-700">
            <div>
              <span className="block text-sm font-medium">Security Type</span>
              <span className="block">Revenue Sharing Note</span>
            </div>
            <div>
              <span className="block text-sm font-medium">Investment Multiple</span>
              <span className="block">1.4x</span>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-gray-700">
            <div>
              <span className="block text-sm font-medium">Maturity</span>
              <span className="block">48 Months</span>
            </div>
            <div>
              <span className="block text-sm font-medium">Min. Investment</span>
              <span className="block">$100</span>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg text-lg font-medium">
          VIEW
        </button>
      </div>
    </div>
    
    </div>
  )
}
