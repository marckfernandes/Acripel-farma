import Toolbar from "../Toolbar";
import { icones } from "../Icones/icones";
import './UserToolbar.css'

const UserToolbar = () => {
    const ToolbarItems = [
        {
            iconPaths: icones.user,
            text1: "Olá faça seu login",
            text2: "Sua conta",
            iconClassName: "user-icon",
            textsClassName: "user-texts",
            text1ClassName: "user-text1",
            text2ClassName: "user-text2"
        },
        {
            iconPaths: icones.order,
            text1: "Meus",
            text2: "pedidos",
            iconClassName: "order-icon",
            textsClassName: "order-texts",
            text1ClassName: "order-text1",
            text2ClassName: "order-text2"
        },
        {
            iconPaths: icones.bag,
            text1: "0 / Itens",
            text2: "R$ 0,00",
            iconClassName: "bag-icon",
            textsClassName: "bag-texts",
            text1ClassName: "bag-text1",
            text2ClassName: "bag-text2"
        }
    ];

    return(
        <div>
            <Toolbar items={ToolbarItems} toolbarClassName="main-toolbar" />
        </div>
    );
};

export default UserToolbar