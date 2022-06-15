import styled, { createGlobalStyle, css } from "styled-components"

// Color Palatte
/* PINK: #f5abb9; */
/* BLUE: #5bcffb; */

// Top Level Style 
export const AppStyle = styled.div`
text-align: center;
box-sizing: border-box;
font-family: 'Fredoka One', cursive;
/* font-family: 'Poppins', sans-serif; */
`

// Form Styling


export const SharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`


export const StyledInput = styled.input`
    display: block;
    width: 100%;
    text-align: left;
    ${SharedStyles}
`

export const StyledFieldSet = styled.fieldset`
border: 1px solid #ddd;
display: flex;
flex-flow: column;
justify-content: flex-start;
border-radius: 5px;
padding: 10px;
margin: 20px 0;

label {
    padding: 20px;
    text-align: left;
    align-content: center;
}
`


// Profile Page Styles


export const ProfileButtonContainer = styled.div`
/* border: red 1px solid; */
display: flex;
flex-flow: column;
justify-content: space-between;
`
