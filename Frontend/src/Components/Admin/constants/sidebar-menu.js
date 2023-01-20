import DashboardIcon from "../assets/icons/dashboard.svg"
import ShippingIcon from "../assets/icons/shipping.svg"
import UserIcon from "../assets/icons/user.svg"

const sidebar_menu = [
    {
        id:1,
        icon:DashboardIcon,
        path:'dashboard',
        title:'Dashboard'
    },
    {
        id:3,
        icon:ShippingIcon,
        path:'products',
        title:'products'
    },{
        id:4,
        icon:UserIcon,
        path:'users/list',
        title:'All Users'
    }

]

export default sidebar_menu