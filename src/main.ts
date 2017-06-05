import * as m from "mithril"
import {version} from "./version"

class Layout {
    view(vnode: any): m.Vnode<{}, {}> {
        return(m("div", "Hello World"))        
    }
}


class MyApp {
    run() {
        console.log("app version : ", version)
        m.mount(document.body, Layout)
    }
}

let app: MyApp = new MyApp()

app.run()
