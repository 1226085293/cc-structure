import mvp_presenter_base from "../base/mvp_presenter_base";
import mvp_view_base from "../base/mvp_view_base";

const {ccclass, property} = cc._decorator;

@ccclass
abstract class mvp_module1_view_base<PT extends mvp_presenter_base<any, any>> extends mvp_view_base<PT> {
    public abstract set_label(value_s_: string): void;
}

export default mvp_module1_view_base;