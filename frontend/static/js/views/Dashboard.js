import BaseView from "./BaseView.js";

export default class Dashboard extends BaseView {
    constructor() {
        super()
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
            <h1>Welcome to Dashboard</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec eget nunc euismod, porttitor nisl eu, congue nunc.
            </p>
            <p>
                <a href="/posts" data-link>View posts</a>
            </p>
        `
    }
}