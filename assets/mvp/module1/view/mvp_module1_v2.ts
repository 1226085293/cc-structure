import mvp_module1 from "../mvp_module1";
import mvp_module1_p from "../presenter/mvp_module1_p";
import mvp_module1_view_base from "../mvp_module1_view_base";

const {ccclass, property} = cc._decorator;

@ccclass
export default class mvp_module1_v2<PT extends mvp_module1_p<any, any>> extends mvp_module1_view_base<PT> {
    constructor() {
        super();
        this.init({
            "controller": <PT>mvp_module1.presenter1,
        });
    }
    /* ***************属性*************** */
    @property(cc.EditBox)
    edit: cc.EditBox = null;
    @property(cc.Label)
    label: cc.Label = null;
    /* -------------------------------segmentation------------------------------- */
    /* ***************功能函数*************** */
    public set_label(value_s_: string): void {
        this.label.string = value_s_ + "_view2";
    }
    /* ***************事件*************** */
    public input() {
        cc.director.emit("input", this.edit.string);
        // 或（建议上，可避免调用函数不存在）
        // this.presenter.event_input(this.edit.string);
    }
}
