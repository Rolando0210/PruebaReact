import {Component} from 'react';
import {Provider} from "react-redux";
import {ConfigProvider} from 'antd';
import esES from 'antd/locale/es_ES';
import {setupStore} from '../shared/store/Store'
import AppRoute from "../shared/routes/AppRoute.tsx";

class MainApp extends Component {
    render() {
        return (
            <Provider store={setupStore()}>
                <ConfigProvider locale={esES}>
                    <AppRoute/>
                </ConfigProvider>
            </Provider>)
    }
}

export default MainApp;