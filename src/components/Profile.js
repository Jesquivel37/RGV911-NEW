import styled from 'styled-components';

export const Profile = styled.div`
width: 300px;
height: 300px;
border: 4px solid #D9B13B;
border-radius: 50%;
background-size: cover;
background-position: ${(props) => props.bgPos};
background-image: url(${(props) => props.bg});
`;
