import styled from "styled-components";

export const BoxContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: .6em;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  text-align: center;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: #0054a3;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;
export const BoldError = styled.h1`
  font-size: 11px;
  color: red;
  font-weight: 500;
  margin: 0 4px;
`;
export const BoldStatus = styled.h1`
font-size: 11px;
  color: red;
  font-weight: 500;
  margin: 0 4px;
`


export const Input = styled.input`
  padding: 0.9em 0;
  border: none;
  border-bottom: 4px solid #0054a3;
  background-color: transparent;
  outline: none;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid 
    border-bottom: 4px solid #85c4ff;
  }
  &:focus {
    outline: none;
    border-bottom: 4px solid #85c4ff;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: linear-gradient( 58deg,#086ac7 20%,#0b2741 100% );
  box-shadow: 3px 3px 16px rgb(181 182 183 / 38%), inset -10px -10px 20px #162738;
  display: flex;
  justify-content: center;
  &:hover {
    filter: brightness(1.03);
  }
`;