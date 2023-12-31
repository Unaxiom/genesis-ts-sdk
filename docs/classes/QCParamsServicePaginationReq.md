[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCParamsServicePaginationReq

# Class: QCParamsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.QCParamsServicePaginationReq

## Hierarchy

- `Message`<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\>

  ↳ **`QCParamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QCParamsServicePaginationReq.md#constructor)

### Properties

- [count](QCParamsServicePaginationReq.md#count)
- [isActive](QCParamsServicePaginationReq.md#isactive)
- [offset](QCParamsServicePaginationReq.md#offset)
- [sortKey](QCParamsServicePaginationReq.md#sortkey)
- [sortOrder](QCParamsServicePaginationReq.md#sortorder)
- [status](QCParamsServicePaginationReq.md#status)
- [fields](QCParamsServicePaginationReq.md#fields)
- [runtime](QCParamsServicePaginationReq.md#runtime)
- [typeName](QCParamsServicePaginationReq.md#typename)

### Methods

- [clone](QCParamsServicePaginationReq.md#clone)
- [equals](QCParamsServicePaginationReq.md#equals)
- [fromBinary](QCParamsServicePaginationReq.md#frombinary)
- [fromJson](QCParamsServicePaginationReq.md#fromjson)
- [fromJsonString](QCParamsServicePaginationReq.md#fromjsonstring)
- [getType](QCParamsServicePaginationReq.md#gettype)
- [toBinary](QCParamsServicePaginationReq.md#tobinary)
- [toJSON](QCParamsServicePaginationReq.md#tojson)
- [toJson](QCParamsServicePaginationReq.md#tojson-1)
- [toJsonString](QCParamsServicePaginationReq.md#tojsonstring)
- [equals](QCParamsServicePaginationReq.md#equals-1)
- [fromBinary](QCParamsServicePaginationReq.md#frombinary-1)
- [fromJson](QCParamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](QCParamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\> |

#### Overrides

Message&lt;QCParamsServicePaginationReq\&gt;.constructor

#### Defined in

[src/qc_params_pb.ts:446](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L446)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_params_pb.ts:416](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L416)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/qc_params_pb.ts:409](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L409)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/qc_params_pb.ts:423](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L423)

___

### sortKey

• **sortKey**: [`QC_PARAM_SORT_KEY`](../enums/QC_PARAM_SORT_KEY.md) = `QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QC_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_params_pb.ts:437](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L437)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_params_pb.ts:430](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L430)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this qc param

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/qc_params_pb.ts:444](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L444)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params_pb.ts:453](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L453)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params_pb.ts:451](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L451)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCParamsServicePaginationReq"``

#### Defined in

[src/qc_params_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L452)

## Methods

### clone

▸ **clone**(): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md) \| `PlainMessage`<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

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

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md) \| `PlainMessage`<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md) \| `PlainMessage`<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params_pb.ts:474](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L474)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Defined in

[src/qc_params_pb.ts:462](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L462)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Defined in

[src/qc_params_pb.ts:466](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L466)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Defined in

[src/qc_params_pb.ts:470](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L470)
