import { newObj, UPstat } from "./updata"
class State {
    modify(key: string | number, data: any) {
        newObj[key] = data
        sessionStorage.setItem("state", JSON.stringify(newObj))
    }
    init() {
        UPstat()
        return newObj
    }
}
export default State