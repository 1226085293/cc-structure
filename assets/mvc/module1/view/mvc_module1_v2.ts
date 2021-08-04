import mvc_module1 from "../mvc_module1";
import mvc_module1_m from "../model/mvc_module1_m";
import mvc_module1_view_base from "../mvc_module1_view_base";
import mvc_module1_c from "../controller/mvc_module1_c/mvc_module1_c";

const {ccclass, property} = cc._decorator;

@ccclass
export default class mvc_module1_v2<CT extends mvc_module1_c<MT>, MT extends mvc_module1_m<any>> extends mvc_module1_view_base<CT, MT> {
    constructor() {
        super();
        this.init({
            "controller": <CT>mvc_module1.controller1,
        });
    }
    /* ***************属性*************** */
    @property(cc.EditBox)
    edit: cc.EditBox = null;
    @property(cc.Label)
    label: cc.Label = null;
    /* -------------------------------segmentation------------------------------- */
    /* ***************功能函数*************** */
    set_label(): void {
        this.label.string = this.data.input_s + "_view2";
    }
    /* ***************事件*************** */
    public input() {
        cc.director.emit("input", this.edit.string);
        // 或（建议上，可避免调用函数不存在）
        // this.controller.event_input(this.edit.string);
    }
}
