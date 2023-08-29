[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCParamsServiceSearchAllReq

# Class: QCParamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.QCParamsServiceSearchAllReq

## Hierarchy

- `Message`<[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)\>

  ↳ **`QCParamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](QCParamsServiceSearchAllReq.md#constructor)

### Properties

- [count](QCParamsServiceSearchAllReq.md#count)
- [entityUuid](QCParamsServiceSearchAllReq.md#entityuuid)
- [isActive](QCParamsServiceSearchAllReq.md#isactive)
- [offset](QCParamsServiceSearchAllReq.md#offset)
- [searchKey](QCParamsServiceSearchAllReq.md#searchkey)
- [sortKey](QCParamsServiceSearchAllReq.md#sortkey)
- [sortOrder](QCParamsServiceSearchAllReq.md#sortorder)
- [status](QCParamsServiceSearchAllReq.md#status)
- [fields](QCParamsServiceSearchAllReq.md#fields)
- [runtime](QCParamsServiceSearchAllReq.md#runtime)
- [typeName](QCParamsServiceSearchAllReq.md#typename)

### Methods

- [clone](QCParamsServiceSearchAllReq.md#clone)
- [equals](QCParamsServiceSearchAllReq.md#equals)
- [fromBinary](QCParamsServiceSearchAllReq.md#frombinary)
- [fromJson](QCParamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](QCParamsServiceSearchAllReq.md#fromjsonstring)
- [getType](QCParamsServiceSearchAllReq.md#gettype)
- [toBinary](QCParamsServiceSearchAllReq.md#tobinary)
- [toJSON](QCParamsServiceSearchAllReq.md#tojson)
- [toJson](QCParamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](QCParamsServiceSearchAllReq.md#tojsonstring)
- [equals](QCParamsServiceSearchAllReq.md#equals-1)
- [fromBinary](QCParamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](QCParamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](QCParamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;QCParamsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/qc_params_pb.ts:860](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L860)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_params_pb.ts:816](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L816)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/qc_params_pb.ts:844](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L844)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/qc_params_pb.ts:809](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L809)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/qc_params_pb.ts:823](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L823)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/qc_params_pb.ts:858](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L858)

___

### sortKey

• **sortKey**: [`QC_PARAM_SORT_KEY`](../enums/QC_PARAM_SORT_KEY.md) = `QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QC_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_params_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L837)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_params_pb.ts:830](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L830)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/qc_params_pb.ts:851](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L851)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params_pb.ts:867](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L867)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params_pb.ts:865](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L865)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCParamsServiceSearchAllReq"``

#### Defined in

[src/qc_params_pb.ts:866](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L866)

## Methods

### clone

▸ **clone**(): [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md) \| `PlainMessage`<[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

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

[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md) \| `PlainMessage`<[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md) \| `PlainMessage`<[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params_pb.ts:890](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L890)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Defined in

[src/qc_params_pb.ts:878](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L878)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Defined in

[src/qc_params_pb.ts:882](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L882)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceSearchAllReq`](QCParamsServiceSearchAllReq.md)

#### Defined in

[src/qc_params_pb.ts:886](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L886)
