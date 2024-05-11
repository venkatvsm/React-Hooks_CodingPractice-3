// Write your code here
import {useState} from 'react'
import {
  BgContainer,
  CardContainer,
  Heading,
  HorizontalLine,
  CardDetailsContainer,
  CardNumber,
  CardText,
  Name,
  PaymentDetailsContainer,
  PaymentDetailsCardContainer,
  PaymentHeading,
  PaymentInputField,
} from './styledComponents'
const CreditCard = () => {
  const [numberEl, changeNumber] = useState('')
  const [name, changeName] = useState('')
  const onChangeNumber = event => {
    changeNumber(event.target.value)
  }
  const onChangeName = event => {
    changeName(event.target.value)
  }
  return (
    <BgContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <HorizontalLine />
        <CardDetailsContainer data-testid="creditCard">
          <CardNumber>{numberEl}</CardNumber>
          <CardText>CARDHOLDER NAME</CardText>
          <Name>{name.toUpperCase()}</Name>
        </CardDetailsContainer>
      </CardContainer>
      <PaymentDetailsContainer>
        <PaymentDetailsCardContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <PaymentInputField
            type="text"
            onChange={onChangeNumber}
            value={numberEl}
            placeholder="Card Number"
          />
          <PaymentInputField
            type="text"
            onChange={onChangeName}
            value={name}
            placeholder="Cardholder Name"
          />
        </PaymentDetailsCardContainer>
      </PaymentDetailsContainer>
    </BgContainer>
  )
}
export default CreditCard
