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

export const StyledForm = styled.form`
    width: 100%;
    max-width: 600px;
    padding: 40px;
    background: -webkit-linear-gradient(left, #ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff, #fffffc); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(left, #ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff, #fffffc);
    background: -moz-linear-gradient(left, #ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff, #fffffc);
    background: linear-gradient(left, #ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff, #fffffc);

    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.4);
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
