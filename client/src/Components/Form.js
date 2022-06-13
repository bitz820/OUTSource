import React from 'react'
import styled, { createGlobalStyle, css } from "styled-components"



function Form() {

    // Style 
    const GlobalStyle = createGlobalStyle`
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

    const SharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
  `

    const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`

    const StyledForm = styled.form`
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

    const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${SharedStyles}
`

    const StyledButton = styled.button`
    display: block;
    background-color: #f7797d;
    /* background-color: linear-gradient(left, #ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff, #fffffc); */
    color: white;
    font-size: .9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`

    const StyledFieldSet = styled.fieldset`
border: 1px solid #ddd;
display: flex;
flex-flow: column;
justify-content: flex-start;
border-radius: 5px;
padding: 10px;
margin: 20px 0;

label {
    padding: 20px;
    /* text-align: left; */
    align-content: center;
}
`






    return (
        <>
            <GlobalStyle />
            <StyledFormWrapper >
                <StyledForm>
                    <h2>Contact Form</h2>
                    <label htmlFor='name'>Name</label>
                    <StyledInput name="name" type="text" />
                    <label htmlFor='email'>Email</label>
                    <StyledInput name="email" type="email" />
                    <StyledFieldSet>
                        <label>Gender
                            <br/>
                            <select
                                name="gender"
                            // onChange={handleChange}
                            >
                                <option value="">--Please choose an option--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                                <option value="Nonbinary">Nonbinary</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>Sexuality
                        <br/>

                            <select
                                name="sexuality"
                            // onChange={handleChange}
                            >
                                <option value="">--Please choose an option--</option>
                                <option value="Gay">Gay</option>
                                <option value="Lesbian">Lesbian</option>
                                <option value="Bisexual">Bisexual</option>
                                <option value="Asexual">Asexual</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>Reason for Signing Up
                        <br/>

                            <select name="reason_for_signup"
                            //  onChange={handleChange}
                            >
                                <option value="">--Please choose an option--</option>
                                <option value="STI Testing">STI Testing</option>
                                <option value="PrEP">PrEP</option>
                                <option value="HIV Testing">HIV Testing</option>
                                <option value="Counseling">Counseling</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>How'd You Hear About Us?
                        <br/>

                            <select
                                name="referred"
                            // onChange={handleChange}
                            >
                                <option value="">--Please choose an option--</option>
                                <option value="Internet">Internet</option>
                                <option value="Friend">Friend</option>
                                <option value="Partner">Partner</option>
                                <option value="Healthcare Provider">Healthcare Provider</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                    </StyledFieldSet>
                    <StyledButton type="submit">Sign Up</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default Form