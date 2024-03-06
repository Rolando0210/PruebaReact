import React from "react";
import {Result} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

type Props = {
    title?: string,
};

const LoadingPage: React.FC<Props> = (props) => {
    const title = props.title ? props.title : "Cargando";
    return <Result
        icon={<LoadingOutlined/>}
        title={title}/>;
}

export default LoadingPage;
