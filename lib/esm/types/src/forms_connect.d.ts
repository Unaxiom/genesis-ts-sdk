import { FormFieldDatumHistoryRequest, FormFieldDatumList } from "./forms_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each form
 *
 * @generated from service Genesis.FormsService
 */
export declare const FormsService: {
    readonly typeName: "Genesis.FormsService";
    readonly methods: {
        /**
         * View the historical values of the given form data
         *
         * @generated from rpc Genesis.FormsService.ViewFormDataHistory
         */
        readonly viewFormDataHistory: {
            readonly name: "ViewFormDataHistory";
            readonly I: typeof FormFieldDatumHistoryRequest;
            readonly O: typeof FormFieldDatumList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=forms_connect.d.ts.map