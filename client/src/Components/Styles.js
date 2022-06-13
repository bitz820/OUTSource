import styled, { createGlobalStyle, css } from "styled-components"
// Color Palatte
    /* PINK: #f5abb9; */
    /* BLUE: #5bcffb; */

// Form Styling
export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;

}
body {
    background: white;
    font-family: Arial, Helvetica, sans-serif;
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

export const CardStyle = styled.div`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
}

body {
    font-family: "Noto Sans", sans-serif;
    flex-grow: 1;
}

.wrapper {
    margin: 2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    justify-content: center;
}

.card {
    box-shadow: 0 0 10px 5px lightslategray;
    border-radius: .2rem;
    min-width: 28rem;
    min-height: 28rem;
    display: flex;
    margin: 10px;
    justify-content: center;
}

.card__body{
    margin: 1rem

}

.card__title {
    /* line-height: 1.9rem; */
    margin-bottom: .5rem;
}

.card__description {
    line-height: 1.2rem;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    margin: 10px;
}

.card__description img {
    margin: 10px 0px;
    width: 50px;
    height: 50px;
    align-items: center;
}


.card__price {
    /* font-size: 1.4rem; */
    margin-top: .6rem;
}

.card__price h4 {
    margin-bottom: 10px;
}

@media (min-width: 600px) {

    .wrapper {
    grid-template-columns:repeat(auto-fit, minmax(14rem,16rem));
}

.card{
    flex-direction: column;
    text-align: center;
    min-width: 14rem;
}

}

`

// 