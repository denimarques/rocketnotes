import {Content, Logout, Profile} from "./style.js";
import { RiShutDownLine } from "react-icons/ri"

function Header(){
    return(
        <Content>
            <Profile>
                <img className="rounded-full w-16 h-16" src="https://github.com/denimarques.png" alt=""/>

                <div className="grid">
                    <span className="text-gray_100_util">Welcome</span>
                    <strong className="text-lg text-white_util">Deniul Marques</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Content>
    )
}

export default Header;