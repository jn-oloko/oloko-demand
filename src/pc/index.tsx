import React,{Suspense } from "react";
import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css"
import { ConfigProvider } from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
const Pc:React.FC<{}>=()=>{
    return (
        <>
        <ConfigProvider locale={zhCN}>
         <BrowserRouter basename='/oloko-demand'>
         <Routes>
          {routes.map((item, i) => {
            return (<Route key={i} path={item.path} element={
              <Suspense fallback={<div>
                路由加载中...
              </div>}>
                <item.element></item.element>
              </Suspense>
            }>
            </Route>)
          })}
        </Routes>
         </BrowserRouter>
         </ConfigProvider>
        </>
    )
}
export default Pc
