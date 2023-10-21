import Page from './page.ts'
import { Button } from '../controls/button.js'

class sideMenu extends Page {
    get patientsBtn () {
        return new Button("div[routerlink='/patients']")
    }

}

export default new sideMenu()
