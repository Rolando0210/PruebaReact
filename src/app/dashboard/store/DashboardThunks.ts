import { SideBarMenuKey } from "../../../shared/constants";
import { changeKey, refreshKey } from "./DashboardSlice";

export const changeSiderKey = (data: any) => {
    return (dispatch: any) => {
        localStorage.setItem("sideKey", data);
        dispatch(changeKey(data));
    };
}

export const refreshSiderKey = () => {
    return (dispatch: any) => {
        let key: any = localStorage.getItem("sideKey");
        if (!key) {
            key = SideBarMenuKey.initialPage.toString();
        }
        dispatch(refreshKey(key));
    };
};