import styled from 'styled-components';
import img1 from '../../data/img/dan-gold-4_jhDO54BYg-unsplash.jpg';
import img2 from '../../data/img/ivan-torres-MQUqbmszGGM-unsplash.jpg';
import img3 from '../../data/img/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg';

const Main = () => {
const StyledMain = styled.div`
background-color : tomato;
width : 100vw;
height : 100vh;
.img-1 {
    background-image : url(${img1});
    width : 100%;
    height : 100%;
}
img {
    width : 100%;
    /* height : 100%; */
}
`;
    return (
        <StyledMain>
            {/* <div className="img-1"></div> */}
            {/* <img src={img1} alt=""/> */}
            <img src={img2} alt=""/>
            {/* <img src={img3} alt=""/> */}
            </StyledMain>
    )
}

export default Main;