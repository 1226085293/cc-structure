class mvvm_model_base {
    /* ***************private*************** */
    private _bind_map: Map<any, mvvm_model_base.bind_data> = new Map;
    /* -------------------------------segmentation------------------------------- */
    public bind<T extends keyof this>(key_: T, func_: (new_value?: this[T], value?: this[T])=> void, target_: any): void {
        let bind_data = this._bind_map.get(key_);
        if (!bind_data) {
            bind_data = new mvvm_model_base.bind_data;
            bind_data.key = key_;
            bind_data.desc = Object.getOwnPropertyDescriptor(this, key_);
            let get_f = ()=> bind_data.desc.get ? bind_data.desc.get() : bind_data.desc.value;
            let set_f = (new_value: any)=> {
                if (bind_data.desc.set) {
                    bind_data.desc.set(new_value);
                } else {
                    bind_data.desc.value = new_value;
                }
            };
            Object.defineProperty(
                this,
                key_,
                {
                    "get": get_f,
                    "set": (new_value)=> {
                        if (get_f() === new_value) {
                            return;
                        }
                        bind_data.cb_as.forEach(v1=> {
                            v1.func_f.call(v1.target, new_value, get_f());
                        });
                        set_f(new_value);
                    }
                }
            );
            this._bind_map.set(key_, bind_data);
        }
        bind_data.cb_as.push({
            "func_f": func_,
            "target": target_,
        });
    }
    public unbind<T extends keyof this>(key_: T, func_: (new_value: this[T], value: this[T])=> void, target_: any): void {
        let bind_data = this._bind_map.get(key_);
        if (!bind_data) {
            return;
        }
        let index_n = bind_data.cb_as.findIndex(v1=> v1.func_f === func_ && v1.target === v1.target);
        if (index_n === -1) {
            return;
        }
        bind_data.cb_as.splice(index_n, 1);
        // 恢复get/set
        if (!bind_data.cb_as.length) {
            Object.defineProperty(this, bind_data.key, bind_data.desc);
            this._bind_map.delete(key_);
        }
    }
}

module mvvm_model_base {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    /*---------class_private */
    /*---------class_public */
    export class call_back {
        public target: any;
        public func_f: Function;
    }
    export class bind_data {
        public key: any;
        public desc: PropertyDescriptor;
        public cb_as: call_back[] = [];
    }
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvvm_model_base;