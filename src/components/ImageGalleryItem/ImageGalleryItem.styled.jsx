import styled from "@emotion/styled";
export const GalleryItem = styled.li`
cursor: pointer;
width: 300px;
height: 250px;
border-radius: 0px; 
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16),
0px 1px 6px rgba(46, 47, 66, 0.08);
&:hover,
&:focus {
    border-radius: 6px;
    box-shadow: 0px 5px 3px #40e6e1, 0px 3px 3px #40e6e1,
    0px 3px 9px #40e6e1; 
}
`;
export const Image = styled.img`
display: block;
height: 100%;
width: 100%;
object-fit: cover;
transition: transform var(--animation-duration) var(--timing-function);
`;