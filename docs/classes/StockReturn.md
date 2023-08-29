[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockReturn

# Class: StockReturn

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.StockReturn

## Hierarchy

- `Message`<[`StockReturn`](StockReturn.md)\>

  ↳ **`StockReturn`**

## Table of contents

### Constructors

- [constructor](StockReturn.md#constructor)

### Properties

- [approvalMetadata](StockReturn.md#approvalmetadata)
- [completedOn](StockReturn.md#completedon)
- [entityUuid](StockReturn.md#entityuuid)
- [finalRefNumber](StockReturn.md#finalrefnumber)
- [formData](StockReturn.md#formdata)
- [list](StockReturn.md#list)
- [logs](StockReturn.md#logs)
- [metadata](StockReturn.md#metadata)
- [refFrom](StockReturn.md#reffrom)
- [refId](StockReturn.md#refid)
- [referenceId](StockReturn.md#referenceid)
- [status](StockReturn.md#status)
- [vaultFolderId](StockReturn.md#vaultfolderid)
- [fields](StockReturn.md#fields)
- [runtime](StockReturn.md#runtime)
- [typeName](StockReturn.md#typename)

### Methods

- [clone](StockReturn.md#clone)
- [equals](StockReturn.md#equals)
- [fromBinary](StockReturn.md#frombinary)
- [fromJson](StockReturn.md#fromjson)
- [fromJsonString](StockReturn.md#fromjsonstring)
- [getType](StockReturn.md#gettype)
- [toBinary](StockReturn.md#tobinary)
- [toJSON](StockReturn.md#tojson)
- [toJson](StockReturn.md#tojson-1)
- [toJsonString](StockReturn.md#tojsonstring)
- [equals](StockReturn.md#equals-1)
- [fromBinary](StockReturn.md#frombinary-1)
- [fromJson](StockReturn.md#fromjson-1)
- [fromJsonString](StockReturn.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturn**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockReturn`](StockReturn.md)\> |

#### Overrides

Message&lt;StockReturn\&gt;.constructor

#### Defined in

[src/stock_returns_pb.ts:364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L364)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_returns_pb.ts:292](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L292)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this stock return was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/stock_returns_pb.ts:313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L313)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/stock_returns_pb.ts:278](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L278)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/stock_returns_pb.ts:334](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L334)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/stock_returns_pb.ts:362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L362)

___

### list

• **list**: [`StockReturnItem`](StockReturnItem.md)[] = `[]`

The list of associated stock return items

**`Generated`**

from field: repeated Genesis.StockReturnItem list = 20;

#### Defined in

[src/stock_returns_pb.ts:355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L355)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this stock return

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/stock_returns_pb.ts:306](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L306)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this stock return

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_returns_pb.ts:285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L285)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/stock_returns_pb.ts:341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L341)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/stock_returns_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L348)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_returns_pb.ts:327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L327)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this stock return

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/stock_returns_pb.ts:299](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L299)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/stock_returns_pb.ts:320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L320)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns_pb.ts:371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L371)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns_pb.ts:369](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L369)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockReturn"``

#### Defined in

[src/stock_returns_pb.ts:370](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L370)

## Methods

### clone

▸ **clone**(): [`StockReturn`](StockReturn.md)

Create a deep copy.

#### Returns

[`StockReturn`](StockReturn.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturn`](StockReturn.md) \| `PlainMessage`<[`StockReturn`](StockReturn.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturn`](StockReturn.md)

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

[`StockReturn`](StockReturn.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturn`](StockReturn.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturn`](StockReturn.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturn`](StockReturn.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturn`](StockReturn.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockReturn`](StockReturn.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockReturn`](StockReturn.md)\>

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
| `a` | `undefined` \| [`StockReturn`](StockReturn.md) \| `PlainMessage`<[`StockReturn`](StockReturn.md)\> |
| `b` | `undefined` \| [`StockReturn`](StockReturn.md) \| `PlainMessage`<[`StockReturn`](StockReturn.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L399)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockReturn`](StockReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockReturn`](StockReturn.md)

#### Defined in

[src/stock_returns_pb.ts:387](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L387)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockReturn`](StockReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturn`](StockReturn.md)

#### Defined in

[src/stock_returns_pb.ts:391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L391)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockReturn`](StockReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturn`](StockReturn.md)

#### Defined in

[src/stock_returns_pb.ts:395](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L395)
