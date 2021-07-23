import React,{useState} from 'react'
// import RoboChart from '@postlight/react-google-sheet-to-chart';
import Chart from "react-google-charts";

import styled from 'styled-components';

import { Space } from './Utils';



// const config = {
//     sheetId :'10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8',
//     token : 'AIzaSyBuKdqj4t6-X76tK_06rIsghYBtGTZROlI',
//     sheetName : ["Numzy", "Yes_or_No" , ]
// }

const ChartContainer = styled.div`
    padding : 10px;
    box-shadow : 0px 0px 5px 5px rgba(226, 200, 252, 0.221);
    background-color : white;
    border-radius : 20px;
    width : 100%;
    margin : 10px;
    max-width : ${props=> props.maxWidth? `${props.maxWidth}px` : '600px' } ;

`


const ChartTitle = styled.div`
    font-weight : bold;
    padding : 5px;
    text-align : center;

`

const Loading = ()=>{
    return(
        <div>Loading Chart</div>
    )
}


export default function Growth(props) {


    return (
        <>
        
            <ChartContainer>
                <ChartTitle>
                    Numzy
                </ChartTitle>
                <Space/>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="Line"
                    loader={<Loading/>}
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B , C',
                        sheet : 'Numzy'
                    }}
                    options={{
                        hAxis: {
                            
                        },
                        vAxis: {
                            format: 'short',
                        
                        },
                    }}
                
                    rootProps={{ 'data-testid': '2' }}
                    
                />
            </ChartContainer>



            <ChartContainer maxWidth={350} >
                <ChartTitle>
                    Numzy (Active)
                </ChartTitle>
                <Space/>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="Line"
                    loader={<Loading/>}
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, E',
                        sheet : 'Numzy'
                    }}
                    options={{
                        hAxis: {
                            
                        },
                        vAxis: {
                            format: 'short',
                        
                        },
                    }}
                
                    rootProps={{ 'data-testid': '2' }}
                    
                />
            </ChartContainer>


            {/* ================================================ */}
            {/* ================================================ */}
            {/* ================================================ */}
            {/* ================================================ */}


            <ChartContainer>
                <ChartTitle>
                    Yes/No
                </ChartTitle>
                <Space/>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="Line"
                    loader={<Loading/>}
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B , C, E',
                        sheet : 'Yes_or_No'
                    }}
                    options={{
                        hAxis: {
                            
                        },
                        vAxis: {
                            format: 'short',
                        
                        },
                    }}
                
                    rootProps={{ 'data-testid': '2' }}
                    
                />
            </ChartContainer>

            <ChartContainer maxWidth={350}>
                <ChartTitle>
                    Yes/No (Active)
                </ChartTitle>
                <Space/>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="Line"
                    loader={<Loading/>}
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, E',
                        sheet : 'Yes_or_No'
                    }}
                    options={{
                        hAxis: {
                            
                        },
                        vAxis: {
                            format: 'short',
                        
                        },
                    }}
                
                    rootProps={{ 'data-testid': '2' }}
                    
                />
            </ChartContainer>


            {/* ================================================ */}
            {/* ================================================ */}
            {/* ================================================ */}
            {/* ================================================ */}
            <ChartContainer>
                <ChartTitle>
                TymPass With BaBlah
                </ChartTitle>
                <Space/>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="Line"
                    loader={<Loading/>}
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B , C, E',
                        sheet : 'TymPass With BaBlah'
                    }}
                    options={{
                        hAxis: {
                            
                        },
                        vAxis: {
                            format: 'short',
                        
                        },
                    }}
                
                    rootProps={{ 'data-testid': '2' }}
                    
                />
            </ChartContainer>

            <ChartContainer maxWidth={350}>
                <ChartTitle>
                TymPass (Active)
                </ChartTitle>
                <Space/>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="Line"
                    loader={<Loading/>}
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, E',
                        sheet : 'TymPass With BaBlah'
                    }}
                    options={{
                        hAxis: {
                            
                        },
                        vAxis: {
                            format: 'short',
                        
                        },
                    }}
                
                    rootProps={{ 'data-testid': '2' }}
                    
                />
            </ChartContainer>


            <ChartContainer maxWidth={250}>
                <ChartTitle>
                Target
                </ChartTitle>
                <Space/>
                <Chart
                    width={'100%'}
                    // height={300}
                    chartType="Table"
                    loader={<Loading/>}
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B , C',
                        sheet : 'TargetGrowth'
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

            
            <Space size={300}/>
        </>
    )
}


