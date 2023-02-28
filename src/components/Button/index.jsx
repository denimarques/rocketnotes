import { Content } from "./style.js"
export default function Button({ title, loading, ...rest }){
    return(
        <Content type="button" disabled={ loading } {...rest}>
            { loading ? "Loading..." : title }
        </Content>
    );
}