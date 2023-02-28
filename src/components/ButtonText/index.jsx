import { Content } from "./style.js";

export default function ButtonText({title, ...rest}) {
    return (
        <Content type="button" {...rest}>{title}</Content>
    );
};