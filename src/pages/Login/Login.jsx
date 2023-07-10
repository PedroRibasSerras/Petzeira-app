import Forms from '../../components/Forms/Forms'
import Input from '../../components/Forms/Input/Input'
import SubmitButton from '../../components/Forms/SubmitButton/SubmitButton'
import { PageWrapper, PageFormWrapper } from '../../utils.css'
import Logo from '../../components/Logo/Logo'
import { GrMail } from 'react-icons/gr'
import { FaKey } from 'react-icons/fa'

export default function Login({}) {
    function handleLogin(data){
        console.log(data)
    }
    return (
        <PageWrapper>
            <PageFormWrapper>
                <Logo enableImage={true} size={200} margin={'0'}/>
                <h1 style={{margin:0}}>
                    Login
                </h1>
                <Forms onSubmit={handleLogin}>
                    <Input label="email" labelText={<GrMail size={30}></GrMail>} type="text">E-mail</Input>
                    <Input label="password" labelText={<FaKey size={30}></FaKey>} type="password">Password</Input>
                    <SubmitButton>Sign in</SubmitButton>
                </Forms>
            </PageFormWrapper>
        </PageWrapper>
    );
}