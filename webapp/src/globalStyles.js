import { css } from '@emotion/core'

export const titleStyle = css`
position: relative;
text-align: center;
`

export const submitStyle = css`
margin: 15px;
cursor: pointer;
height: 30px;
background: #4d5166;
border: none;
outline: none;
border-radius: 40px;
padding: 5px 15px;
color: #fff;
font-size: 16px;
box-shadow: -2px -2px 6px rgba(255,255,255,0.1),
          2px 2px 6px rgba(0,0,0,0.8);
          
&:hover {
color: #03a9f4;
}
&:focus {
color: #03a9f4;
}
&:active {
color: #03a9f4;
box-shadow: inset -2px -2px 6px rgba(255,255,255,0.1),
          inset 2px 2px 6px rgba(0,0,0,0.8);
}
`
export const inputStyle = css`
    margin: 15px;
    height: 30px;
    background: #4d5166;
    border: none;
    outline: none;
    border-radius: 40px;
    padding: 5px 15px;
    color: #fff;
    font-size: 16px;
    color: #03a9f4;
    box-shadow: inset -2px -2px 6px rgba(255,255,255,0.1),
              inset 2px 2px 6px rgba(0,0,0,0.8);
`

export const editLinkStyle = css`
  color: #03a9f4;

  &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #03a9f4;
        transition: width .3s;
        margin-top: 4px;
        
    }

    &:hover {
        color: #03a9f4;
        opacity: 1;
    }

    &:hover::after {
        width: 100%;
    }
  
  &:link {
  text-decoration: none;
  }
`
