import { Content } from "./style";

export default function Index({icon: Icon, ...rest}){
    return(
        <Content>
            {Icon && <Icon />}
            <input {...rest}/>
        </Content>
    )
}