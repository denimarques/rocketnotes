import { Base } from "./style";
import Input from "../../components/Input";
import Form from "../../components/Form";
import { CiUser } from "react-icons/ci";

export default function SignIn(){
    return(
        <Base>
            <Form>
                <h1>Rocket Notes</h1>
                <Input icon={CiUser} />
            </Form>
        </Base>
    );
}