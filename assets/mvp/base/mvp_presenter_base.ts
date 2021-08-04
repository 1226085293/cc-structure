import mvp_model_base from "./mvp_model_base";
import mvp_view_base from "./mvp_view_base";

class mvp_presenter_base<MT extends mvp_model_base, VT extends mvp_view_base<any>> {
    constructor(init_?: mvp_presenter_base.init<MT>) {
        this.init(init_);
    }
    /* ***************private*************** */
    private _view_as: VT[] = [];
    /* ***************public*************** */
    public data: MT;
    /* -------------------------------segmentation------------------------------- */
    /* ***************功能函数*************** */
    //@ts-ignore
    protected _view<T extends keyof VT>(key_: keyof VT & T): VT[T] {
        return <any>((...args_as: any[])=> {
            this._view_as.forEach(v1=> {
                v1[<any>key_](...args_as);
            });
        });
    }
    public init(init_: mvp_presenter_base.init<MT>): void {
        if (!init_) {
            return;
        }
        this.data = init_.data;
    }
    public bind(view_: VT) {
        this._view_as.push(<any>view_);
    }
    public unbind(view_: VT) {
        let index_n = this._view_as.findIndex(v1=> v1.uuid === view_.uuid);
        if (index_n !== -1) {
            this._view_as.splice(index_n, 1);
        }
    }
}

module mvp_presenter_base {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    /*---------class_private */
    /*---------class_public */
    export class init<MT extends mvp_model_base> {
        data: MT;
    }
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvp_presenter_base;