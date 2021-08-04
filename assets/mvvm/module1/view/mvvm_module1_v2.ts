import mvvm_module1 from "../mvvm_module1";
import mvvm_module1_vm from "../view_model/mvvm_module1_vm";
import mvvp_module1_view_base from "../mvvm_module1_view_base";

const {ccclass, property} = cc._decorator;

@ccclass
export default class mvvm_module1_v2<VMT extends mvvm_module1_vm<any, any>> extends mvvp_module1_view_base<VMT> {
    constructor() {
        super();
        this.init({
            "view_model": <VMT>mvvm_module1.view_model,
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
        // this.view_model.event_input(this.edit.string);
    }
}
