import ***REMOVED*** LeavesLogsCountEmployeeLeavesRequest, LeavesLogsList, LeavesLogsServiceFilterReq ***REMOVED*** from "./leaves_logs_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** CountResponse ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the common methods applicable on each record
 *
 * Create and send for verification
 * rpc Create (LeavesLogsServiceCreateRequest) returns (Identifier);
 *
 * @generated from service Genesis.LeavesLogsService
 */
export declare const LeavesLogsService: ***REMOVED***
    readonly typeName: "Genesis.LeavesLogsService";
    readonly methods: ***REMOVED***
        /**
         * ------------------------------------------------------
         * Search operations are listed below
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.LeavesLogsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof LeavesLogsServiceFilterReq;
            readonly O: typeof LeavesLogsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count leaves of employee
         *
         * @generated from rpc Genesis.LeavesLogsService.CountEmployeeLeaves
         */
        readonly countEmployeeLeaves: ***REMOVED***
            readonly name: "CountEmployeeLeaves";
            readonly I: typeof LeavesLogsCountEmployeeLeavesRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=leaves_logs_connect.d.ts.map