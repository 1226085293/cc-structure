import mvc_controller_base from "./mvc_controller_base";
import mvc_model_base from "./mvc_model_base";

const {ccclass, property} = cc._decorator;

@ccclass
abstract class mvc_view_base<CT extends mvc_controller_base<any>, MT extends mvc_model_base<any>> extends cc.Component {
    constructor(...args_as_: any[]) {
        super();
        this.init(arguments[0]);
    }
    /* ***************private*************** */
    private _data: MT;
    private _controller: CT;
    /* ***************public*************** */
    /* -------------------------------segmentation------------------------------- */
    onEnable() {
        this._data.bind(<any>this);
    }
    onDisable() {
        this._data.unbind(<any>this);
    }
    /* ***************功能函数*************** */
    public init(init_: mvc_view_base.init<CT>): void {
        if (!init_) {
            return;
        }
        this._controller = init_.controller;
        this._data = this._controller.data;
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