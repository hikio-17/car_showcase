"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '@/components'

const SearchBar = () => {
   const [manufacturer, setManufacturer] = useState('');
   const handleSearch = () => { }
   return (
      <form className='searchbar' onSubmit={handleSearch}>
         <div className="searchbat__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={handleSearch}/>
         </div>
      </form>
   )
}

export default SearchBar