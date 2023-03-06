import { Content } from "./style";

export default function Input({icon: Icon, ...rest}){
    return(
        <Content>
            {Icon && <Icon />}
            <input {...rest}/>
        </Content>
    )
}