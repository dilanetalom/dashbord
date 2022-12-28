import React from 'react'
import './Table.css'

function Table() {
  return (
    <div className='Table'>
      <h3>Recents Orders</h3>
      <table>
        <tr>
          <th>Product</th>
          <th>Tracking ID</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Lasania Chicken Fri</td>
          <td>18908424</td>
          <td>2 March 2022</td>
          <td className='approved'>Approved</td>
          <td>Détail</td>
        </tr>
        <tr>
          <td>Big Baza Bang</td>
          <td>18908424</td>
          <td>2 March 2022</td>
          <td className='pending'>Pending</td>
          <td>Détail</td>
        </tr>
        <tr>
          <td>Mounth Freshner</td>
          <td>18908424</td>
          <td>2 March 2022</td>
          <td className='approved'>Approved</td>
          <td>Détail</td>
        </tr>
        <tr>
          <td>Cupcake</td>
          <td>18908421</td>
          <td>2 March 2022</td>
          <td className='delivered'>Delivered</td>
          <td>Détail</td>
        </tr>
      </table>
    </div>
  )
}

export default Table