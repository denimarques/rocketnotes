import {Base, Content, Container, Form} from "./style";
import Header from "../../components/Header";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Section from "../../components/Section/";
import {IoAdd, IoClose} from "react-icons/io5";
import Button from "../../components/Button/index.jsx";

export default function New() {
    return (
        <Base>
            <Header/>
            <Content>
                <Container>
                    <h1>Criar nota</h1>
                    <a href="/"><ButtonText title="Voltar"/></a>
                </Container>
                <Form>
                    <Input placeholder="Titulo"/>
                    <Textarea placeholder="Observações" cols="5" rows="5"/>
                </Form>

                <Section title="Links Úteis">
                    <ul className="my-5">
                        <li className="w-full p-5 flex my-2 items-center rounded-xl justify-between bg-background_900">
                            <span>https://www.rocketseat.com.br/</span>
                            <IoClose className="text-red-700 text-2xl cursor-pointer"/>
                        </li>
                    </ul>

                    <a href="/" className="w-full p-5 flex my-2 items-center rounded-xl justify-between border-dashed border-2 border-background_700 text-gray_100_util cursor-pointer">
                        <p>Novo link</p>
                        <IoAdd className="text-orange_util text-2xl cursor-pointer"/>
                    </a>
                </Section>
                <Section title="Marcadores">
                    <div className="flex gap-5 flex-wrap my-5">
                        <ul className="flex gap-5">
                            <li className="p-5 flex gap-4 my-2 rounded-xl bg-background_900">
                                <span>React</span>
                                <IoClose className="text-red-700 text-2xl cursor-pointer"/>
                            </li>
                            <li className="p-5 flex gap-4 my-2 rounded-xl bg-background_900">
                                <span>Express</span>
                                <IoClose className="text-red-700 text-2xl cursor-pointer"/>
                            </li>
                        </ul>

                        <a href="/" className="p-5 flex gap-5 my-2 items-center rounded-xl justify-between border-dashed border-2 border-background_700 text-gray_100_util cursor-pointer">
                            <p>Novo marcador</p>
                            <IoAdd className="text-orange_util text-2xl"/>
                        </a>
                    </div>
                </Section>
                <Button title="Salvar" />
            </Content>
        </Base>
    );
}