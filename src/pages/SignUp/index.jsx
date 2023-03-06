import {Background, Base} from "./style";
import Input from "../../components/Input";
import Form from "../../components/Form";
import {FiUser, FiMail, FiLock} from "react-icons/fi";
import Button from "../../components/Button";

export default function SignUp() {
    return (
        <Base>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para gerenciar e salvar seus links úteis.</p>

                <h2>Crie sua Conta</h2>
                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="email" icon={FiMail}/>
                <Input placeholder="Password" type="password" icon={FiLock}/>

                <Button title="Cadastrar"/>

                <a href="">
                    Voltar para Login
                </a>
            </Form>
        </Base>
    );
}