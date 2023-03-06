import {Content} from "./style";
import Tag from "../Tags";

export default function Note({data, ...rest}) {
    return (
        <Content {...rest}>
            <h1>{data.name}</h1>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
        </Content>
    );
}