// import mvc_controller from "./mvc_controller";
import mvc_model_base from "../../base/mvc_model_base";
import mvc_module1_view_base from "../mvc_module1_view_base";

class mvc_module1_m<VT extends mvc_module1_view_base<any, any>> extends mvc_model_base<mvc_module1_view_base<any, any>> {
    /* ***************private*************** */
    private _input_s = "";
    /* ***************public*************** */
    public get input_s() { return this._input_s; }
    public set input_s(value_s_) {
        this._input_s = value_s_;
        this._view("set_label")();
    }
}

export default mvc_module1_m;