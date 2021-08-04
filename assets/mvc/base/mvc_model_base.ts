import mvc_view_base from "./mvc_view_base";

class mvc_model_base<VT extends mvc_view_base<any, any>> {
    /* ***************private*************** */
    private _view_as: VT[] = [];
    /* -------------------------------segmentation------------------------------- */
    //@ts-ignore
    protected _view<T extends keyof VT>(key_: keyof VT & T): VT[T] {
        return <any>((...args_as: any[])=> {
            this._view_as.forEach(v1=> {
                v1[<any>key_](...args_as);
            });
        });
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

export default mvc_model_base;