// Style your elements here
import Styled from 'styled-components'

export const BgContainer = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    @media screen and (min-width:768px){
        flex-direction: row;
    }
`
export const CardContainer = Styled.div`
    height: 60vh;
    background-color: #3b4b69;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width:768px){
        width: 35%;
        height:100%
    }
`
export const Heading = Styled.h1`
    font-family: 'Roboto';
    font-weight: 500;
    color:  #ffffff;
    font-size: 21px;
    text-align: center;
    margin: 0px;
    @media screen and (min-width:768px){
        font-size: 34px;
    }
`
export const HorizontalLine = Styled.hr`
    width: 150px;
    border-color: #ffd773;
    border-style: solid;
    border-width: 2px;
    margin-bottom: 10%;
`
export const CardDetailsContainer = Styled.div`
    width: 85vw;
    height: 180px;
    background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
    background-size: cover;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding-left: 20px;
    padding-bottom: 10px;
    @media screen and (min-width: 768px){
        justify-content: center;
        width: 90%;
        height: 300px;
        border-radius: 30px;
        padding-top: 12%;
        padding-left: 7%;
    }
`
export const CardNumber = Styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    color:  #ffffff;
    font-size: 18px;
    text-align: center;
    margin: 0px;
    margin-bottom: 8%;
    @media screen and (min-width: 768px){
        font-size: 24px;
    }
`
export const CardText = Styled.p`
    font-family: 'Roboto';
    font-weight: 500;
    color: #d3d9e0;
    font-size: 12px;
    text-align: center;
    margin: 0px;
    @media screen and (min-width: 768px){
        font-size: 16px;
    }
`
export const Name = Styled.p`
    font-family: 'Roboto';
    font-weight: 500;
    color: #ffff;
    font-size: 12px;
    text-align: center;
    margin-top: 8px;
    @media screen and (min-width: 768px){
        font-size: 15px;
    }
`
export const PaymentDetailsContainer = Styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    @media screen and (min-width:768px){
        width: 32%;
        height:100%
    }
`
export const PaymentDetailsCardContainer = Styled.div`
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #475569;
    @media screen and (min-width:768px){
        height: 300px;
    }
`
export const PaymentHeading = Styled.h1`
    font-size: 21px;
    font-family: 'Roboto';
    color: #344e7a;
    @media screen and (min-width:768px){
       font-size: 30px;
       margin-bottom: 6%;
    }
`
export const PaymentInputField = Styled.input`
    width: 88%;
    height: 36px;
    border-style: solid;
    border-color: #d3d9e0;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 500;
    color: #475569;
    padding-left: 10px;
    margin-bottom: 15px;
    outline: none;
    cursor: pointer;
    @media screen and (min-width:768px){
       height: 42px;
       margin-bottom: 10%;
       width: 80%;
    }
`
