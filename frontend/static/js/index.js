import Dashboard from "./views/Dashboard.js";

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard},
        // { path: "/posts", view: () => console.log("View posts")},
        // { path: "/settings", view: () => console.log("View settings")},
    ]

    // Test routes for potential matches
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    // Find the exact match
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // If there is no exact match, return to the home page
    if(!match) {
        match = {
            route: routes[0]
        }
    }

    // 
    const view = new match.route.view()

    document.querySelector("#app").innerHTML = await view.getHtml()
    
}

// update page on using browser back/forward buttons
window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    // Prevent page reload on navigation, if link has "[data-link]"
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
});