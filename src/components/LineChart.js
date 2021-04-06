import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const LineChart = () => {
    const [ options, setOptions ] = useState({
        chart: {
          id: "line"
        },
        xaxis: {
          categories: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997]    
        }
      })
    
      const [ series, setSeries ] = useState([
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ])
    return (
        <>
            <Chart
                options={options}
                series={series}
                type="line"
                width="500"
            />
                <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
            />
        </>
    )
}
export default LineChart
