import React from "react";
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";
import {useAppSelector} from "../store/Hooks";
import {VERSION_PROJECT} from "../../version";

const {Footer} = Layout;

type Props = {
    children?: any,
};

const ResultPage: React.FC<Props> = (props) => {

    const identityValidation = useAppSelector((state) => state.identityValidateWorkflow.identityValidation);

    const appMode = "App: " + import.meta.env.MODE + " - ";
    const transactionId = identityValidation?.validationId ? "Código: " + identityValidation.validationId : null;

    return (
        <Layout className="dashboard-layout">
            <Layout className="dashboard-component-layout">
                <Content className="dashboard-component-content">
                    {props.children != null
                        ? props.children
                        : ""
                    }
                </Content>
                <Footer className={"footer-digishot"}>
                    <div className={"footer-digishot-detail"}>
                        {import.meta.env.MODE !== "production" &&
                            <>
                                {appMode}
                            </>
                        }
                        {transactionId} -
                        VersiónApp: {VERSION_PROJECT}
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
}

export default ResultPage;