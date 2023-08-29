[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceCreateRequest

# Class: EquationsWorkOrdersServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.EquationsWorkOrdersServiceCreateRequest

## Hierarchy

- `Message`<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\>

  ↳ **`EquationsWorkOrdersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceCreateRequest.md#constructor)

### Properties

- [description](EquationsWorkOrdersServiceCreateRequest.md#description)
- [entityUuid](EquationsWorkOrdersServiceCreateRequest.md#entityuuid)
- [name](EquationsWorkOrdersServiceCreateRequest.md#name)
- [userComment](EquationsWorkOrdersServiceCreateRequest.md#usercomment)
- [vaultFolderId](EquationsWorkOrdersServiceCreateRequest.md#vaultfolderid)
- [workOrderId](EquationsWorkOrdersServiceCreateRequest.md#workorderid)
- [fields](EquationsWorkOrdersServiceCreateRequest.md#fields)
- [runtime](EquationsWorkOrdersServiceCreateRequest.md#runtime)
- [typeName](EquationsWorkOrdersServiceCreateRequest.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceCreateRequest.md#clone)
- [equals](EquationsWorkOrdersServiceCreateRequest.md#equals)
- [fromBinary](EquationsWorkOrdersServiceCreateRequest.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceCreateRequest.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceCreateRequest.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceCreateRequest.md#gettype)
- [toBinary](EquationsWorkOrdersServiceCreateRequest.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceCreateRequest.md#tojson)
- [toJson](EquationsWorkOrdersServiceCreateRequest.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceCreateRequest.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceCreateRequest.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceCreateRequest.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\> |

#### Overrides

Message&lt;EquationsWorkOrdersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L142)

## Properties

### description

• **description**: `string` = `""`

The description of the equation work order

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_work_orders_pb.ts:140](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L140)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equations_work_orders_pb.ts:105](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L105)

___

### name

• **name**: `string` = `""`

The name of the equation work order

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_work_orders_pb.ts:126](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L126)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/equations_work_orders_pb.ts:112](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L112)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/equations_work_orders_pb.ts:119](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L119)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

The ID of the work order that this equation belongs to

**`Generated`**

from field: int64 work_order_id = 12;

#### Defined in

[src/equations_work_orders_pb.ts:133](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L133)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L149)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L147)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsWorkOrdersServiceCreateRequest"``

#### Defined in

[src/equations_work_orders_pb.ts:148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L148)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

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

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L170)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L158)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L162)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Defined in

[src/equations_work_orders_pb.ts:166](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L166)
