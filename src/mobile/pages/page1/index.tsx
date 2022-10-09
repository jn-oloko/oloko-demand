import React from "react";
import { Button ,Card,Tag,Dialog,Calendar} from "antd-mobile";
const Page1:React.FC<{}>=()=>{
    return (
        <>
      
          <Button
            block
            onClick={() =>
              Dialog.alert({
                content: '人在天边月上明',
                onConfirm: () => {
                  console.log('Confirmed')
                },
              })
            }
          >
           小对话框
          </Button>
          <Calendar />
        </>
    )
}
export default Page1