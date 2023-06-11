import React from 'react'
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);


function BarChart({month,credit,debit}) {
  return (
    <div>
      <h3 style={{opacity:'.5'}}><u>Account balance</u></h3>
      <div style={{ maxWidth: "800px" }}>
        
        <Bar
          data={{
            labels: month,
            datasets: [
              {
                label: "credit value",
                data:credit,
                backgroundColor: "#81e781",
                borderColor: "#81e781",
                borderWidth: 0.5,
              },
              {
                label: "debit value",
                data: debit,
                backgroundColor: "#e78181",
                borderColor: "#e78181",
                borderWidth: 0.5,
              },
            ],
          }}
          height={230}
          width={500}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false, // Remove vertical gridlines
                },
              },
              y: {
                ticks: {
                  beginAtZero: false,
                },
              },
            },
            plugins: {
              tooltip: {
                enabled: false,
              },
              legend: {
                labels: {
                  fontSize: 20,
                },
              },
            },
            hover: {
              mode: null,
            },
          }}
        />
      </div>
    </div>
  )
}

export default BarChart
