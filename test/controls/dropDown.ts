import { $ } from '@wdio/globals'

export class Dropdown {
    selector: ChainablePromiseElement

    constructor(
        selector: ChainablePromiseElement
    ) {
        this.selector = selector
    }
    selectOption = async (value:string) => {
        const option = $(`li[data-value=${value}]`)
        await this.selector.click()
        await option.waitForEnabled({ timeout: 3000 })
        await option.click()
    }
}
