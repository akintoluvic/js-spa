import BaseView from "./BaseView.js";

export default class PostView extends BaseView {
    constructor(params) {
        super(params)
        this.setTitle("Posts")
    }

    async getHtml() {
        // can use params to call the post api here
        console.log(this.params.id)
        return `
            <h1>Post View</h1>
            <p>
                All your posts here
            </p>
        `
    }
}