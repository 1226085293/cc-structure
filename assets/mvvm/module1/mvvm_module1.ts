import mvvm_module1_vm from "./view_model/mvvm_module1_vm";
import mvvm_module1_m from "./model/mvvm_module1_m";

module mvvm_module1 {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    const model1 = new mvvm_module1_m();
    export const view_model = new mvvm_module1_vm({ "data": model1 });
    /*---------class_private */
    /*---------class_public */
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvvm_module1;