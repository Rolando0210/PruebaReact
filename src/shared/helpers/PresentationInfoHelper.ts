export const changeKeyHelper = (selectSideKey: any, actualSideKeyProps: string, chanKeyMethodDispatch: any, callback?: Function) => {
    let key: string = selectSideKey.toString();
    if (actualSideKeyProps !== key) {
        chanKeyMethodDispatch(key);
        callback?.();
    }
};