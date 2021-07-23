import React from 'react'

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
    max-width : ${props=> props.maxWidth? `${props.maxWidth}px` : '600px' } ;

`

const ChartTitle = styled.div`
    font-weight : bold;
    padding : 5px;
    text-align : center;

`

export default function Timeline(props) {
    

    return (
        <>
            <ChartContainer maxWidth={1000} >
                <ChartTitle>
                   Quater plan
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={500}
                    chartType="Timeline"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B, C, D',
                        sheet: 'Timeline'
                    }}
                    options={{
                        colors:['#7142db','#7ccdf9','#f39564','#61d7a1'],
                        hAxis: {

                        },
                        vAxis: {

                            format: 'short'
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
