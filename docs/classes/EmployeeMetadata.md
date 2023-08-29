[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EmployeeMetadata

# Class: EmployeeMetadata

Describes the employee metadata of each resource

**`Generated`**

from message Genesis.EmployeeMetadata

## Hierarchy

- `Message`<[`EmployeeMetadata`](EmployeeMetadata.md)\>

  ↳ **`EmployeeMetadata`**

## Table of contents

### Constructors

- [constructor](EmployeeMetadata.md#constructor)

### Properties

- [addedBy](EmployeeMetadata.md#addedby)
- [createdAt](EmployeeMetadata.md#createdat)
- [id](EmployeeMetadata.md#id)
- [isActive](EmployeeMetadata.md#isactive)
- [modifiedAt](EmployeeMetadata.md#modifiedat)
- [uuid](EmployeeMetadata.md#uuid)
- [fields](EmployeeMetadata.md#fields)
- [runtime](EmployeeMetadata.md#runtime)
- [typeName](EmployeeMetadata.md#typename)

### Methods

- [clone](EmployeeMetadata.md#clone)
- [equals](EmployeeMetadata.md#equals)
- [fromBinary](EmployeeMetadata.md#frombinary)
- [fromJson](EmployeeMetadata.md#fromjson)
- [fromJsonString](EmployeeMetadata.md#fromjsonstring)
- [getType](EmployeeMetadata.md#gettype)
- [toBinary](EmployeeMetadata.md#tobinary)
- [toJSON](EmployeeMetadata.md#tojson)
- [toJson](EmployeeMetadata.md#tojson-1)
- [toJsonString](EmployeeMetadata.md#tojsonstring)
- [equals](EmployeeMetadata.md#equals-1)
- [fromBinary](EmployeeMetadata.md#frombinary-1)
- [fromJson](EmployeeMetadata.md#fromjson-1)
- [fromJsonString](EmployeeMetadata.md#fromjsonstring-1)

## Constructors

### constructor

• **new EmployeeMetadata**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EmployeeMetadata`](EmployeeMetadata.md)\> |

#### Overrides

Message&lt;EmployeeMetadata\&gt;.constructor

#### Defined in

[src/base_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L713)

## Properties

### addedBy

• **addedBy**: `string` = `""`

Stores the username of the user who added this resource

**`Generated`**

from field: string added_by = 3;

#### Defined in

[src/base_pb.ts:690](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L690)

___

### createdAt

• **createdAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the resource was created

**`Generated`**

from field: int64 created_at = 5;

#### Defined in

[src/base_pb.ts:704](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L704)

___

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/base_pb.ts:676](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L676)

___

### isActive

• **isActive**: `boolean` = `false`

Represents if the resource is active

**`Generated`**

from field: bool is_active = 4;

#### Defined in

[src/base_pb.ts:697](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L697)

___

### modifiedAt

• **modifiedAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the resource was last modified

**`Generated`**

from field: int64 modified_at = 6;

#### Defined in

[src/base_pb.ts:711](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L711)

___

### uuid

• **uuid**: `Uint8Array`

UUID of the resource

**`Generated`**

from field: bytes uuid = 2;

#### Defined in

[src/base_pb.ts:683](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L683)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L720)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:718](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L718)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EmployeeMetadata"``

#### Defined in

[src/base_pb.ts:719](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L719)

## Methods

### clone

▸ **clone**(): [`EmployeeMetadata`](EmployeeMetadata.md)

Create a deep copy.

#### Returns

[`EmployeeMetadata`](EmployeeMetadata.md)

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
| `other` | `undefined` \| ``null`` \| [`EmployeeMetadata`](EmployeeMetadata.md) \| `PlainMessage`<[`EmployeeMetadata`](EmployeeMetadata.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EmployeeMetadata`](EmployeeMetadata.md)

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

[`EmployeeMetadata`](EmployeeMetadata.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EmployeeMetadata`](EmployeeMetadata.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EmployeeMetadata`](EmployeeMetadata.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EmployeeMetadata`](EmployeeMetadata.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EmployeeMetadata`](EmployeeMetadata.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EmployeeMetadata`](EmployeeMetadata.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EmployeeMetadata`](EmployeeMetadata.md)\>

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
| `a` | `undefined` \| [`EmployeeMetadata`](EmployeeMetadata.md) \| `PlainMessage`<[`EmployeeMetadata`](EmployeeMetadata.md)\> |
| `b` | `undefined` \| [`EmployeeMetadata`](EmployeeMetadata.md) \| `PlainMessage`<[`EmployeeMetadata`](EmployeeMetadata.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:741](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L741)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EmployeeMetadata`](EmployeeMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EmployeeMetadata`](EmployeeMetadata.md)

#### Defined in

[src/base_pb.ts:729](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L729)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EmployeeMetadata`](EmployeeMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EmployeeMetadata`](EmployeeMetadata.md)

#### Defined in

[src/base_pb.ts:733](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L733)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EmployeeMetadata`](EmployeeMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EmployeeMetadata`](EmployeeMetadata.md)

#### Defined in

[src/base_pb.ts:737](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L737)
