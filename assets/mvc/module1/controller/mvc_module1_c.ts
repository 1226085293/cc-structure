import mvc_controller_base from "../../base/mvc_controller_base";
import mvc_module1_m from "../model/mvc_module1_m";

class mvc_module1_c<MT extends mvc_module1_m<any>> extends mvc_controller_base<MT> {
    /* ***************public*************** */
    /* -------------------------------segmentation------------------------------- */
    init(init_: mvc_controller_base.init<MT>) {
        super.init(init_);
        cc.director.on("input", this.event_input, this);
    }
    /* ***************事件*************** */
    public event_input(input_s_: string): void {
        this.data.input_s = input_s_;
    }
}

export default mvc_module1_c;