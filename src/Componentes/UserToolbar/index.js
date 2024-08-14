import Toolbar from "../Toolbar";
import { icons } from "../Icons/icons";
import './UserToolbar.css'

const UserToolbar = () => {
    const ToolbarItems = [
        {
            iconPaths: icons.user,
            text1: "Olá faça seu login",
            text2: "Sua conta",
            iconClassName: "user-icon",
            textsClassName: "user-texts",
            text1ClassName: "user-text1",
            text2ClassName: "user-text2"
        },
        {
            iconPaths: icons.order,
            text1: "Meus",
            text2: "pedidos",
            iconClassName: "order-icon",
            textsClassName: "order-texts",
            text1ClassName: "order-text1",
            text2ClassName: "order-text2"
        }
    ];

    return(
        <div>
            <Toolbar items={ToolbarItems} toolbarClassName="main-toolbar" />
        </div>
    );
};

export default UserToolbar