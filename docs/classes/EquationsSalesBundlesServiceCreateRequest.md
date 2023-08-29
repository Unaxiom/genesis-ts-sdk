[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesServiceCreateRequest

# Class: EquationsSalesBundlesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.EquationsSalesBundlesServiceCreateRequest

## Hierarchy

- `Message`<[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)\>

  ↳ **`EquationsSalesBundlesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesServiceCreateRequest.md#constructor)

### Properties

- [description](EquationsSalesBundlesServiceCreateRequest.md#description)
- [entityUuid](EquationsSalesBundlesServiceCreateRequest.md#entityuuid)
- [familyId](EquationsSalesBundlesServiceCreateRequest.md#familyid)
- [name](EquationsSalesBundlesServiceCreateRequest.md#name)
- [userComment](EquationsSalesBundlesServiceCreateRequest.md#usercomment)
- [vaultFolderId](EquationsSalesBundlesServiceCreateRequest.md#vaultfolderid)
- [fields](EquationsSalesBundlesServiceCreateRequest.md#fields)
- [runtime](EquationsSalesBundlesServiceCreateRequest.md#runtime)
- [typeName](EquationsSalesBundlesServiceCreateRequest.md#typename)

### Methods

- [clone](EquationsSalesBundlesServiceCreateRequest.md#clone)
- [equals](EquationsSalesBundlesServiceCreateRequest.md#equals)
- [fromBinary](EquationsSalesBundlesServiceCreateRequest.md#frombinary)
- [fromJson](EquationsSalesBundlesServiceCreateRequest.md#fromjson)
- [fromJsonString](EquationsSalesBundlesServiceCreateRequest.md#fromjsonstring)
- [getType](EquationsSalesBundlesServiceCreateRequest.md#gettype)
- [toBinary](EquationsSalesBundlesServiceCreateRequest.md#tobinary)
- [toJSON](EquationsSalesBundlesServiceCreateRequest.md#tojson)
- [toJson](EquationsSalesBundlesServiceCreateRequest.md#tojson-1)
- [toJsonString](EquationsSalesBundlesServiceCreateRequest.md#tojsonstring)
- [equals](EquationsSalesBundlesServiceCreateRequest.md#equals-1)
- [fromBinary](EquationsSalesBundlesServiceCreateRequest.md#frombinary-1)
- [fromJson](EquationsSalesBundlesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;EquationsSalesBundlesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/equations_sales_bundles_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L142)

## Properties

### description

• **description**: `string` = `""`

The description of the equation sales bundle

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_sales_bundles_pb.ts:140](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L140)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equations_sales_bundles_pb.ts:105](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L105)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: int64 family_id = 12;

#### Defined in

[src/equations_sales_bundles_pb.ts:133](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L133)

___

### name

• **name**: `string` = `""`

The name of the equation sales bundle

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_sales_bundles_pb.ts:126](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L126)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/equations_sales_bundles_pb.ts:112](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L112)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/equations_sales_bundles_pb.ts:119](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L119)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L149)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles_pb.ts:147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L147)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsSalesBundlesServiceCreateRequest"``

#### Defined in

[src/equations_sales_bundles_pb.ts:148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L148)

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md) \| `PlainMessage`<[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

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

[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md) \| `PlainMessage`<[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md) \| `PlainMessage`<[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L170)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L158)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L162)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceCreateRequest`](EquationsSalesBundlesServiceCreateRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:166](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L166)
