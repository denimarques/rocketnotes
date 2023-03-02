import { Base, Brand, Menu, Search, NewNote, Content } from "./style";
import { FiPlus, FiSearch } from "react-icons/fi"

import Header from "../../components/Header"
import ButtonText from "../../components/ButtonText/index.jsx";
import Input from "../../components/Input/input.jsx";

export default function Home() {
    return (
        <Base>
            <Brand><h1>Rocketnotes</h1></Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="Todos" /></li>
                <li><ButtonText title="Front End" isActive /></li>
                <li><ButtonText title="Node" /></li>
                <li><ButtonText title="React" /></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>
            <Content></Content>
            <NewNote>
                <FiPlus />
                <p>New nota</p>
            </NewNote>
        </Base>
    );
}