[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCParamsServiceEntityPaginationReq

# Class: QCParamsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.QCParamsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)\>

  ↳ **`QCParamsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](QCParamsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](QCParamsServiceEntityPaginationReq.md#count)
- [entityUuid](QCParamsServiceEntityPaginationReq.md#entityuuid)
- [isActive](QCParamsServiceEntityPaginationReq.md#isactive)
- [offset](QCParamsServiceEntityPaginationReq.md#offset)
- [sortKey](QCParamsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](QCParamsServiceEntityPaginationReq.md#sortorder)
- [fields](QCParamsServiceEntityPaginationReq.md#fields)
- [runtime](QCParamsServiceEntityPaginationReq.md#runtime)
- [typeName](QCParamsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](QCParamsServiceEntityPaginationReq.md#clone)
- [equals](QCParamsServiceEntityPaginationReq.md#equals)
- [fromBinary](QCParamsServiceEntityPaginationReq.md#frombinary)
- [fromJson](QCParamsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](QCParamsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](QCParamsServiceEntityPaginationReq.md#gettype)
- [toBinary](QCParamsServiceEntityPaginationReq.md#tobinary)
- [toJSON](QCParamsServiceEntityPaginationReq.md#tojson)
- [toJson](QCParamsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](QCParamsServiceEntityPaginationReq.md#tojsonstring)
- [equals](QCParamsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](QCParamsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](QCParamsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](QCParamsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;QCParamsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/qc_params_pb.ts:594](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L594)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_params_pb.ts:564](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L564)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/qc_params_pb.ts:592](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L592)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/qc_params_pb.ts:557](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L557)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/qc_params_pb.ts:571](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L571)

___

### sortKey

• **sortKey**: [`QC_PARAM_SORT_KEY`](../enums/QC_PARAM_SORT_KEY.md) = `QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QC_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_params_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L585)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_params_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L578)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params_pb.ts:601](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L601)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params_pb.ts:599](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L599)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCParamsServiceEntityPaginationReq"``

#### Defined in

[src/qc_params_pb.ts:600](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L600)

## Methods

### clone

▸ **clone**(): [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

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

[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params_pb.ts:622](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L622)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Defined in

[src/qc_params_pb.ts:610](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L610)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Defined in

[src/qc_params_pb.ts:614](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L614)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceEntityPaginationReq`](QCParamsServiceEntityPaginationReq.md)

#### Defined in

[src/qc_params_pb.ts:618](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L618)
