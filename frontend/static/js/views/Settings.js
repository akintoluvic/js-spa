import BaseView from "./BaseView.js";

export default class Settings extends BaseView {
    constructor() {
        super()
        this.setTitle("Settings")
    }

    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>
                All your Settings go here
            </p>
        `
    }
}