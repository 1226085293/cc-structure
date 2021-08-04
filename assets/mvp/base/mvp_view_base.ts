import mvp_presenter_base from "./mvp_presenter_base";

const {ccclass, property} = cc._decorator;

@ccclass
abstract class mvp_view_base<PT extends mvp_presenter_base<any, any>> extends cc.Component {
    constructor(...args_as_: any[]) {
        super();
        this.init(arguments[0]);
    }
    /* ***************public*************** */
    public presenter: PT;
    /* -------------------------------segmentation------------------------------- */
    onEnable() {
        this.presenter.bind(<any>this);
    }
    onDisable() {
        this.presenter.unbind(<any>this);
    }
    /* ***************功能函数*************** */
    public init(init_: mvp_view_base.init<PT>): void {
        if (!init_) {
            return;
        }
        this.presenter = init_.controller;
    }
}

module mvp_view_base {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    /*---------class_private */
    /*---------class_public */
    export class init<CT extends mvp_presenter_base<any, any>> {
        public controller: CT;
    }
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvp_view_base;