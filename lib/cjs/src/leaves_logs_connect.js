"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file leaves_logs.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.LeavesLogsService = void 0;
const leaves_logs_pb_js_1 = require("./leaves_logs_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the common methods applicable on each record
 *
 * Create and send for verification
 * rpc Create (LeavesLogsServiceCreateRequest) returns (Identifier);
 *
 * @generated from service Genesis.LeavesLogsService
 */
exports.LeavesLogsService = ***REMOVED***
    typeName: "Genesis.LeavesLogsService",
    methods: ***REMOVED***
        /**
         * ------------------------------------------------------
         * Search operations are listed below
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.LeavesLogsService.Filter
         */
        filter: ***REMOVED***
            name: "Filter",
            I: leaves_logs_pb_js_1.LeavesLogsServiceFilterReq,
            O: leaves_logs_pb_js_1.LeavesLogsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Count leaves of employee
         *
         * @generated from rpc Genesis.LeavesLogsService.CountEmployeeLeaves
         */
        countEmployeeLeaves: ***REMOVED***
            name: "CountEmployeeLeaves",
            I: leaves_logs_pb_js_1.LeavesLogsCountEmployeeLeavesRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
***REMOVED***
***REMOVED***;