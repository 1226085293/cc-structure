import mvp_presenter_base from "../../base/mvp_presenter_base";
import mvp_module1_m from "../model/mvp_module1_m";
import mvp_module1_view_base from "../mvp_module1_view_base";

class mvp_module1_p<MT extends mvp_module1_m, VT extends mvp_module1_view_base<any>> extends mvp_presenter_base<MT, VT & mvp_module1_view_base<any>> {
    /* ***************public*************** */
    /* -------------------------------segmentation------------------------------- */
    public init(init_: mvp_presenter_base.init<MT>): void {
        super.init(init_);
        cc.director.on("input", this.event_input, this);
    }
    /* ***************事件*************** */
    public event_input(input_s_: string): void {
        this.data.input_s = input_s_;
        this._view("set_label")(this.data.input_s);
    }
}

export default mvp_module1_p;