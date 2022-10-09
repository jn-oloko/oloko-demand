import React from 'react';
const routes=[
    {path:"/",
    element:React.lazy(()=> import("../pages/page1"))
    },
    {path:"/page1",
    element:React.lazy(()=> import("../pages/page1"))
    },
    {path:"/page2",
    element:React.lazy(()=> import("../pages/page2"))
    }
]
export default routes