
import React from 'react'
// import RoboChart from '@postlight/react-google-sheet-to-chart';
import styled from 'styled-components';
import Chart from "react-google-charts";



const ChartContainer = styled.div`
    padding : 10px;
    box-shadow : 0px 0px 5px 5px rgba(226, 200, 252, 0.221);
    background-color : white;
    border-radius : 20px;
    width : 100%;
    margin : 10px;
    max-width : 600px;
    max-width : ${props => props.maxWidth ? `${props.maxWidth}px` : '600px'} ;

`

const ChartTitle = styled.div`
    font-weight : bold;
    padding : 5px;
    text-align : center;

`

export default function Resource(props) {


    return (
        <>

            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}

            <ChartContainer maxWidth={1000} >
                <ChartTitle>
                    Total Budget
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={250}
                    chartType="BarChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT G, H, I',
                        sheet: 'Resources'
                    }}
                    options={{
                        pieSliceText: 'value',
                        bars: 'vertical',
                        colors:['#7142db','#a5a6ab'],
                        hAxis: {
                            minValue: 0,
                        },
                        vAxis: {

                        },
                    }}

                    rootProps={{ 'data-testid': '1' }}
                />

            </ChartContainer>


            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}
            
            <ChartContainer maxWidth={500} >
                <ChartTitle>
                    Budget allocation
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={400}
                    chartType="PieChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B',
                        sheet: 'Resources'
                    }}
                    options={{
                        pieSliceText: 'value',
                        colors:['#a5a6ab','#7ccdf9','#7142db'],
                        hAxis: {

                        },
                        vAxis: {

                        },
                    }}

                    rootProps={{ 'data-testid': '1' }}
                />

            </ChartContainer>


            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}

            <ChartContainer maxWidth={500} >
                <ChartTitle>
                    Budget Quota
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={400}
                    chartType="ColumnChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B, C',
                        sheet: 'Resources'
                    }}
                    options={{
                        pieSliceText: 'value',
                        bars: 'vertical',
                        colors:['#7142db','#ed4b7c','#61d275'],
                        hAxis: {

                        },
                        vAxis: {

                        },
                    }}

                    rootProps={{ 'data-testid': '1' }}
                />

            </ChartContainer>


            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}

        </>
    )
}
