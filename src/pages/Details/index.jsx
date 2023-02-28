import {Container, Content, Links} from "./style.js";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Tag from "../../components/Tags/index.jsx";
import ButtonText from "../../components/ButtonText/index.jsx";

function Details() {
    return (
        <>
            <header>
                <Header/>
            </header>


            <main>
                <Container>
                    <ButtonText title="Excluir a nota"/>

                    <h1 className="text-2xl mb-5">Introdução ao React</h1>

                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://www.rocketseat.com.br</a></li>
                            <li><a href="#">https://www.rocketseat.com.br</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <div className="mt-2 flex gap-5">
                            <Tag title="Express"/>
                            <Tag title="Nodejs"/>
                        </div>
                    </Section>

                    <Button title="Cadastrar"/>
                </Container>
            </main>
        </>
    )
}

export default Details;