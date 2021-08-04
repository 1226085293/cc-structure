import mvvm_view_model_base from "./mvvm_view_model_base";

const {ccclass, property} = cc._decorator;

@ccclass
abstract class mvvm_view_base<VMT extends mvvm_view_model_base<any, any>> extends cc.Component {
    constructor(...args_as_: any[]) {
        super();
        this.init(arguments[0]);
    }
    /* ***************public*************** */
    public view_model: VMT;
    /* -------------------------------segmentation------------------------------- */
    onEnable() {
        this.view_model.bind(<any>this);
    }
    onDisable() {
        this.view_model.unbind(<any>this);
    }
    /* ***************功能函数*************** */
    public init(init_: mvvm_view_base.init<VMT>): void {
        if (!init_) {
            return;
        }
        this.view_model = init_.view_model;
    }
}

module mvvm_view_base {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    /*---------class_private */
    /*---------class_public */
    export class init<VMT extends mvvm_view_model_base<any, any>> {
        public view_model: VMT;
    }
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvvm_view_base;