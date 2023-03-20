import {Base, Brand, Menu, Search, NewNote, Content} from "./style";
import {FiPlus, FiSearch} from "react-icons/fi"

import Header from "../../components/Header"
import ButtonText from "../../components/ButtonText";
import Index from "../../components/Input";
import Section from "../../components/Section";
import Note from "../../components/Note";

export default function Home() {

    const data = [{
        name: "React Modal",
        tags: [
            {id: 1, name: "React"}
        ],
    },
        {
            name: "Exemplo de Middleware",
            tags: [
                {id: 1, name: "Express"},
                {id: 2, name: "Nodejs"}
            ],
        }]

    return (
        <Base>
            <Brand><h1>Rocketnotes</h1></Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="Front End" isActive/></li>
                <li><ButtonText title="Node"/></li>
                <li><ButtonText title="React"/></li>
            </Menu>
            <Search>
                <Index placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>
            <Content>
                <Section title="Minhas notas"/>
                <Note data={data[0]}/>
                <Note data={data[1]}/>
                <Note data={data[1]}/>
            </Content>
            <NewNote>
                <FiPlus/>
                <a href="/new">New nota</a>
            </NewNote>
        </Base>
    );
}
