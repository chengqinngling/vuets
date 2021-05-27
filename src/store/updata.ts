import navMenu from "./navMenu"
let newObj = Object.assign(navMenu)


function UPstat() {
    let olState = sessionStorage.getItem("state")
    if (olState != null) {
        newObj = JSON.parse(olState)
    }
    sessionStorage.setItem("state", JSON.stringify(newObj))
}

export {
    newObj,
    UPstat
}