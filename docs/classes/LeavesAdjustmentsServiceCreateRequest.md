[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceCreateRequest

# Class: LeavesAdjustmentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.LeavesAdjustmentsServiceCreateRequest

## Hierarchy

- `Message`<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\>

  ↳ **`LeavesAdjustmentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceCreateRequest.md#constructor)

### Properties

- [description](LeavesAdjustmentsServiceCreateRequest.md#description)
- [entityUuid](LeavesAdjustmentsServiceCreateRequest.md#entityuuid)
- [referenceId](LeavesAdjustmentsServiceCreateRequest.md#referenceid)
- [userComment](LeavesAdjustmentsServiceCreateRequest.md#usercomment)
- [userId](LeavesAdjustmentsServiceCreateRequest.md#userid)
- [vaultFolderId](LeavesAdjustmentsServiceCreateRequest.md#vaultfolderid)
- [fields](LeavesAdjustmentsServiceCreateRequest.md#fields)
- [runtime](LeavesAdjustmentsServiceCreateRequest.md#runtime)
- [typeName](LeavesAdjustmentsServiceCreateRequest.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceCreateRequest.md#clone)
- [equals](LeavesAdjustmentsServiceCreateRequest.md#equals)
- [fromBinary](LeavesAdjustmentsServiceCreateRequest.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceCreateRequest.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceCreateRequest.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceCreateRequest.md#gettype)
- [toBinary](LeavesAdjustmentsServiceCreateRequest.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceCreateRequest.md#tojson)
- [toJson](LeavesAdjustmentsServiceCreateRequest.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceCreateRequest.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceCreateRequest.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceCreateRequest.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L156)

## Properties

### description

• **description**: `string` = `""`

The description of the leave adjustment

**`Generated`**

from field: string description = 12;

#### Defined in

[src/leaves_adjustments_pb.ts:154](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L154)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:119](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L119)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the leave adjustment

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/leaves_adjustments_pb.ts:140](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L140)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:126](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L126)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this adjustment needs to be made

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/leaves_adjustments_pb.ts:147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L147)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/leaves_adjustments_pb.ts:133](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L133)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L163)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:161](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L161)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsServiceCreateRequest"``

#### Defined in

[src/leaves_adjustments_pb.ts:162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L162)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

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

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:184](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L184)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L172)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:176](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L176)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:180](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L180)
