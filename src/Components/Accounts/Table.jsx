import React, { useEffect, useState } from 'react'
import transactions from './Data'
import './../../CSS/Table.css'

function Table() {

  const [data, setData] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const combinedValues = transactions.reduce((result, item) => {
      const existingItem = result.find((data) => data.account === item.account)
      if (existingItem) {
        existingItem.debit += item.debit;
        existingItem.credit += item.credit;
      }
      else {
        result.push({ ...item });
      }
      return result;
    }, []);

    setData(combinedValues)

  }, [])

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(data)
    } else {
      setSelectedItems([])
    }
  }
  const handleSelectItems = (item) => {
    if (selectedItems.includes(item)) {
      const nonSelected = selectedItems.filter(selected => selected !== item)
      setSelectedItems(nonSelected)
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }
  return (
    <div style={{ width: '500px' }}>
      <h4>Accounts dashboard</h4>
      <table>
        <thead>
          <tr>
            <th>  <input type='checkbox' onChange={handleSelectAll}></input> </th>
            <th>Account</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td> <input type='checkbox'
                checked={selectedItems.includes(item)}
                onChange={() => handleSelectItems(item)}
              ></input>  </td>
              <td>{item.account}</td>
              <td>{item.debit}</td>
              <td>{item.credit}</td>
              <td>{item.month}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
