[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceItemUpdateRequest

# Class: EquationsWorkOrdersServiceItemUpdateRequest

Describes the parameters required to update an item in a equation work order

**`Generated`**

from message Genesis.EquationsWorkOrdersServiceItemUpdateRequest

## Hierarchy

- `Message`<[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)\>

  ↳ **`EquationsWorkOrdersServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceItemUpdateRequest.md#constructor)

### Properties

- [id](EquationsWorkOrdersServiceItemUpdateRequest.md#id)
- [quantity](EquationsWorkOrdersServiceItemUpdateRequest.md#quantity)
- [specifications](EquationsWorkOrdersServiceItemUpdateRequest.md#specifications)
- [unitPrice](EquationsWorkOrdersServiceItemUpdateRequest.md#unitprice)
- [userComment](EquationsWorkOrdersServiceItemUpdateRequest.md#usercomment)
- [fields](EquationsWorkOrdersServiceItemUpdateRequest.md#fields)
- [runtime](EquationsWorkOrdersServiceItemUpdateRequest.md#runtime)
- [typeName](EquationsWorkOrdersServiceItemUpdateRequest.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceItemUpdateRequest.md#clone)
- [equals](EquationsWorkOrdersServiceItemUpdateRequest.md#equals)
- [fromBinary](EquationsWorkOrdersServiceItemUpdateRequest.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceItemUpdateRequest.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceItemUpdateRequest.md#gettype)
- [toBinary](EquationsWorkOrdersServiceItemUpdateRequest.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceItemUpdateRequest.md#tojson)
- [toJson](EquationsWorkOrdersServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceItemUpdateRequest.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceItemUpdateRequest.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;EquationsWorkOrdersServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:511](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L511)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/equations_work_orders_pb.ts:488](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L488)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/equations_work_orders_pb.ts:495](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L495)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_work_orders_pb.ts:509](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L509)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: int64 unit_price = 13;

#### Defined in

[src/equations_work_orders_pb.ts:502](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L502)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_work_orders_pb.ts:481](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L481)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:518](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L518)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:516](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L516)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsWorkOrdersServiceItemUpdateRequest"``

#### Defined in

[src/equations_work_orders_pb.ts:517](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L517)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

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

[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:538](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L538)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:526](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L526)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:530](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L530)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemUpdateRequest`](EquationsWorkOrdersServiceItemUpdateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:534](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L534)
