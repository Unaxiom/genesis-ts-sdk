[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuance

# Class: StockIssuance

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.StockIssuance

## Hierarchy

- `Message`<[`StockIssuance`](StockIssuance.md)\>

  ↳ **`StockIssuance`**

## Table of contents

### Constructors

- [constructor](StockIssuance.md#constructor)

### Properties

- [approvalMetadata](StockIssuance.md#approvalmetadata)
- [completedOn](StockIssuance.md#completedon)
- [entityUuid](StockIssuance.md#entityuuid)
- [finalRefNumber](StockIssuance.md#finalrefnumber)
- [formData](StockIssuance.md#formdata)
- [list](StockIssuance.md#list)
- [logs](StockIssuance.md#logs)
- [metadata](StockIssuance.md#metadata)
- [refFrom](StockIssuance.md#reffrom)
- [refId](StockIssuance.md#refid)
- [referenceId](StockIssuance.md#referenceid)
- [status](StockIssuance.md#status)
- [vaultFolderId](StockIssuance.md#vaultfolderid)
- [fields](StockIssuance.md#fields)
- [runtime](StockIssuance.md#runtime)
- [typeName](StockIssuance.md#typename)

### Methods

- [clone](StockIssuance.md#clone)
- [equals](StockIssuance.md#equals)
- [fromBinary](StockIssuance.md#frombinary)
- [fromJson](StockIssuance.md#fromjson)
- [fromJsonString](StockIssuance.md#fromjsonstring)
- [getType](StockIssuance.md#gettype)
- [toBinary](StockIssuance.md#tobinary)
- [toJSON](StockIssuance.md#tojson)
- [toJson](StockIssuance.md#tojson-1)
- [toJsonString](StockIssuance.md#tojsonstring)
- [equals](StockIssuance.md#equals-1)
- [fromBinary](StockIssuance.md#frombinary-1)
- [fromJson](StockIssuance.md#fromjson-1)
- [fromJsonString](StockIssuance.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuance**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuance`](StockIssuance.md)\> |

#### Overrides

Message&lt;StockIssuance\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:422](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L422)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_issuances_pb.ts:350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L350)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this stock issuance was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/stock_issuances_pb.ts:371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L371)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/stock_issuances_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L336)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/stock_issuances_pb.ts:392](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L392)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/stock_issuances_pb.ts:420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L420)

___

### list

• **list**: [`StockIssuanceItem`](StockIssuanceItem.md)[] = `[]`

The list of associated stock issuance items

**`Generated`**

from field: repeated Genesis.StockIssuanceItem list = 20;

#### Defined in

[src/stock_issuances_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L413)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this stock issuance

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/stock_issuances_pb.ts:364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L364)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this stock issuance

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_issuances_pb.ts:343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L343)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/stock_issuances_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L399)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/stock_issuances_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L406)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock issuance

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_issuances_pb.ts:385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L385)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this stock issuance

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/stock_issuances_pb.ts:357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L357)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/stock_issuances_pb.ts:378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L378)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:429](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L429)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L427)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuance"``

#### Defined in

[src/stock_issuances_pb.ts:428](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L428)

## Methods

### clone

▸ **clone**(): [`StockIssuance`](StockIssuance.md)

Create a deep copy.

#### Returns

[`StockIssuance`](StockIssuance.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`<[`StockIssuance`](StockIssuance.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuance`](StockIssuance.md)

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

[`StockIssuance`](StockIssuance.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuance`](StockIssuance.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuance`](StockIssuance.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuance`](StockIssuance.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuance`](StockIssuance.md)\>

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
| `a` | `undefined` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`<[`StockIssuance`](StockIssuance.md)\> |
| `b` | `undefined` \| [`StockIssuance`](StockIssuance.md) \| `PlainMessage`<[`StockIssuance`](StockIssuance.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:457](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L457)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances_pb.ts:445](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L445)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances_pb.ts:449](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L449)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuance`](StockIssuance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuance`](StockIssuance.md)

#### Defined in

[src/stock_issuances_pb.ts:453](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L453)
