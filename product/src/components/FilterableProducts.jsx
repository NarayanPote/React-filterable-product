import React, { useState } from 'react'
import SeachBar from './SearchBar'
import ProductTable from './ProductTable'
const FilterableProducts = ({products}) => {
  const [searchText, setSearchText] = useState('');
  const [inStocks, setInStocks] = useState(false);
  return (
    <>
      <SeachBar
        searchText={searchText}
        inStocks={inStocks}
        onSearchTextChange={setSearchText}
        onInStocksChange={setInStocks}

      />
      <ProductTable searchText={searchText} inStocks={inStocks}  products={products} />
    </>
  )
}

export default FilterableProducts