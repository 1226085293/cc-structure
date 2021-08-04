import mvc_controller_base from "./mvc_controller_base";
import mvc_model_base from "./mvc_model_base";

const {ccclass, property} = cc._decorator;

@ccclass
abstract class mvc_view_base<CT extends mvc_controller_base<any>, MT extends mvc_model_base<any>> extends cc.Component {
    constructor(...args_as_: any[]) {
        super();
        this.init(arguments[0]);
    }
    /* ***************public*************** */
    public controller: CT;
    public data: MT;
    /* -------------------------------segmentation------------------------------- */
    onEnable() {
        this.data.bind(<any>this);
    }
    onDisable() {
        this.data.unbind(<any>this);
    }
    /* ***************功能函数*************** */
    public init(init_: mvc_view_base.init<CT>): void {
        if (!init_) {
            return;
        }
        this.controller = init_.controller;
        this.data = this.controller.data;
    }
}

module mvc_view_base {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    /*---------class_private */
    /*---------class_public */
    export class init<CT extends mvc_controller_base<any>> {
        public controller: CT;
    }
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvc_view_base;