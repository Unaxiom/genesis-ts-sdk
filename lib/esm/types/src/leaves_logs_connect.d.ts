import { LeavesLogsCountEmployeeLeavesRequest, LeavesLogsList, LeavesLogsServiceFilterReq } from "./leaves_logs_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CountResponse } from "./base_pb.js";
/**
 *
 * Describes the common methods applicable on each record
 *
 * Create and send for verification
 * rpc Create (LeavesLogsServiceCreateRequest) returns (Identifier);
 *
 * @generated from service Genesis.LeavesLogsService
 */
export declare const LeavesLogsService: {
    readonly typeName: "Genesis.LeavesLogsService";
    readonly methods: {
        /**
         * ------------------------------------------------------
         * Search operations are listed below
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.LeavesLogsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof LeavesLogsServiceFilterReq;
            readonly O: typeof LeavesLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count leaves of employee
         *
         * @generated from rpc Genesis.LeavesLogsService.CountEmployeeLeaves
         */
        readonly countEmployeeLeaves: {
            readonly name: "CountEmployeeLeaves";
            readonly I: typeof LeavesLogsCountEmployeeLeavesRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=leaves_logs_connect.d.ts.map