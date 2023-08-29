[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceUpdateRequest

# Class: LeavesAdjustmentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.LeavesAdjustmentsServiceUpdateRequest

## Hierarchy

- `Message`<[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)\>

  ↳ **`LeavesAdjustmentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceUpdateRequest.md#constructor)

### Properties

- [description](LeavesAdjustmentsServiceUpdateRequest.md#description)
- [id](LeavesAdjustmentsServiceUpdateRequest.md#id)
- [notifyUsers](LeavesAdjustmentsServiceUpdateRequest.md#notifyusers)
- [referenceId](LeavesAdjustmentsServiceUpdateRequest.md#referenceid)
- [userComment](LeavesAdjustmentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](LeavesAdjustmentsServiceUpdateRequest.md#vaultfolderid)
- [fields](LeavesAdjustmentsServiceUpdateRequest.md#fields)
- [runtime](LeavesAdjustmentsServiceUpdateRequest.md#runtime)
- [typeName](LeavesAdjustmentsServiceUpdateRequest.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceUpdateRequest.md#clone)
- [equals](LeavesAdjustmentsServiceUpdateRequest.md#equals)
- [fromBinary](LeavesAdjustmentsServiceUpdateRequest.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceUpdateRequest.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceUpdateRequest.md#gettype)
- [toBinary](LeavesAdjustmentsServiceUpdateRequest.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceUpdateRequest.md#tojson)
- [toJson](LeavesAdjustmentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceUpdateRequest.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceUpdateRequest.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L238)

## Properties

### description

• **description**: `string` = `""`

The description of the leave adjustment

**`Generated`**

from field: string description = 12;

#### Defined in

[src/leaves_adjustments_pb.ts:236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L236)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:208](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L208)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/leaves_adjustments_pb.ts:215](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L215)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the leave adjustment

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/leaves_adjustments_pb.ts:229](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L229)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:201](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L201)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/leaves_adjustments_pb.ts:222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L222)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L245)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:243](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L243)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsServiceUpdateRequest"``

#### Defined in

[src/leaves_adjustments_pb.ts:244](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L244)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

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

[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L266)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L254)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:258](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L258)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceUpdateRequest`](LeavesAdjustmentsServiceUpdateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:262](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L262)
