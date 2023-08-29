[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Family

# Class: Family

Describes the parameters that are part of a family structure

**`Generated`**

from message Genesis.Family

## Hierarchy

- `Message`<[`Family`](Family.md)\>

  ↳ **`Family`**

## Table of contents

### Constructors

- [constructor](Family.md#constructor)

### Properties

- [active](Family.md#active)
- [addedBy](Family.md#addedby)
- [approvedBy](Family.md#approvedby)
- [approvedOn](Family.md#approvedon)
- [approverRoleId](Family.md#approverroleid)
- [code](Family.md#code)
- [consumptionSequence](Family.md#consumptionsequence)
- [description](Family.md#description)
- [drawingNumber](Family.md#drawingnumber)
- [familyType](Family.md#familytype)
- [hsnSacCode](Family.md#hsnsaccode)
- [id](Family.md#id)
- [initialStock](Family.md#initialstock)
- [labelIds](Family.md#labelids)
- [leaf](Family.md#leaf)
- [ledgerId](Family.md#ledgerid)
- [locationId](Family.md#locationid)
- [minStockToMaintain](Family.md#minstocktomaintain)
- [name](Family.md#name)
- [parentId](Family.md#parentid)
- [price](Family.md#price)
- [printName](Family.md#printname)
- [qcGroupId](Family.md#qcgroupid)
- [qcHubId](Family.md#qchubid)
- [rootId](Family.md#rootid)
- [status](Family.md#status)
- [storeId](Family.md#storeid)
- [taxGroupId](Family.md#taxgroupid)
- [timestamp](Family.md#timestamp)
- [unitQuantity](Family.md#unitquantity)
- [uomId](Family.md#uomid)
- [uuid](Family.md#uuid)
- [vaultFolderId](Family.md#vaultfolderid)
- [fields](Family.md#fields)
- [runtime](Family.md#runtime)
- [typeName](Family.md#typename)

### Methods

- [clone](Family.md#clone)
- [equals](Family.md#equals)
- [fromBinary](Family.md#frombinary)
- [fromJson](Family.md#fromjson)
- [fromJsonString](Family.md#fromjsonstring)
- [getType](Family.md#gettype)
- [toBinary](Family.md#tobinary)
- [toJSON](Family.md#tojson)
- [toJson](Family.md#tojson-1)
- [toJsonString](Family.md#tojsonstring)
- [equals](Family.md#equals-1)
- [fromBinary](Family.md#frombinary-1)
- [fromJson](Family.md#fromjson-1)
- [fromJsonString](Family.md#fromjsonstring-1)

## Constructors

### constructor

• **new Family**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Family`](Family.md)\> |

#### Overrides

Message&lt;Family\&gt;.constructor

#### Defined in

[src/families_pb.ts:248](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L248)

## Properties

### active

• **active**: `boolean` = `false`

Represents if the family is active

**`Generated`**

from field: bool active = 32;

#### Defined in

[src/families_pb.ts:239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L239)

___

### addedBy

• **addedBy**: `string` = `""`

Stores the username of the user who added this resource

**`Generated`**

from field: string added_by = 12;

#### Defined in

[src/families_pb.ts:99](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L99)

___

### approvedBy

• **approvedBy**: `string` = `""`

Stores the username of the user who approved the family

**`Generated`**

from field: string approved_by = 29;

#### Defined in

[src/families_pb.ts:218](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L218)

___

### approvedOn

• **approvedOn**: `bigint` = `protoInt64.zero`

Stores the UNIX timestamp of when a resource was approved

**`Generated`**

from field: int64 approved_on = 28;

#### Defined in

[src/families_pb.ts:211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L211)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The ID of the role of the approver at the time of approval

**`Generated`**

from field: int64 approver_role_id = 30;

#### Defined in

[src/families_pb.ts:225](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L225)

___

### code

• **code**: `string` = `""`

The unique code used to identify the family

**`Generated`**

from field: string code = 8;

#### Defined in

[src/families_pb.ts:71](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L71)

___

### consumptionSequence

• **consumptionSequence**: `string` = `""`

The associated consumption sequence

**`Generated`**

from field: string consumption_sequence = 26;

#### Defined in

[src/families_pb.ts:197](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L197)

___

### description

• **description**: `string` = `""`

The description of the family

**`Generated`**

from field: string description = 7;

#### Defined in

[src/families_pb.ts:64](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L64)

___

### drawingNumber

• **drawingNumber**: `string` = `""`

The drawing number of the family

**`Generated`**

from field: string drawing_number = 6;

#### Defined in

[src/families_pb.ts:57](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L57)

___

### familyType

• **familyType**: `string` = `""`

The family type

**`Generated`**

from field: string family_type = 3;

#### Defined in

[src/families_pb.ts:36](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L36)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

The HSN/SAC code of the family

**`Generated`**

from field: string hsn_sac_code = 9;

#### Defined in

[src/families_pb.ts:78](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L78)

___

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/families_pb.ts:22](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L22)

___

### initialStock

• **initialStock**: `bigint` = `protoInt64.zero`

The initial stock of the family

**`Generated`**

from field: int64 initial_stock = 24;

#### Defined in

[src/families_pb.ts:183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L183)

___

### labelIds

• **labelIds**: `bigint`[] = `[]`

The associated list of label IDs

**`Generated`**

from field: repeated int64 label_ids = 31;

#### Defined in

[src/families_pb.ts:232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L232)

___

### leaf

• **leaf**: `boolean` = `false`

Stores if the family is a leaf

**`Generated`**

from field: bool leaf = 15;

#### Defined in

[src/families_pb.ts:120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L120)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

The ID of the associated ledger

**`Generated`**

from field: int64 ledger_id = 16;

#### Defined in

[src/families_pb.ts:127](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L127)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: int64 location_id = 19;

#### Defined in

[src/families_pb.ts:148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L148)

___

### minStockToMaintain

• **minStockToMaintain**: `bigint` = `protoInt64.zero`

The minimum stock to maintain (in cents)

**`Generated`**

from field: int64 min_stock_to_maintain = 23;

#### Defined in

[src/families_pb.ts:176](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L176)

___

### name

• **name**: `string` = `""`

The name of the family

**`Generated`**

from field: string name = 4;

#### Defined in

[src/families_pb.ts:43](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L43)

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

The ID of the associated parent family

**`Generated`**

from field: int64 parent_id = 13;

#### Defined in

[src/families_pb.ts:106](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L106)

___

### price

• **price**: `bigint` = `protoInt64.zero`

The unit price of the family (in cents)

**`Generated`**

from field: int64 price = 22;

#### Defined in

[src/families_pb.ts:169](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L169)

___

### printName

• **printName**: `string` = `""`

The name of the family on a printed document

**`Generated`**

from field: string print_name = 5;

#### Defined in

[src/families_pb.ts:50](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L50)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated QC group

**`Generated`**

from field: int64 qc_group_id = 17;

#### Defined in

[src/families_pb.ts:134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L134)

___

### qcHubId

• **qcHubId**: `bigint` = `protoInt64.zero`

The ID of the associated QC location

**`Generated`**

from field: int64 qc_hub_id = 21;

#### Defined in

[src/families_pb.ts:162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L162)

___

### rootId

• **rootId**: `bigint` = `protoInt64.zero`

The ID of the associated root family

**`Generated`**

from field: int64 root_id = 14;

#### Defined in

[src/families_pb.ts:113](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L113)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status that the family is in

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 27;

#### Defined in

[src/families_pb.ts:204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L204)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

The ID of the associated store

**`Generated`**

from field: int64 store_id = 20;

#### Defined in

[src/families_pb.ts:155](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L155)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 18;

#### Defined in

[src/families_pb.ts:141](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L141)

___

### timestamp

• **timestamp**: `bigint` = `protoInt64.zero`

Stores the UNIX timestamp of when the family was created

**`Generated`**

from field: int64 timestamp = 33;

#### Defined in

[src/families_pb.ts:246](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L246)

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

The unit quantity of the family

**`Generated`**

from field: int64 unit_quantity = 11;

#### Defined in

[src/families_pb.ts:92](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L92)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: int64 uom_id = 10;

#### Defined in

[src/families_pb.ts:85](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L85)

___

### uuid

• **uuid**: `Uint8Array`

UUID of the resource

**`Generated`**

from field: bytes uuid = 2;

#### Defined in

[src/families_pb.ts:29](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L29)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 25;

#### Defined in

[src/families_pb.ts:190](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L190)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families_pb.ts:255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L255)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families_pb.ts:253](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L253)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Family"``

#### Defined in

[src/families_pb.ts:254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L254)

## Methods

### clone

▸ **clone**(): [`Family`](Family.md)

Create a deep copy.

#### Returns

[`Family`](Family.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:27

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`Family`](Family.md) \| `PlainMessage`<[`Family`](Family.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Family`](Family.md)

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Family`](Family.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Family`](Family.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Family`](Family.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Family`](Family.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:80

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:49

___

### toJSON

▸ `Protected` **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:74

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:54

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:58

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`Family`](Family.md) \| `PlainMessage`<[`Family`](Family.md)\> |
| `b` | `undefined` \| [`Family`](Family.md) \| `PlainMessage`<[`Family`](Family.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families_pb.ts:303](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L303)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

[src/families_pb.ts:291](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L291)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

[src/families_pb.ts:295](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L295)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

[src/families_pb.ts:299](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/families_pb.ts#L299)
