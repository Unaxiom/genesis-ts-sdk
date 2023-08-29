[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Client

# Class: Client

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Client

## Hierarchy

- `Message`<[`Client`](Client.md)\>

  ↳ **`Client`**

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [approvalMetadata](Client.md#approvalmetadata)
- [code](Client.md#code)
- [email](Client.md#email)
- [entityUuid](Client.md#entityuuid)
- [formData](Client.md#formdata)
- [logs](Client.md#logs)
- [metadata](Client.md#metadata)
- [name](Client.md#name)
- [phone](Client.md#phone)
- [status](Client.md#status)
- [vaultFolderId](Client.md#vaultfolderid)
- [fields](Client.md#fields)
- [runtime](Client.md#runtime)
- [typeName](Client.md#typename)

### Methods

- [clone](Client.md#clone)
- [equals](Client.md#equals)
- [fromBinary](Client.md#frombinary)
- [fromJson](Client.md#fromjson)
- [fromJsonString](Client.md#fromjsonstring)
- [getType](Client.md#gettype)
- [toBinary](Client.md#tobinary)
- [toJSON](Client.md#tojson)
- [toJson](Client.md#tojson-1)
- [toJsonString](Client.md#tojsonstring)
- [equals](Client.md#equals-1)
- [fromBinary](Client.md#frombinary-1)
- [fromJson](Client.md#fromjson-1)
- [fromJsonString](Client.md#fromjsonstring-1)

## Constructors

### constructor

• **new Client**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Client`](Client.md)\> |

#### Overrides

Message&lt;Client\&gt;.constructor

#### Defined in

[src/clients_pb.ts:390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L390)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/clients_pb.ts:332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L332)

___

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/clients_pb.ts:367](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L367)

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 12;

#### Defined in

[src/clients_pb.ts:374](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L374)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/clients_pb.ts:318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L318)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/clients_pb.ts:388](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L388)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this client

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/clients_pb.ts:346](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L346)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/clients_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L325)

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 10;

#### Defined in

[src/clients_pb.ts:360](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L360)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/clients_pb.ts:381](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L381)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this client

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/clients_pb.ts:339](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L339)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/clients_pb.ts:353](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L353)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients_pb.ts:397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L397)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients_pb.ts:395](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L395)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Client"``

#### Defined in

[src/clients_pb.ts:396](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L396)

## Methods

### clone

▸ **clone**(): [`Client`](Client.md)

Create a deep copy.

#### Returns

[`Client`](Client.md)

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
| `other` | `undefined` \| ``null`` \| [`Client`](Client.md) \| `PlainMessage`<[`Client`](Client.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Client`](Client.md)

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

[`Client`](Client.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Client`](Client.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Client`](Client.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Client`](Client.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Client`](Client.md)\>

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
| `a` | `undefined` \| [`Client`](Client.md) \| `PlainMessage`<[`Client`](Client.md)\> |
| `b` | `undefined` \| [`Client`](Client.md) \| `PlainMessage`<[`Client`](Client.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients_pb.ts:423](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L423)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/clients_pb.ts:411](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L411)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/clients_pb.ts:415](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L415)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/clients_pb.ts:419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L419)
