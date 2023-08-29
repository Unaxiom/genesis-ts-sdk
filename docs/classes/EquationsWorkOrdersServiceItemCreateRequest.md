[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceItemCreateRequest

# Class: EquationsWorkOrdersServiceItemCreateRequest

Describes the parameters required to add an item to a equation work order

**`Generated`**

from message Genesis.EquationsWorkOrdersServiceItemCreateRequest

## Hierarchy

- `Message`<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\>

  ↳ **`EquationsWorkOrdersServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceItemCreateRequest.md#constructor)

### Properties

- [equationId](EquationsWorkOrdersServiceItemCreateRequest.md#equationid)
- [familyId](EquationsWorkOrdersServiceItemCreateRequest.md#familyid)
- [quantity](EquationsWorkOrdersServiceItemCreateRequest.md#quantity)
- [specifications](EquationsWorkOrdersServiceItemCreateRequest.md#specifications)
- [unitPrice](EquationsWorkOrdersServiceItemCreateRequest.md#unitprice)
- [userComment](EquationsWorkOrdersServiceItemCreateRequest.md#usercomment)
- [fields](EquationsWorkOrdersServiceItemCreateRequest.md#fields)
- [runtime](EquationsWorkOrdersServiceItemCreateRequest.md#runtime)
- [typeName](EquationsWorkOrdersServiceItemCreateRequest.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceItemCreateRequest.md#clone)
- [equals](EquationsWorkOrdersServiceItemCreateRequest.md#equals)
- [fromBinary](EquationsWorkOrdersServiceItemCreateRequest.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceItemCreateRequest.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceItemCreateRequest.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceItemCreateRequest.md#gettype)
- [toBinary](EquationsWorkOrdersServiceItemCreateRequest.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceItemCreateRequest.md#tojson)
- [toJson](EquationsWorkOrdersServiceItemCreateRequest.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceItemCreateRequest.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceItemCreateRequest.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceItemCreateRequest.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;EquationsWorkOrdersServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:436](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L436)

## Properties

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation work order

**`Generated`**

from field: int64 equation_id = 10;

#### Defined in

[src/equations_work_orders_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L406)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/equations_work_orders_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L413)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/equations_work_orders_pb.ts:420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L420)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_work_orders_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L434)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: int64 unit_price = 13;

#### Defined in

[src/equations_work_orders_pb.ts:427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L427)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_work_orders_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L399)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L443)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L441)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsWorkOrdersServiceItemCreateRequest"``

#### Defined in

[src/equations_work_orders_pb.ts:442](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L442)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

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

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L464)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L452)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:456](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L456)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L460)
