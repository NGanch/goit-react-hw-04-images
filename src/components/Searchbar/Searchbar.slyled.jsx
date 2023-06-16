import styled from '@emotion/styled';

export const Header = styled.header`
background-color: #40e6e1;
height: 70px;
box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
0px 4px 4px rgba(46, 47, 66, 0.16),
0px 4px 10px rgba(46, 47, 66, 0.08),
0px 4px 10px rgba(46, 47, 66, 0.08);
`;

export const SearchFormStyled = styled.form`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 20px;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 50px;
  border-style: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  outline: none;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.03em;
  &::placeholder {
  font-weight: 200;
  }
`;

export const FormBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #40e6e1;
  font-size: 20px;
  margin-top: 5px;
  font-weight: bold;
  color: black;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
`;
