import { Content, H2} from "./style.js"
export default function Section({title, children}){
    return (
        <Content>
            <H2>{title}</H2>
            {children}
        </Content>
    )
}