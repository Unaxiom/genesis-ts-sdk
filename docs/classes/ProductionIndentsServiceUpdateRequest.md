[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceUpdateRequest

# Class: ProductionIndentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.ProductionIndentsServiceUpdateRequest

## Hierarchy

- `Message`<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\>

  ↳ **`ProductionIndentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceUpdateRequest.md#constructor)

### Properties

- [formData](ProductionIndentsServiceUpdateRequest.md#formdata)
- [id](ProductionIndentsServiceUpdateRequest.md#id)
- [notifyUsers](ProductionIndentsServiceUpdateRequest.md#notifyusers)
- [referenceId](ProductionIndentsServiceUpdateRequest.md#referenceid)
- [supervisor](ProductionIndentsServiceUpdateRequest.md#supervisor)
- [userComment](ProductionIndentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ProductionIndentsServiceUpdateRequest.md#vaultfolderid)
- [fields](ProductionIndentsServiceUpdateRequest.md#fields)
- [runtime](ProductionIndentsServiceUpdateRequest.md#runtime)
- [typeName](ProductionIndentsServiceUpdateRequest.md#typename)

### Methods

- [clone](ProductionIndentsServiceUpdateRequest.md#clone)
- [equals](ProductionIndentsServiceUpdateRequest.md#equals)
- [fromBinary](ProductionIndentsServiceUpdateRequest.md#frombinary)
- [fromJson](ProductionIndentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ProductionIndentsServiceUpdateRequest.md#fromjsonstring)
- [getType](ProductionIndentsServiceUpdateRequest.md#gettype)
- [toBinary](ProductionIndentsServiceUpdateRequest.md#tobinary)
- [toJSON](ProductionIndentsServiceUpdateRequest.md#tojson)
- [toJson](ProductionIndentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ProductionIndentsServiceUpdateRequest.md#tojsonstring)
- [equals](ProductionIndentsServiceUpdateRequest.md#equals-1)
- [fromBinary](ProductionIndentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ProductionIndentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;ProductionIndentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:280](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L280)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/production_indents_pb.ts:278](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L278)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/production_indents_pb.ts:243](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L243)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/production_indents_pb.ts:250](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L250)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/production_indents_pb.ts:264](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L264)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_indents_pb.ts:271](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L271)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_indents_pb.ts:236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L236)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/production_indents_pb.ts:257](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L257)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:287](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L287)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L285)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsServiceUpdateRequest"``

#### Defined in

[src/production_indents_pb.ts:286](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L286)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

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

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:309](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L309)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Defined in

[src/production_indents_pb.ts:297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L297)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Defined in

[src/production_indents_pb.ts:301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L301)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Defined in

[src/production_indents_pb.ts:305](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L305)
