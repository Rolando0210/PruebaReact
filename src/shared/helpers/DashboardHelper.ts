import { AppUrl, SideBarMenuKey } from "../constants";

export const sidebarByUrl = (urlLocation: string) => {
  if (urlLocation === AppUrl.dashboard) {
    return SideBarMenuKey.initialPage.toString();
  } else {
    return sidebarByUrlInclude(urlLocation);
  }
};

const sidebarByUrlInclude = (urlLocation: string) => {
  if (urlLocation.includes(AppUrl.contacto)) {
    return SideBarMenuKey.contacto.toString();
  }else if (urlLocation.includes(AppUrl.transacciones)) {
    return SideBarMenuKey.transacciones.toString();
  } else {
    return SideBarMenuKey.montos.toString();
  }
}
