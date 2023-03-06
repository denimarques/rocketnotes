import {Background, Base} from "./style";
import Input from "../../components/Input";
import Form from "../../components/Form";
import {FiMail, FiLock} from "react-icons/fi";
import Button from "../../components/Button";

export default function SignIn() {
    return (
        <>
            <Base>
                <Form>
                    <h1>Rocket Notes</h1>
                    <p>Aplicação para gerenciar e salvar seus links úteis.</p>

                    <h2>Faça seu login</h2>
                    <Input placeholder="E-mail" type="email" icon={FiMail}/>
                    <Input placeholder="Password" type="password" icon={FiLock}/>

                    <Button title="Log In"/>

                    <a href="">
                        Criar Conta
                    </a>
                </Form>
                <Background/>
            </Base>

        </>
    );
}