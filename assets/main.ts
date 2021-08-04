// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class main extends cc.Component {
    public btn_mvc(): void {
        cc.director.loadScene("mvc");
    }
    public btn_mvp(): void {
        cc.director.loadScene("mvp");
    }
    public btn_mvvm(): void {
        cc.director.loadScene("mvvm");
    }
}
