import styled from 'styled-components'


export const BackDrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(46,47,66,.4);
`

export const Content = styled.div`
position: absolute;
top: 50%;
left: 50%;
padding: 15px;
transform: translate(-50%, -50%) scale(1);
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
max-width: 600px;
min-height: 400px;
border-radius: 4px;
width: 100%;
background-color: #fcfcfc;
box-shadow: 0px 1px 1px rgba(0,0,0,.14), 0px 1px 3px rgba(0,0,0,.12), 0px 2px 1px rgba(0,0,0,.2);

`