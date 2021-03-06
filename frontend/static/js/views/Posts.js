import BaseView from "./BaseView.js";

export default class Posts extends BaseView {
    constructor(params) {
        super(params)
        this.setTitle("Posts")
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>
                All your posts here
            </p>
        `
    }
}