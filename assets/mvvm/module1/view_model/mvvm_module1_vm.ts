import mvvm_view_model_base from "../../base/mvvm_view_model_base";
import mvvm_module1_m from "../model/mvvm_module1_m";
import mvvm_module1_view_base from "../mvvm_module1_view_base";

class mvvm_module1_vm<MT extends mvvm_module1_m, VT extends mvvm_module1_view_base<any>> extends mvvm_view_model_base<MT & mvvm_module1_m, VT & mvvm_module1_view_base<any>> {
    /* ***************public*************** */
    public data: MT;
    /* -------------------------------segmentation------------------------------- */
    public init(init_: mvvm_view_model_base.init<MT>): void {
        super.init(init_);
        cc.director.on("input", this.event_input, this);
    }
    public bind(view_: VT) {
        super.bind(view_);
        this.bind_data("input_s", this.data_input_s, view_);
    }
    public unbind(view_: VT) {
        super.unbind(view_);
        this.unbind_data("input_s", this.data_input_s, view_);
    }
    /* ***************事件*************** */
    public event_input(input_s_: string): void {
        this.data.input_s = input_s_;
    }
    public data_input_s(this: VT, value_s_: string): void {
        this.set_label(value_s_);
    }
}

export default mvvm_module1_vm;