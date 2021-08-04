import mvp_module1_p from "./presenter/mvp_module1_p";
import mvp_module1_m from "./model/mvp_module1_m";

module mvp_module1 {
    /*---------enum_private */
    /*---------enum_public */
    /*---------var_private */
    /*---------var_public */
    const model1 = new mvp_module1_m();
    export const presenter1 = new mvp_module1_p({ "data": model1 });
    /*---------class_private */
    /*---------class_public */
    /*---------function_private */
    /*---------function_public */
    /*---------logic */
}

export default mvp_module1;