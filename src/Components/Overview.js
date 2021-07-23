import React from 'react'
// import RoboChart from '@postlight/react-google-sheet-to-chart';
import styled from 'styled-components';
import Chart from "react-google-charts";
import { Space } from './Utils';



// const config = {
//     sheetId :'10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8',
//     token : 'AIzaSyBuKdqj4t6-X76tK_06rIsghYBtGTZROlI',
//     sheetName : 'Sheet1'
// }

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

export default function Home(props) {


    return (
        <>
            <ChartContainer maxWidth={1000} >
                <ChartTitle>
                    Total Followers
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={500}
                    chartType="SteppedAreaChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, H, J,  I ',
                        sheet: 'Master Graph'
                    }}
                    options={{
                        colors:['#7142db','#61d7a1','#f39564'],
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

            <ChartContainer maxWidth={300} >
                <ChartTitle>
                   Insta  @gobablah
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={500}
                    chartType="SteppedAreaChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A,K',
                        sheet: 'Master Graph'
                    }}
                    options={{
                        colors:['#ed4b7c'],
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

            <ChartContainer maxWidth={300} >
                <ChartTitle>
                    Twitter  @BaBlahComics
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={500}
                    chartType="SteppedAreaChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, L',
                        sheet: 'Master Graph'
                    }}
                    options={{
                        colors:['#7ccdf9'],
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
