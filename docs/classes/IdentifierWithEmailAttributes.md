[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / IdentifierWithEmailAttributes

# Class: IdentifierWithEmailAttributes

Describes the standard identifier with email attributes. Useful when a record (identified by the identifier) needs to be mailed with the given subject, and the list of email addresses.

**`Generated`**

from message Genesis.IdentifierWithEmailAttributes

## Hierarchy

- `Message`<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\>

  ↳ **`IdentifierWithEmailAttributes`**

## Table of contents

### Constructors

- [constructor](IdentifierWithEmailAttributes.md#constructor)

### Properties

- [body](IdentifierWithEmailAttributes.md#body)
- [id](IdentifierWithEmailAttributes.md#id)
- [recipients](IdentifierWithEmailAttributes.md#recipients)
- [subject](IdentifierWithEmailAttributes.md#subject)
- [fields](IdentifierWithEmailAttributes.md#fields)
- [runtime](IdentifierWithEmailAttributes.md#runtime)
- [typeName](IdentifierWithEmailAttributes.md#typename)

### Methods

- [clone](IdentifierWithEmailAttributes.md#clone)
- [equals](IdentifierWithEmailAttributes.md#equals)
- [fromBinary](IdentifierWithEmailAttributes.md#frombinary)
- [fromJson](IdentifierWithEmailAttributes.md#fromjson)
- [fromJsonString](IdentifierWithEmailAttributes.md#fromjsonstring)
- [getType](IdentifierWithEmailAttributes.md#gettype)
- [toBinary](IdentifierWithEmailAttributes.md#tobinary)
- [toJSON](IdentifierWithEmailAttributes.md#tojson)
- [toJson](IdentifierWithEmailAttributes.md#tojson-1)
- [toJsonString](IdentifierWithEmailAttributes.md#tojsonstring)
- [equals](IdentifierWithEmailAttributes.md#equals-1)
- [fromBinary](IdentifierWithEmailAttributes.md#frombinary-1)
- [fromJson](IdentifierWithEmailAttributes.md#fromjson-1)
- [fromJsonString](IdentifierWithEmailAttributes.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierWithEmailAttributes**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\> |

#### Overrides

Message&lt;IdentifierWithEmailAttributes\&gt;.constructor

#### Defined in

[src/base_pb.ts:1329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1329)

## Properties

### body

• **body**: `string` = `""`

The body of the email

**`Generated`**

from field: string body = 12;

#### Defined in

[src/base_pb.ts:1327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1327)

___

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/base_pb.ts:1306](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1306)

___

### recipients

• **recipients**: `string`[] = `[]`

The list of email addresses of the recipients

**`Generated`**

from field: repeated string recipients = 11;

#### Defined in

[src/base_pb.ts:1320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1320)

___

### subject

• **subject**: `string` = `""`

The subject of the email

**`Generated`**

from field: string subject = 10;

#### Defined in

[src/base_pb.ts:1313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1313)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1336)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1334](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1334)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.IdentifierWithEmailAttributes"``

#### Defined in

[src/base_pb.ts:1335](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1335)

## Methods

### clone

▸ **clone**(): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

Create a deep copy.

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md) \| `PlainMessage`<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

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

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\>

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
| `a` | `undefined` \| [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md) \| `PlainMessage`<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\> |
| `b` | `undefined` \| [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md) \| `PlainMessage`<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1355)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Defined in

[src/base_pb.ts:1343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1343)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Defined in

[src/base_pb.ts:1347](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1347)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Defined in

[src/base_pb.ts:1351](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1351)
