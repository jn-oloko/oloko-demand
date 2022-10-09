import React from "react";
import { Button,DatePicker } from "antd";
import moment from "moment";
const Page1:React.FC<{}>=()=>{
    return (
        <>
           <DatePicker value={moment()} />
        电脑page1 <Button type="primary">Button</Button>
        </>
    )
}
export default Page1