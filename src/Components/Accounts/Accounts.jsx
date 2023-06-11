import React, { useEffect, useState } from 'react'
import transactions from './Data'
import BarChart from './BarChart'
import Table from './Table'



function Accounts() {
  const [months, setMonths] = useState([])
  const [credit, setCredit] = useState([])
  const [debit, setDebit] = useState([])

  useEffect(() => {
    const uniqueMonths = transactions.map((item) => item.month);
    setMonths([...new Set(uniqueMonths)]);
  }, []);

  useEffect(() => {

    const combinevalue = months.map(month => {

      const debitTotal = transactions
        .filter(transaction => transaction.month === month)
        .reduce((total, transaction) => total + transaction.debit, 0);
      const creditTotal = transactions
        .filter(transaction => transaction.month === month)
        .reduce((total, transaction) => total + transaction.credit, 0);
      return {
        month,
        debitTotal,
        creditTotal,
      };
    })

    const creditdata = combinevalue.map(item => item.creditTotal)
    const debitdata = combinevalue.map(item => item.debitTotal)

    setCredit(creditdata);
    setDebit(debitdata);

  }, [months])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '50px' }}>

      <Table />
      <BarChart month={months} credit={credit} debit={debit} />

    </div>
  )
}

export default Accounts
