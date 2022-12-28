import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import './MainDash.css'

function MainDash() {
  return (
    <div className='MainDash'>
          <h1>Dashbord</h1>
          <Cards/>
          <Table />
    </div>
  )
}

export default MainDash