[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceCreateRequest

# Class: ClientsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.ClientsServiceCreateRequest

## Hierarchy

- `Message`<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

  ↳ **`ClientsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientsServiceCreateRequest.md#constructor)

### Properties

- [code](ClientsServiceCreateRequest.md#code)
- [email](ClientsServiceCreateRequest.md#email)
- [entityUuid](ClientsServiceCreateRequest.md#entityuuid)
- [formData](ClientsServiceCreateRequest.md#formdata)
- [name](ClientsServiceCreateRequest.md#name)
- [phone](ClientsServiceCreateRequest.md#phone)
- [userComment](ClientsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ClientsServiceCreateRequest.md#vaultfolderid)
- [fields](ClientsServiceCreateRequest.md#fields)
- [runtime](ClientsServiceCreateRequest.md#runtime)
- [typeName](ClientsServiceCreateRequest.md#typename)

### Methods

- [clone](ClientsServiceCreateRequest.md#clone)
- [equals](ClientsServiceCreateRequest.md#equals)
- [fromBinary](ClientsServiceCreateRequest.md#frombinary)
- [fromJson](ClientsServiceCreateRequest.md#fromjson)
- [fromJsonString](ClientsServiceCreateRequest.md#fromjsonstring)
- [getType](ClientsServiceCreateRequest.md#gettype)
- [toBinary](ClientsServiceCreateRequest.md#tobinary)
- [toJSON](ClientsServiceCreateRequest.md#tojson)
- [toJson](ClientsServiceCreateRequest.md#tojson-1)
- [toJsonString](ClientsServiceCreateRequest.md#tojsonstring)
- [equals](ClientsServiceCreateRequest.md#equals-1)
- [fromBinary](ClientsServiceCreateRequest.md#frombinary-1)
- [fromJson](ClientsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ClientsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;ClientsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/clients_pb.ts:165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L165)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/clients_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L142)

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 12;

#### Defined in

[src/clients_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L149)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/clients_pb.ts:114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L114)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/clients_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L163)

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 10;

#### Defined in

[src/clients_pb.ts:135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L135)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/clients_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L156)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/clients_pb.ts:121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L121)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/clients_pb.ts:128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L128)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients_pb.ts:172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L172)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L170)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ClientsServiceCreateRequest"``

#### Defined in

[src/clients_pb.ts:171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L171)

## Methods

### clone

▸ **clone**(): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

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

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients_pb.ts:195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L195)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

[src/clients_pb.ts:183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L183)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

[src/clients_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L187)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

[src/clients_pb.ts:191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L191)
