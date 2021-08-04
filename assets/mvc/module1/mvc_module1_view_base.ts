import mvc_controller_base from "../base/mvc_controller_base";
import mvc_model_base from "../base/mvc_model_base";
import mvc_view_base from "../base/mvc_view_base";

const {ccclass, property} = cc._decorator;

@ccclass
abstract class mvc_module1_view_base<CT extends mvc_controller_base<MT>, MT extends mvc_model_base<any>> extends mvc_view_base<CT, MT> {
    public abstract set_label(value_s_: string): void;
}

export default mvc_module1_view_base;