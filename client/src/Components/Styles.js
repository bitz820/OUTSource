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
export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    background: white;
    /* font-family: Arial, Helvetica, sans-serif; */
    height: 100%;
    margin: 0;
    color: #555;
}`

export const SharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px 20px;
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
export const ProfileContainer = styled.div`
display: flex;
flex-flow: column;

`

export const ProfileHeader = styled.div`
display: flex;
flex-flow: row;
justify-content: space-evenly;
min-width: fit-content;
font-size: 2rem;
background-color: black;
color: white;
h1{
    text-align: left;
}

h5{
    text-align: left;
    /* color: white */
}
`

export const CircleBanner = styled.div`

border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: black;
min-width: 150px;
min-height: 150px;

@media only screen and (max-width: 600px) {
    max-width: 60px;
    max-height: 60px;
}


/* font-size: 1.4rem; */
`

export const ProfileBody = styled.div`
display: flex;
flex-flow: row;
justify-content: space-around;
margin-top: 20px;
`

export const ProfileLeft = styled.div`
border: 1px solid;
padding: 10px;

@media only screen and (max-width: 600px) {
    border: none;
}
`

export const ProfileButtonContainer = styled.div`
/* border: red 1px solid; */
display: flex;
flex-flow: column;
justify-content: space-between;
`

export const ProfileStats = styled.div`
display: flex;
/* align-items: flex-end; */
/* justify-content: flex-end; */
flex-flow: row;
/* border: red 1px solid; */
margin-bottom: 10px;

    p {
        margin-left: 12px;
    }

    @media only screen and (max-width: 600px) {
        margin: 0px;
    }

`

export const ProfileTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

export const WarningButton = styled.button`
    padding: 8px 20px;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    background-color: black;
    color: yellow;
    border: none;

    :hover {
        transition: all .3s ease-out;
        background-color: #f00946;
        color: white;
        border: none;
    }

    @media only screen and (max-width: 600px) {
        transition: all .3s ease-out;
        background-color: #f00946;
        color: white;
        border: none;

    }
`

// Home Styling


export const ComponentContainer1 = styled.div`
display: flex;
flex-direction: row;
border: 1px red solid;


    h2 {
        font-size: 2rem;
        display: flex;
        align-items: center;
        line-height: 40px;
    }

    img {
        max-width: 400px;
        max-height: 400px;
    }
`

export const ComponentContainer2 = styled.div`
display: flex;
flex-direction: row;
background: var(--primary);


    h2 {
        font-size: 2rem;
        display: flex;
        align-items: center;
        line-height: 40px;
    }

    img {
        max-width: 400px;
        max-height: 400px;
    }
`

// background: ${banner()}