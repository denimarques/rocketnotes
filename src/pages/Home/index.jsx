import {Base, Brand, Menu, Search, NewNote, Content} from "./style";

import Header from "../../components/Header"

export default function Home() {
    return (
        <Base>
            <Brand><h1>Rocketnotes</h1></Brand>
            <Header/>
            <Menu></Menu>
            <Search></Search>
            <Content></Content>
            <NewNote></NewNote>
        </Base>
    );
}