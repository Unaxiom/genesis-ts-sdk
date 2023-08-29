import ***REMOVED*** FormFieldDatumHistoryRequest, FormFieldDatumList ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each form
 *
 * @generated from service Genesis.FormsService
 */
export declare const FormsService: ***REMOVED***
    readonly typeName: "Genesis.FormsService";
    readonly methods: ***REMOVED***
        /**
         * View the historical values of the given form data
         *
         * @generated from rpc Genesis.FormsService.ViewFormDataHistory
         */
        readonly viewFormDataHistory: ***REMOVED***
            readonly name: "ViewFormDataHistory";
            readonly I: typeof FormFieldDatumHistoryRequest;
            readonly O: typeof FormFieldDatumList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=forms_connect.d.ts.map