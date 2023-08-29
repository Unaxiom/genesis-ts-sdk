import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the parameters that are part of each form field
 *
 * @generated from message Genesis.FormField
 */
export declare class FormField extends Message<FormField> ***REMOVED***
    /**
     * The ID of the form field
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * The ID of the section that this field belongs to
     *
     * @generated from field: int64 section_id = 2;
     */
    sectionId: bigint;
    /**
     * The type of the field
     *
     * @generated from field: string type = 3;
     */
    type: string;
    /**
     * The name of the field
     *
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * The width of the field
     *
     * @generated from field: string width = 5;
     */
    width: string;
    /**
     * The name of the element
     *
     * @generated from field: string element = 6;
     */
    element: string;
    /**
     * The placeholder that needs to be displayed when the field is empty
     *
     * @generated from field: string placeholder = 7;
     */
    placeholder: string;
    /**
     * The regular expression that is used to validate this field before submission
     *
     * @generated from field: string regex = 8;
     */
    regex: string;
    /**
     * The predefined list of values that can be chosen from
     *
     * @generated from field: repeated string defined_values = 9;
     */
    definedValues: string[];
    /**
     * Denotes if this field is printable (will be deprecated)
     *
     * @generated from field: bool printable = 10;
     */
    printable: boolean;
    /**
     * Denotes if this field is highlighted on the UI (will be deprecated)
     *
     * @generated from field: bool highlightable = 11;
     */
    highlightable: boolean;
    /**
     * Denotes if this field is active
     *
     * @generated from field: bool active = 12;
     */
    active: boolean;
    /**
     * Denotes the timestamp of creation
     *
     * @generated from field: int64 timestamp = 13;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<FormField>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.FormField";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormField;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormField;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormField;
    static equals(a: FormField | PlainMessage<FormField> | undefined, b: FormField | PlainMessage<FormField> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data stored in an individual form field data row of each dynamic form
 *
 * @generated from message Genesis.FormFieldDatum
 */
export declare class FormFieldDatum extends Message<FormFieldDatum> ***REMOVED***
    /**
     * The ID of the record
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * The underlying form field
     *
     * @generated from field: Genesis.FormField form_field = 2;
     */
    formField?: FormField;
    /**
     * The UUID that this field belongs to
     *
     * @generated from field: string ref_uuid = 3;
     */
    refUuid: string;
    /**
     * The username of the person who added this record
     *
     * @generated from field: string added_by = 4;
     */
    addedBy: string;
    /**
     * The value entered by the user
     *
     * @generated from field: string value = 5;
     */
    value: string;
    /**
     * The list of values that have been selected by the user (in case of a checkbox or a dropdown)
     *
     * @generated from field: repeated string selected_values = 6;
     */
    selectedValues: string[];
    /**
     * Denotes if this field requires approval by a competent authority
     *
     * @generated from field: bool need_approval = 7;
     */
    needApproval: boolean;
    /**
     * Denotes if this field is active
     *
     * @generated from field: bool active = 8;
     */
    active: boolean;
    /**
     * Denotes the timestamp of creation
     *
     * @generated from field: int64 timestamp = 9;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<FormFieldDatum>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.FormFieldDatum";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatum;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatum;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatum;
    static equals(a: FormFieldDatum | PlainMessage<FormFieldDatum> | undefined, b: FormFieldDatum | PlainMessage<FormFieldDatum> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data required for creating a dynamic form field entry
 *
 * @generated from message Genesis.FormFieldDatumCreateRequest
 */
export declare class FormFieldDatumCreateRequest extends Message<FormFieldDatumCreateRequest> ***REMOVED***
    /**
     * The ID of the corresponding form field
     *
     * @generated from field: int64 form_field_id = 1;
     */
    formFieldId: bigint;
    /**
     * The value to be stored (for textarea and input)
     *
     * @generated from field: string value = 2;
     */
    value: string;
    /**
     * The list of selected values (for radio, checkbox, and select)
     *
     * @generated from field: repeated string selected_values = 3;
     */
    selectedValues: string[];
    constructor(data?: PartialMessage<FormFieldDatumCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.FormFieldDatumCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatumCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatumCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatumCreateRequest;
    static equals(a: FormFieldDatumCreateRequest | PlainMessage<FormFieldDatumCreateRequest> | undefined, b: FormFieldDatumCreateRequest | PlainMessage<FormFieldDatumCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.FormFieldDatumList
 */
export declare class FormFieldDatumList extends Message<FormFieldDatumList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.FormFieldDatum list = 1;
     */
    list: FormFieldDatum[];
    constructor(data?: PartialMessage<FormFieldDatumList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.FormFieldDatumList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatumList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatumList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatumList;
    static equals(a: FormFieldDatumList | PlainMessage<FormFieldDatumList> | undefined, b: FormFieldDatumList | PlainMessage<FormFieldDatumList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data required to fetch history of the given form field and the specified resource
 *
 * @generated from message Genesis.FormFieldDatumHistoryRequest
 */
export declare class FormFieldDatumHistoryRequest extends Message<FormFieldDatumHistoryRequest> ***REMOVED***
    /**
     * The ID of the corresponding form field
     *
     * @generated from field: int64 form_field_id = 1;
     */
    formFieldId: bigint;
    /**
     * The UUID of the corresponding resource
     *
     * @generated from field: string ref_uuid = 2;
     */
    refUuid: string;
    constructor(data?: PartialMessage<FormFieldDatumHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.FormFieldDatumHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormFieldDatumHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormFieldDatumHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormFieldDatumHistoryRequest;
    static equals(a: FormFieldDatumHistoryRequest | PlainMessage<FormFieldDatumHistoryRequest> | undefined, b: FormFieldDatumHistoryRequest | PlainMessage<FormFieldDatumHistoryRequest> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=forms_pb.d.ts.map