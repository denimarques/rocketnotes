import { Content } from "./style.js";

export default function ButtonText({title, isActive=false, ...rest}) {
    return (
        <Content type="button" isActive={isActive} {...rest}>{title}</Content>
    );
};