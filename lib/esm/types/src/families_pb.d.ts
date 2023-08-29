import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the parameters that are part of a family structure
 *
 * @generated from message Genesis.Family
 */
export declare class Family extends Message<Family> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * UUID of the resource
     *
     * @generated from field: bytes uuid = 2;
     */
    uuid: Uint8Array;
    /**
     * The family type
     *
     * @generated from field: string family_type = 3;
     */
    familyType: string;
    /**
     * The name of the family
     *
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * The name of the family on a printed document
     *
     * @generated from field: string print_name = 5;
     */
    printName: string;
    /**
     * The drawing number of the family
     *
     * @generated from field: string drawing_number = 6;
     */
    drawingNumber: string;
    /**
     * The description of the family
     *
     * @generated from field: string description = 7;
     */
    description: string;
    /**
     * The unique code used to identify the family
     *
     * @generated from field: string code = 8;
     */
    code: string;
    /**
     * The HSN/SAC code of the family
     *
     * @generated from field: string hsn_sac_code = 9;
     */
    hsnSacCode: string;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 10;
     */
    uomId: bigint;
    /**
     * The unit quantity of the family
     *
     * @generated from field: int64 unit_quantity = 11;
     */
    unitQuantity: bigint;
    /**
     * Stores the username of the user who added this resource
     *
     * @generated from field: string added_by = 12;
     */
    addedBy: string;
    /**
     * The ID of the associated parent family
     *
     * @generated from field: int64 parent_id = 13;
     */
    parentId: bigint;
    /**
     * The ID of the associated root family
     *
     * @generated from field: int64 root_id = 14;
     */
    rootId: bigint;
    /**
     * Stores if the family is a leaf
     *
     * @generated from field: bool leaf = 15;
     */
    leaf: boolean;
    /**
     * The ID of the associated ledger
     *
     * @generated from field: int64 ledger_id = 16;
     */
    ledgerId: bigint;
    /**
     * The ID of the associated QC group
     *
     * @generated from field: int64 qc_group_id = 17;
     */
    qcGroupId: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: int64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     * The ID of the associated location
     *
     * @generated from field: int64 location_id = 19;
     */
    locationId: bigint;
    /**
     * The ID of the associated store
     *
     * @generated from field: int64 store_id = 20;
     */
    storeId: bigint;
    /**
     * The ID of the associated QC location
     *
     * @generated from field: int64 qc_hub_id = 21;
     */
    qcHubId: bigint;
    /**
     * The unit price of the family (in cents)
     *
     * @generated from field: int64 price = 22;
     */
    price: bigint;
    /**
     * The minimum stock to maintain (in cents)
     *
     * @generated from field: int64 min_stock_to_maintain = 23;
     */
    minStockToMaintain: bigint;
    /**
     * The initial stock of the family
     *
     * @generated from field: int64 initial_stock = 24;
     */
    initialStock: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 25;
     */
    vaultFolderId: bigint;
    /**
     * The associated consumption sequence
     *
     * @generated from field: string consumption_sequence = 26;
     */
    consumptionSequence: string;
    /**
     * The status that the family is in
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 27;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the UNIX timestamp of when a resource was approved
     *
     * @generated from field: int64 approved_on = 28;
     */
    approvedOn: bigint;
    /**
     * Stores the username of the user who approved the family
     *
     * @generated from field: string approved_by = 29;
     */
    approvedBy: string;
    /**
     * The ID of the role of the approver at the time of approval
     *
     * @generated from field: int64 approver_role_id = 30;
     */
    approverRoleId: bigint;
    /**
     * The associated list of label IDs
     *
     * @generated from field: repeated int64 label_ids = 31;
     */
    labelIds: bigint[];
    /**
     * Represents if the family is active
     *
     * @generated from field: bool active = 32;
     */
    active: boolean;
    /**
     * Stores the UNIX timestamp of when the family was created
     *
     * @generated from field: int64 timestamp = 33;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<Family>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Family";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Family;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Family;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Family;
    static equals(a: Family | PlainMessage<Family> | undefined, b: Family | PlainMessage<Family> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of families
 *
 * @generated from message Genesis.FamiliesList
 */
export declare class FamiliesList extends Message<FamiliesList> ***REMOVED***
    /**
     * List of families
     *
     * @generated from field: repeated Genesis.Family list = 1;
     */
    list: Family[];
    constructor(data?: PartialMessage<FamiliesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.FamiliesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesList;
    static equals(a: FamiliesList | PlainMessage<FamiliesList> | undefined, b: FamiliesList | PlainMessage<FamiliesList> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=families_pb.d.ts.map