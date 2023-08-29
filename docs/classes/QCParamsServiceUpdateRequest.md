[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCParamsServiceUpdateRequest

# Class: QCParamsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.QCParamsServiceUpdateRequest

## Hierarchy

- `Message`<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\>

  ↳ **`QCParamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QCParamsServiceUpdateRequest.md#constructor)

### Properties

- [code](QCParamsServiceUpdateRequest.md#code)
- [description](QCParamsServiceUpdateRequest.md#description)
- [id](QCParamsServiceUpdateRequest.md#id)
- [name](QCParamsServiceUpdateRequest.md#name)
- [notifyUsers](QCParamsServiceUpdateRequest.md#notifyusers)
- [userComment](QCParamsServiceUpdateRequest.md#usercomment)
- [fields](QCParamsServiceUpdateRequest.md#fields)
- [runtime](QCParamsServiceUpdateRequest.md#runtime)
- [typeName](QCParamsServiceUpdateRequest.md#typename)

### Methods

- [clone](QCParamsServiceUpdateRequest.md#clone)
- [equals](QCParamsServiceUpdateRequest.md#equals)
- [fromBinary](QCParamsServiceUpdateRequest.md#frombinary)
- [fromJson](QCParamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](QCParamsServiceUpdateRequest.md#fromjsonstring)
- [getType](QCParamsServiceUpdateRequest.md#gettype)
- [toBinary](QCParamsServiceUpdateRequest.md#tobinary)
- [toJSON](QCParamsServiceUpdateRequest.md#tojson)
- [toJson](QCParamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](QCParamsServiceUpdateRequest.md#tojsonstring)
- [equals](QCParamsServiceUpdateRequest.md#equals-1)
- [fromBinary](QCParamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](QCParamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QCParamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;QCParamsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/qc_params_pb.ts:216](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L216)

## Properties

### code

• **code**: `string` = `""`

The qc param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_params_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L207)

___

### description

• **description**: `string` = `""`

The description of the qc param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/qc_params_pb.ts:214](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L214)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/qc_params_pb.ts:186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L186)

___

### name

• **name**: `string` = `""`

The name of the qc param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_params_pb.ts:200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L200)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/qc_params_pb.ts:193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L193)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/qc_params_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L179)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params_pb.ts:223](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L223)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params_pb.ts:221](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L221)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCParamsServiceUpdateRequest"``

#### Defined in

[src/qc_params_pb.ts:222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L222)

## Methods

### clone

▸ **clone**(): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md) \| `PlainMessage`<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

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

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md) \| `PlainMessage`<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md) \| `PlainMessage`<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params_pb.ts:244](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L244)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Defined in

[src/qc_params_pb.ts:232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L232)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Defined in

[src/qc_params_pb.ts:236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L236)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Defined in

[src/qc_params_pb.ts:240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L240)
