[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturn

# Class: SalesReturn

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.SalesReturn

## Hierarchy

- `Message`<[`SalesReturn`](SalesReturn.md)\>

  ↳ **`SalesReturn`**

## Table of contents

### Constructors

- [constructor](SalesReturn.md#constructor)

### Properties

- [approvalMetadata](SalesReturn.md#approvalmetadata)
- [completedOn](SalesReturn.md#completedon)
- [entityUuid](SalesReturn.md#entityuuid)
- [finalRefNumber](SalesReturn.md#finalrefnumber)
- [formData](SalesReturn.md#formdata)
- [list](SalesReturn.md#list)
- [logs](SalesReturn.md#logs)
- [metadata](SalesReturn.md#metadata)
- [refFrom](SalesReturn.md#reffrom)
- [refId](SalesReturn.md#refid)
- [referenceId](SalesReturn.md#referenceid)
- [status](SalesReturn.md#status)
- [vaultFolderId](SalesReturn.md#vaultfolderid)
- [fields](SalesReturn.md#fields)
- [runtime](SalesReturn.md#runtime)
- [typeName](SalesReturn.md#typename)

### Methods

- [clone](SalesReturn.md#clone)
- [equals](SalesReturn.md#equals)
- [fromBinary](SalesReturn.md#frombinary)
- [fromJson](SalesReturn.md#fromjson)
- [fromJsonString](SalesReturn.md#fromjsonstring)
- [getType](SalesReturn.md#gettype)
- [toBinary](SalesReturn.md#tobinary)
- [toJSON](SalesReturn.md#tojson)
- [toJson](SalesReturn.md#tojson-1)
- [toJsonString](SalesReturn.md#tojsonstring)
- [equals](SalesReturn.md#equals-1)
- [fromBinary](SalesReturn.md#frombinary-1)
- [fromJson](SalesReturn.md#fromjson-1)
- [fromJsonString](SalesReturn.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturn**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturn`](SalesReturn.md)\> |

#### Overrides

Message&lt;SalesReturn\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L399)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_returns_pb.ts:327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L327)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this sales return was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/sales_returns_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L348)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_returns_pb.ts:313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L313)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/sales_returns_pb.ts:369](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L369)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/sales_returns_pb.ts:397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L397)

___

### list

• **list**: [`SalesReturnItem`](SalesReturnItem.md)[] = `[]`

The list of associated sales return items

**`Generated`**

from field: repeated Genesis.SalesReturnItem list = 20;

#### Defined in

[src/sales_returns_pb.ts:390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L390)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this sales return

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_returns_pb.ts:341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L341)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales return

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_returns_pb.ts:320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L320)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/sales_returns_pb.ts:376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L376)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/sales_returns_pb.ts:383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L383)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_returns_pb.ts:362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L362)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this sales return

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_returns_pb.ts:334](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L334)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/sales_returns_pb.ts:355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L355)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L406)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:404](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L404)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturn"``

#### Defined in

[src/sales_returns_pb.ts:405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L405)

## Methods

### clone

▸ **clone**(): [`SalesReturn`](SalesReturn.md)

Create a deep copy.

#### Returns

[`SalesReturn`](SalesReturn.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturn`](SalesReturn.md) \| `PlainMessage`<[`SalesReturn`](SalesReturn.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturn`](SalesReturn.md)

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

[`SalesReturn`](SalesReturn.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturn`](SalesReturn.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturn`](SalesReturn.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturn`](SalesReturn.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturn`](SalesReturn.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturn`](SalesReturn.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturn`](SalesReturn.md)\>

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
| `a` | `undefined` \| [`SalesReturn`](SalesReturn.md) \| `PlainMessage`<[`SalesReturn`](SalesReturn.md)\> |
| `b` | `undefined` \| [`SalesReturn`](SalesReturn.md) \| `PlainMessage`<[`SalesReturn`](SalesReturn.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L434)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturn`](SalesReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturn`](SalesReturn.md)

#### Defined in

[src/sales_returns_pb.ts:422](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L422)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturn`](SalesReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturn`](SalesReturn.md)

#### Defined in

[src/sales_returns_pb.ts:426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L426)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturn`](SalesReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturn`](SalesReturn.md)

#### Defined in

[src/sales_returns_pb.ts:430](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L430)
