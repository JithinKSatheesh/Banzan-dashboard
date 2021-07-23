
import React from 'react'
// import RoboChart from '@postlight/react-google-sheet-to-chart';
import styled from 'styled-components';
import Chart from "react-google-charts";
import { Space } from './Utils';



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

export default function Manage(props) {


    return (
        <>

            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}

            <ChartContainer maxWidth={1000} >
                <ChartTitle>
                   Comic Buffer
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={250}
                    chartType="BarChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT E, F , G',
                        sheet: 'Manage'
                    }}
                    options={{
                        pieSliceText: 'value',
                        bars: 'vertical',
                        colors:['#c4c4c8','#7142db'],
                        hAxis: {
                            minValue: 0,
                        },
                        vAxis: {
                            format : 'short'
                        },
                    }}

                    rootProps={{ 'data-testid': '1' }}
                />

            </ChartContainer>



            <ChartContainer maxWidth={500}>
                <ChartTitle>
                Useful reference Links
                </ChartTitle>
                <Space />
                <Chart
                    width={'100%'}
                    // height={300}
                    chartType="Table"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT J, K',
                        sheet : 'Manage'
                    }}
                    options={{
                        hAxis: {
                            
                        },
                        vAxis: {
                           
                        
                        },
                    }}
                
                    rootProps={{ 'data-testid': '2' }}
                    
                />
            </ChartContainer>





        </>
    )
}
