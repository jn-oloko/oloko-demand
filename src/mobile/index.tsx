import React,{Suspense } from "react";
import routes from './routes';
import "./index.css"
import 'antd-mobile/es/global'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from "antd-mobile";
import zhCN from 'antd-mobile/es/locales/zh-CN'
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
