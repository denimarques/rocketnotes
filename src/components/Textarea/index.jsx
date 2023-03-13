import { Content } from "./style";

export default function Textarea({icon: Icon, ...rest}){
    return(
        <Content>
            {Icon && <Icon />}
            <textarea {...rest}></textarea>
        </Content>
    )
}