import Logo from '../../components/Logo/Logo'
import { BigButton, PageWrapper, PageContent } from '../../utils.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <PageWrapper>
      <PageContent>
        <Logo enableImage={true} enableName={true} enableSubtitle={true}/>
        <BigButton as={Link} to="Login">
          Começar
        </BigButton>
      </PageContent>
    </PageWrapper>
    
  );
}

export default Home;
