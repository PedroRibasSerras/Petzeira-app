import { HomeWrapper, HomeContent, Logo, LogoImg, LogoName, LogoSubtitle } from './home.css';
import { BigButton } from '../../utils.css'

function Home() {
  return (
    <HomeWrapper>
      <HomeContent>
        <Logo>
          <LogoImg  size={300}></LogoImg>
          <LogoName>Petzeira</LogoName>
          <LogoSubtitle>Seu pet mais feliz!</LogoSubtitle>
        </Logo>
        <BigButton>
          Começar
        </BigButton>
      </HomeContent>
    </HomeWrapper>
  );
}

export default Home;
