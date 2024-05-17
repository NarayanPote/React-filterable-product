import React from 'react'

const productCategoryRow = ({ category }) => {
  return (
    <tr>
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center flex items-center justify-center">
        {category}
      </th>
    </tr>

  )
}

export default productCategoryRow