export class Button {
    selector: string;
    constructor(
        selector: string
    ) {
        this.selector = selector
    }

    get element() {
        return $(this.selector)
    }

    click = async () => {
        await this.element.click()
    }

    waitForDisplayed = async () => {
        await this.element.waitForDisplayed({ timeout: 5000 })
    }
}
