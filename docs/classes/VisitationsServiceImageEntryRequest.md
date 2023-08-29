[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceImageEntryRequest

# Class: VisitationsServiceImageEntryRequest

Describes the message payload that is necessary to create an entry record. This will most likely be called only from mobile devices.

**`Generated`**

from message Genesis.VisitationsServiceImageEntryRequest

## Hierarchy

- `Message`<[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)\>

  ↳ **`VisitationsServiceImageEntryRequest`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceImageEntryRequest.md#constructor)

### Properties

- [associateId](VisitationsServiceImageEntryRequest.md#associateid)
- [description](VisitationsServiceImageEntryRequest.md#description)
- [entityUuid](VisitationsServiceImageEntryRequest.md#entityuuid)
- [entryImage](VisitationsServiceImageEntryRequest.md#entryimage)
- [entryImageMimeType](VisitationsServiceImageEntryRequest.md#entryimagemimetype)
- [entryLatitude](VisitationsServiceImageEntryRequest.md#entrylatitude)
- [entryLongitude](VisitationsServiceImageEntryRequest.md#entrylongitude)
- [userId](VisitationsServiceImageEntryRequest.md#userid)
- [fields](VisitationsServiceImageEntryRequest.md#fields)
- [runtime](VisitationsServiceImageEntryRequest.md#runtime)
- [typeName](VisitationsServiceImageEntryRequest.md#typename)

### Methods

- [clone](VisitationsServiceImageEntryRequest.md#clone)
- [equals](VisitationsServiceImageEntryRequest.md#equals)
- [fromBinary](VisitationsServiceImageEntryRequest.md#frombinary)
- [fromJson](VisitationsServiceImageEntryRequest.md#fromjson)
- [fromJsonString](VisitationsServiceImageEntryRequest.md#fromjsonstring)
- [getType](VisitationsServiceImageEntryRequest.md#gettype)
- [toBinary](VisitationsServiceImageEntryRequest.md#tobinary)
- [toJSON](VisitationsServiceImageEntryRequest.md#tojson)
- [toJson](VisitationsServiceImageEntryRequest.md#tojson-1)
- [toJsonString](VisitationsServiceImageEntryRequest.md#tojsonstring)
- [equals](VisitationsServiceImageEntryRequest.md#equals-1)
- [fromBinary](VisitationsServiceImageEntryRequest.md#frombinary-1)
- [fromJson](VisitationsServiceImageEntryRequest.md#fromjson-1)
- [fromJsonString](VisitationsServiceImageEntryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceImageEntryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)\> |

#### Overrides

Message&lt;VisitationsServiceImageEntryRequest\&gt;.constructor

#### Defined in

[src/visitations_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L413)

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

The ID of the associate who has requested for visitation

**`Generated`**

from field: int64 associate_id = 12;

#### Defined in

[src/visitations_pb.ts:376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L376)

___

### description

• **description**: `string` = `""`

The description of the visitation

**`Generated`**

from field: string description = 15;

#### Defined in

[src/visitations_pb.ts:397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L397)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/visitations_pb.ts:358](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L358)

___

### entryImage

• **entryImage**: `Uint8Array`

The raw image content of the entry image

**`Generated`**

from field: bytes entry_image = 13;

#### Defined in

[src/visitations_pb.ts:383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L383)

___

### entryImageMimeType

• **entryImageMimeType**: `string` = `""`

The MIME type of the entry image

**`Generated`**

from field: string entry_image_mime_type = 14;

#### Defined in

[src/visitations_pb.ts:390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L390)

___

### entryLatitude

• **entryLatitude**: `number` = `0`

The latitude of where the entry was recorded

**`Generated`**

from field: double entry_latitude = 16;

#### Defined in

[src/visitations_pb.ts:404](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L404)

___

### entryLongitude

• **entryLongitude**: `number` = `0`

The longiture of where the entry was recorded

**`Generated`**

from field: double entry_longitude = 17;

#### Defined in

[src/visitations_pb.ts:411](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L411)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

// The reference ID of the visitation
string reference_id = 10 [(genesis_validate.rules).string = {
    pattern: "[0-9A-Za-z ]+$", // Allow spaces
}];
The ID of the user who is being visited

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/visitations_pb.ts:369](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L369)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations_pb.ts:420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L420)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations_pb.ts:418](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L418)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.VisitationsServiceImageEntryRequest"``

#### Defined in

[src/visitations_pb.ts:419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L419)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

Create a deep copy.

#### Returns

[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md) \| `PlainMessage`<[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

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

[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md) \| `PlainMessage`<[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)\> |
| `b` | `undefined` \| [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md) \| `PlainMessage`<[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations_pb.ts:443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L443)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Defined in

[src/visitations_pb.ts:431](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L431)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Defined in

[src/visitations_pb.ts:435](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L435)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceImageEntryRequest`](VisitationsServiceImageEntryRequest.md)

#### Defined in

[src/visitations_pb.ts:439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L439)
