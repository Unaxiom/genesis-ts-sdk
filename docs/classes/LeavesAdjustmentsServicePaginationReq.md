[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServicePaginationReq

# Class: LeavesAdjustmentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.LeavesAdjustmentsServicePaginationReq

## Hierarchy

- `Message`<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\>

  ↳ **`LeavesAdjustmentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServicePaginationReq.md#constructor)

### Properties

- [count](LeavesAdjustmentsServicePaginationReq.md#count)
- [isActive](LeavesAdjustmentsServicePaginationReq.md#isactive)
- [offset](LeavesAdjustmentsServicePaginationReq.md#offset)
- [sortKey](LeavesAdjustmentsServicePaginationReq.md#sortkey)
- [sortOrder](LeavesAdjustmentsServicePaginationReq.md#sortorder)
- [status](LeavesAdjustmentsServicePaginationReq.md#status)
- [fields](LeavesAdjustmentsServicePaginationReq.md#fields)
- [runtime](LeavesAdjustmentsServicePaginationReq.md#runtime)
- [typeName](LeavesAdjustmentsServicePaginationReq.md#typename)

### Methods

- [clone](LeavesAdjustmentsServicePaginationReq.md#clone)
- [equals](LeavesAdjustmentsServicePaginationReq.md#equals)
- [fromBinary](LeavesAdjustmentsServicePaginationReq.md#frombinary)
- [fromJson](LeavesAdjustmentsServicePaginationReq.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServicePaginationReq.md#fromjsonstring)
- [getType](LeavesAdjustmentsServicePaginationReq.md#gettype)
- [toBinary](LeavesAdjustmentsServicePaginationReq.md#tobinary)
- [toJSON](LeavesAdjustmentsServicePaginationReq.md#tojson)
- [toJson](LeavesAdjustmentsServicePaginationReq.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServicePaginationReq.md#tojsonstring)
- [equals](LeavesAdjustmentsServicePaginationReq.md#equals-1)
- [fromBinary](LeavesAdjustmentsServicePaginationReq.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:846](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L846)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:816](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L816)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:809](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L809)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/leaves_adjustments_pb.ts:823](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L823)

___

### sortKey

• **sortKey**: [`LEAVE_ADJUSTMENT_SORT_KEY`](../enums/LEAVE_ADJUSTMENT_SORT_KEY.md) = `LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_adjustments_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L837)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_adjustments_pb.ts:830](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L830)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this record

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/leaves_adjustments_pb.ts:844](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L844)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L853)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:851](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L851)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsServicePaginationReq"``

#### Defined in

[src/leaves_adjustments_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L852)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

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

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:874](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L874)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:862](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L862)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:866](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L866)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:870](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L870)
