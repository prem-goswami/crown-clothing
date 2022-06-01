import styled from 'styled-components'

export const CartDropDownContainer = styled.div`
position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 50px;
    right: 47px;
    z-index: 5;
`

export const CartItems = styled.div`
height: inherit;
       display: flex;
       flex-direction: column;
     overflow: auto;

`

export const EmptyMessage = styled.span`
font-size: 18px;
margin: 50px auto;

`

// .cart-dropdown-container {
    // position: absolute;
    // width: 240px;
    // height: 340px;
    // display: flex;
    // flex-direction: column;
    // padding: 20px;
    // border: 1px solid black;
    // background-color: white;
    // top: 50px;
    // right: 47px;
    // z-index: 5;
  
//     .empty-message {
//       font-size: 18px;
//       margin: 50px auto;
//     }
  
//     .cart-items {
//       height: inherit;
//       display: flex;
//       flex-direction: column;
//       overflow: auto;
//     }
  
//     button {
//       margin-top: auto;
//     }
//   }
  