import styled from '@emotion/styled'

export const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))

/* The switch - the box around the slider */
export const Switch = styled('label')`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`

/* The slider */
export const Slider = styled('span')`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

`

// input:checked + .slider {
//   background-color: #2196F3;
// }

// input:focus + .slider {
//   box-shadow: 0 0 1px #2196F3;
// }

// input:checked + .slider:before {
//   -webkit-transform: translateX(26px);
//   -ms-transform: translateX(26px);
//   transform: translateX(26px);
// }
