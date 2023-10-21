import {expect, $, browser} from '@wdio/globals'
import PreferencePage from '../pageobjects/preference.page.js'
import SideMenu from '../pageobjects/sideMenu.js'

describe('Preference Page', () => {
    it('should change view', async () => {

        await PreferencePage.open()
        await PreferencePage.defaultViewDropDown.selectOption('Month')
        
        expect(await PreferencePage.getSelectedViewOption('Month')).toBeDisplayed()
    })
    it('should click on div button', async () => {
        
        await PreferencePage.open()
        await SideMenu.patientsBtn.click()
        
        expect(browser).toHaveUrlContaining('patients')
    })
})

