[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceCreateRequest

# Class: HolidaysServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.HolidaysServiceCreateRequest

## Hierarchy

- `Message`<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\>

  ↳ **`HolidaysServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceCreateRequest.md#constructor)

### Properties

- [description](HolidaysServiceCreateRequest.md#description)
- [endOn](HolidaysServiceCreateRequest.md#endon)
- [entityUuid](HolidaysServiceCreateRequest.md#entityuuid)
- [startOn](HolidaysServiceCreateRequest.md#starton)
- [title](HolidaysServiceCreateRequest.md#title)
- [userComment](HolidaysServiceCreateRequest.md#usercomment)
- [vaultFolderId](HolidaysServiceCreateRequest.md#vaultfolderid)
- [fields](HolidaysServiceCreateRequest.md#fields)
- [runtime](HolidaysServiceCreateRequest.md#runtime)
- [typeName](HolidaysServiceCreateRequest.md#typename)

### Methods

- [clone](HolidaysServiceCreateRequest.md#clone)
- [equals](HolidaysServiceCreateRequest.md#equals)
- [fromBinary](HolidaysServiceCreateRequest.md#frombinary)
- [fromJson](HolidaysServiceCreateRequest.md#fromjson)
- [fromJsonString](HolidaysServiceCreateRequest.md#fromjsonstring)
- [getType](HolidaysServiceCreateRequest.md#gettype)
- [toBinary](HolidaysServiceCreateRequest.md#tobinary)
- [toJSON](HolidaysServiceCreateRequest.md#tojson)
- [toJson](HolidaysServiceCreateRequest.md#tojson-1)
- [toJsonString](HolidaysServiceCreateRequest.md#tojsonstring)
- [equals](HolidaysServiceCreateRequest.md#equals-1)
- [fromBinary](HolidaysServiceCreateRequest.md#frombinary-1)
- [fromJson](HolidaysServiceCreateRequest.md#fromjson-1)
- [fromJsonString](HolidaysServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\> |

#### Overrides

Message&lt;HolidaysServiceCreateRequest\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L171)

## Properties

### description

• **description**: `string` = `""`

The description of the holiday

**`Generated`**

from field: string description = 11;

#### Defined in

[src/holidays_pb.ts:155](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L155)

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

The end timestamp

**`Generated`**

from field: int64 end_on = 13;

#### Defined in

[src/holidays_pb.ts:169](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L169)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/holidays_pb.ts:127](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L127)

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

The start timestamp

**`Generated`**

from field: int64 start_on = 12;

#### Defined in

[src/holidays_pb.ts:162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L162)

___

### title

• **title**: `string` = `""`

The title of the holiday

**`Generated`**

from field: string title = 10;

#### Defined in

[src/holidays_pb.ts:148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L148)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/holidays_pb.ts:134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L134)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/holidays_pb.ts:141](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L141)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L178)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:176](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L176)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysServiceCreateRequest"``

#### Defined in

[src/holidays_pb.ts:177](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L177)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md) \| `PlainMessage`<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

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

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md) \| `PlainMessage`<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md) \| `PlainMessage`<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L200)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Defined in

[src/holidays_pb.ts:188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L188)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Defined in

[src/holidays_pb.ts:192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L192)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Defined in

[src/holidays_pb.ts:196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L196)
