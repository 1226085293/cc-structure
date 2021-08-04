import mvc_model_base from "./mvc_model_base";

class mvc_controller_base<MT extends mvc_model_base<any>> {
    constructor(init_?: mvc_controller_base.init<MT>) {
        this.init(init_);
    }
    /* ***************public*************** */
    public data: MT;
    /* -------------------------------segmentation------------------------------- */
    /* ***************功能函数*************** */
    public init(init_: mvc_controller_base.init<MT>): void {
        if (!init_) {
            return;
        }
        this.data = init_.data;
    }
}

module mvc_controller_base {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    /*---------class_private */
    /*---------class_public */
    export class init<MT extends mvc_model_base<any>> {
        data: MT;
    }
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvc_controller_base;