import {Content, Logout, Profile} from "./style.js";
import { RiShutDownLine } from "react-icons/ri"

export default function Header(){
    return(
        <Content>
            <Profile>
                <a href="/profile"><img className="rounded-full w-16 h-16" src="https://github.com/denimarques.png" alt=""/></a>

                <div className="grid">
                    <span className="text-gray_100_util">Bem Vindo,</span>
                    <strong className="text-lg text-white_util">Deniul Marques</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Content>
    )
}

