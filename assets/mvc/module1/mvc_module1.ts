import mvc_module1_c from "./controller/mvc_module1_c/mvc_module1_c";
import mvc_module1_m from "./model/mvc_module1_m";

module mvc_module1 {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    const model1 = new mvc_module1_m();
    export const controller1 = new mvc_module1_c({ "data": model1 });
    /*---------class_private */
    /*---------class_public */
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvc_module1;