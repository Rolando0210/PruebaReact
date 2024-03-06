export enum AppConstants {
    APP_NAME = "Credit Suisse",
    urlBase = "/creditsuisse",
}

export enum AxiosErrorType {
    ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE",
    ERR_BAD_OPTION = "ERR_BAD_OPTION",
    ECONNABORTED = "ECONNABORTED",
    ETIMEDOUT = "ETIMEDOUT",
    ERR_NETWORK = "ERR_NETWORK",
    ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS",
    ERR_DEPRECATED = "ERR_DEPRECATED",
    ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE",
    ERR_BAD_REQUEST = "ERR_BAD_REQUEST",
    ERR_CANCELED = "ERR_CANCELED",
    ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT",
    ERR_INVALID_URL = "ERR_INVALID_URL"
}

export enum SideBarMenuKey {
    infoGroupRol,
    initialPage,
    contacto,
    transacciones,
    montos
}

export enum AppUrl {
    dashboard = "/dashboard",
    contacto = "/groups/contacto",
    transacciones = "/groups/transacciones",
    montos = "/groups/montos"
}

export enum PrivilegesType {
    NONE = "none",
    ALL = "all",
}