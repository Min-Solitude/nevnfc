import config from '../configs'
import MainLayout from '../layouts/MainLayout'
import Home from '../screen/Home'
import NFC from '../screen/Nfc'
import Scan from '../screen/Scan'
import Ticket from '../screen/Ticket'

// All Page of Website
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: null
    },
    {
        path: config.routes.ticket,
        component: Ticket,
        layout: MainLayout
    },
    {
        path: config.routes.scan,
        component: Scan,
        layout: MainLayout
    },
    {
        path: config.routes.nfc,
        component: NFC,
        layout: MainLayout
    }
]
const privateRoutes = []
export { privateRoutes, publicRoutes }
