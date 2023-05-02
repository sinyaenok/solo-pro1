import styled from "styled-components";

const Header = () => {
    const StyledHeader = styled.div`
    display : flex;
    background-color : #fff;
    border : 1px solid gray;
    height : 50px;
    `;
    
    return (
        <StyledHeader>
            <Logo/>
            <SearchFrom/>
            <MemberIcon/>
        </StyledHeader>
    )
}

const Logo = () => {
const StyledLogo = styled.div`
display : flex;
flex : 1;
background-color : tomato;
`
    return (        
        <StyledLogo></StyledLogo>
    )
}
const SearchFrom = () => {
    const StyledSearchFrom = styled.div`
    display : flex;
    flex:1;
    background-color : coral;`;
    return (
        <StyledSearchFrom></StyledSearchFrom>
    )
}
const MemberIcon = () => {
    const StyledMemberIcon = styled.div`
    display : flex;
    flex : 1;
    background-color : skyblue;
    `;
    return (
        <StyledMemberIcon></StyledMemberIcon>
    )
}
// styled
export default Header;