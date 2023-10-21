import Page from './page.ts'
import { Dropdown } from '../controls/dropDown.js'
import { $$ } from '@wdio/globals'

class PreferencePage extends Page {
    get defaultViewDropDown () {
        return new Dropdown($$("span[role='combobox']")[0] as ChainablePromiseElement)
    }

    getSelectedViewOption (value:string) {
        return $(`option[value=${value}]`)
    }

    public open () {
        return super.open('preference');
    }
}

export default new PreferencePage()
