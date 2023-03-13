import {Base, Header, Form, Avatar} from "./style";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";
export default function Perfil(){
    return(
        <Base>
            <Header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </Header>
            <Avatar>
                <img src="https://github.com/denimarques.png" alt=""/>
                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id="avatar"/>
                </label>
            </Avatar>
            <Form>
                <Input placeholder="Usuário" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="email" icon={FiMail} />
                <Input placeholder="Senha Atual" type="password" icon={FiLock} />
                <Input placeholder="Nova Senha" type="password" icon={FiLock} />
                <Button type="button" title="Salvar" />
            </Form>
        </Base>
    );
}