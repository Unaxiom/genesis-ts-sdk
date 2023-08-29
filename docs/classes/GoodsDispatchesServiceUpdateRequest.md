[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceUpdateRequest

# Class: GoodsDispatchesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.GoodsDispatchesServiceUpdateRequest

## Hierarchy

- `Message`<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\>

  ↳ **`GoodsDispatchesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceUpdateRequest.md#constructor)

### Properties

- [formData](GoodsDispatchesServiceUpdateRequest.md#formdata)
- [id](GoodsDispatchesServiceUpdateRequest.md#id)
- [notifyUsers](GoodsDispatchesServiceUpdateRequest.md#notifyusers)
- [referenceId](GoodsDispatchesServiceUpdateRequest.md#referenceid)
- [userComment](GoodsDispatchesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](GoodsDispatchesServiceUpdateRequest.md#vaultfolderid)
- [fields](GoodsDispatchesServiceUpdateRequest.md#fields)
- [runtime](GoodsDispatchesServiceUpdateRequest.md#runtime)
- [typeName](GoodsDispatchesServiceUpdateRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceUpdateRequest.md#clone)
- [equals](GoodsDispatchesServiceUpdateRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceUpdateRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceUpdateRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceUpdateRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceUpdateRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceUpdateRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceUpdateRequest.md#tojson)
- [toJson](GoodsDispatchesServiceUpdateRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceUpdateRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceUpdateRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceUpdateRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;GoodsDispatchesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:268](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L268)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/goods_dispatches_pb.ts:266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L266)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/goods_dispatches_pb.ts:238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L238)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/goods_dispatches_pb.ts:245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L245)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goods dispatch

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/goods_dispatches_pb.ts:259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L259)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_dispatches_pb.ts:231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L231)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/goods_dispatches_pb.ts:252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L252)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:275](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L275)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L273)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesServiceUpdateRequest"``

#### Defined in

[src/goods_dispatches_pb.ts:274](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L274)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

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

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:296](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L296)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L284)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:288](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L288)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceUpdateRequest`](GoodsDispatchesServiceUpdateRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:292](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L292)
