[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentItem

# Class: ProductionIndentItem

Describes the parameters that constitute an item associated to a production indent

**`Generated`**

from message Genesis.ProductionIndentItem

## Hierarchy

- `Message`<[`ProductionIndentItem`](ProductionIndentItem.md)\>

  ↳ **`ProductionIndentItem`**

## Table of contents

### Constructors

- [constructor](ProductionIndentItem.md#constructor)

### Properties

- [approvalMetadata](ProductionIndentItem.md#approvalmetadata)
- [entityUuid](ProductionIndentItem.md#entityuuid)
- [familyId](ProductionIndentItem.md#familyid)
- [internalQuantity](ProductionIndentItem.md#internalquantity)
- [metadata](ProductionIndentItem.md#metadata)
- [needApproval](ProductionIndentItem.md#needapproval)
- [productionIndentId](ProductionIndentItem.md#productionindentid)
- [userComment](ProductionIndentItem.md#usercomment)
- [fields](ProductionIndentItem.md#fields)
- [runtime](ProductionIndentItem.md#runtime)
- [typeName](ProductionIndentItem.md#typename)

### Methods

- [clone](ProductionIndentItem.md#clone)
- [equals](ProductionIndentItem.md#equals)
- [fromBinary](ProductionIndentItem.md#frombinary)
- [fromJson](ProductionIndentItem.md#fromjson)
- [fromJsonString](ProductionIndentItem.md#fromjsonstring)
- [getType](ProductionIndentItem.md#gettype)
- [toBinary](ProductionIndentItem.md#tobinary)
- [toJSON](ProductionIndentItem.md#tojson)
- [toJson](ProductionIndentItem.md#tojson-1)
- [toJsonString](ProductionIndentItem.md#tojsonstring)
- [equals](ProductionIndentItem.md#equals-1)
- [fromBinary](ProductionIndentItem.md#frombinary-1)
- [fromJson](ProductionIndentItem.md#fromjson-1)
- [fromJsonString](ProductionIndentItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentItem`](ProductionIndentItem.md)\> |

#### Overrides

Message&lt;ProductionIndentItem\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:729](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L729)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/production_indents_pb.ts:692](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L692)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/production_indents_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L678)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/production_indents_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L720)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity required

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/production_indents_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L727)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this production indent

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/production_indents_pb.ts:685](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L685)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/production_indents_pb.ts:699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L699)

___

### productionIndentId

• **productionIndentId**: `bigint` = `protoInt64.zero`

Stores the production indent ID

**`Generated`**

from field: int64 production_indent_id = 10;

#### Defined in

[src/production_indents_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L713)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/production_indents_pb.ts:706](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L706)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:736](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L736)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L734)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentItem"``

#### Defined in

[src/production_indents_pb.ts:735](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L735)

## Methods

### clone

▸ **clone**(): [`ProductionIndentItem`](ProductionIndentItem.md)

Create a deep copy.

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentItem`](ProductionIndentItem.md) \| `PlainMessage`<[`ProductionIndentItem`](ProductionIndentItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

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

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentItem`](ProductionIndentItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentItem`](ProductionIndentItem.md)\>

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
| `a` | `undefined` \| [`ProductionIndentItem`](ProductionIndentItem.md) \| `PlainMessage`<[`ProductionIndentItem`](ProductionIndentItem.md)\> |
| `b` | `undefined` \| [`ProductionIndentItem`](ProductionIndentItem.md) \| `PlainMessage`<[`ProductionIndentItem`](ProductionIndentItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:759](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L759)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Defined in

[src/production_indents_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L747)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Defined in

[src/production_indents_pb.ts:751](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L751)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Defined in

[src/production_indents_pb.ts:755](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L755)
