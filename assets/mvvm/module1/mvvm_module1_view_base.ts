import mvvm_view_model_base from "../base/mvvm_view_model_base";
import mvvm_view_base from "../base/mvvm_view_base";

const {ccclass, property} = cc._decorator;

@ccclass
abstract class mvvp_module1_view_base<VMT extends mvvm_view_model_base<any, any>> extends mvvm_view_base<VMT> {
    public abstract set_label(value_s_: string): void;
}

export default mvvp_module1_view_base;