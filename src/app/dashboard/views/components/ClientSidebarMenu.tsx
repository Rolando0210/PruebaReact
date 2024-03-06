import { Link } from "react-router-dom";
import { MenuProps } from "antd/es/menu";
import { CgUserList } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  AppUrl,
  PrivilegesType,
  SideBarMenuKey,
} from "../../../../shared/constants";
import {
  dividerItemMenu,
  getItemMenu,
} from "../../../../shared/helpers/MenuTypeHelper";
import { MdBiotech, MdFactCheck } from "react-icons/md";

type MenuItem = Required<MenuProps>["items"][number];

export const ClientMenu = () => {

  const itemsMenu: MenuItem[] = [];

    itemsMenu.push(
      getItemMenu(
        <Link to={AppUrl.contacto}>Contacto</Link>,
        SideBarMenuKey.contacto,
        <CgUserList size={17} />
      ),
      getItemMenu(
        <Link to={AppUrl.transacciones}>Transacciones</Link>,
        SideBarMenuKey.transacciones,
        <HiOutlineUserGroup size={17} />
      ),
      getItemMenu(
        <Link to={AppUrl.montos}>Montos</Link>,
        SideBarMenuKey.montos,
        <MdBiotech size={17} />
        )
    );
  return itemsMenu;
};
