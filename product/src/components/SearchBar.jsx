import React from 'react'

const searchBar = ({ searchText, inStocks, onSearchTextChange, onInStocksChange }) => {
  return (
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <input type="text"
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
      </div>

      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="checkbox"
            type="checkbox"
            value={inStocks}
            onChange={(e) => onInStocksChange(e.target.value)} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
        </div>
        <label for="checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show only inStocks</label>
      </div>
    </form>

  )
}

export default searchBar




