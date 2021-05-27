// import pinyin from "pinyin"
import { pinyin } from 'pinyin-pro';

class Utils {
    // 城市数据解析
    Analyze(newCity: string) {
        if (newCity == "中国") {
            return "china"
        }
        newCity = newCity.replace('省', "")
        const pinyinCity = pinyin(newCity, { toneType: 'none' })
        let str = Array.from(pinyinCity).toString()
        str = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "")
        return str
    }

    MapArrAnalyze(mapArr: any[]) {
        const Arr: object[] = []
        for (let index = 0; index < mapArr.length; index++) {
            const obj = {
                name: mapArr[index].name,
                selected: mapArr[index].selected,
                agentsNum: mapArr[index].agentsNum,
            }
            Arr.push(obj)
        }
        return Arr
    }
}
const newUtils = new Utils()
export default newUtils