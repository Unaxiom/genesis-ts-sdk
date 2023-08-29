[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssetIndentItem

# Class: AssetIndentItem

Describes the parameters that constitute an item associated to a asset indent

**`Generated`**

from message Genesis.AssetIndentItem

## Hierarchy

- `Message`<[`AssetIndentItem`](AssetIndentItem.md)\>

  ↳ **`AssetIndentItem`**

## Table of contents

### Constructors

- [constructor](AssetIndentItem.md#constructor)

### Properties

- [approvalMetadata](AssetIndentItem.md#approvalmetadata)
- [assetIndentId](AssetIndentItem.md#assetindentid)
- [entityUuid](AssetIndentItem.md#entityuuid)
- [familyId](AssetIndentItem.md#familyid)
- [metadata](AssetIndentItem.md#metadata)
- [needApproval](AssetIndentItem.md#needapproval)
- [quantity](AssetIndentItem.md#quantity)
- [userComment](AssetIndentItem.md#usercomment)
- [fields](AssetIndentItem.md#fields)
- [runtime](AssetIndentItem.md#runtime)
- [typeName](AssetIndentItem.md#typename)

### Methods

- [clone](AssetIndentItem.md#clone)
- [equals](AssetIndentItem.md#equals)
- [fromBinary](AssetIndentItem.md#frombinary)
- [fromJson](AssetIndentItem.md#fromjson)
- [fromJsonString](AssetIndentItem.md#fromjsonstring)
- [getType](AssetIndentItem.md#gettype)
- [toBinary](AssetIndentItem.md#tobinary)
- [toJSON](AssetIndentItem.md#tojson)
- [toJson](AssetIndentItem.md#tojson-1)
- [toJsonString](AssetIndentItem.md#tojsonstring)
- [equals](AssetIndentItem.md#equals-1)
- [fromBinary](AssetIndentItem.md#frombinary-1)
- [fromJson](AssetIndentItem.md#fromjson-1)
- [fromJsonString](AssetIndentItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssetIndentItem`](AssetIndentItem.md)\> |

#### Overrides

Message&lt;AssetIndentItem\&gt;.constructor

#### Defined in

[src/asset_indents_pb.ts:631](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L631)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/asset_indents_pb.ts:594](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L594)

___

### assetIndentId

• **assetIndentId**: `bigint` = `protoInt64.zero`

Stores the asset indent ID

**`Generated`**

from field: int64 asset_indent_id = 10;

#### Defined in

[src/asset_indents_pb.ts:615](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L615)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/asset_indents_pb.ts:580](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L580)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/asset_indents_pb.ts:622](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L622)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this asset indent

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/asset_indents_pb.ts:587](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L587)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/asset_indents_pb.ts:601](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L601)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/asset_indents_pb.ts:629](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L629)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/asset_indents_pb.ts:608](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L608)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents_pb.ts:638](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L638)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents_pb.ts:636](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L636)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssetIndentItem"``

#### Defined in

[src/asset_indents_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L637)

## Methods

### clone

▸ **clone**(): [`AssetIndentItem`](AssetIndentItem.md)

Create a deep copy.

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentItem`](AssetIndentItem.md) \| `PlainMessage`<[`AssetIndentItem`](AssetIndentItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

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

[`AssetIndentItem`](AssetIndentItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssetIndentItem`](AssetIndentItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssetIndentItem`](AssetIndentItem.md)\>

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
| `a` | `undefined` \| [`AssetIndentItem`](AssetIndentItem.md) \| `PlainMessage`<[`AssetIndentItem`](AssetIndentItem.md)\> |
| `b` | `undefined` \| [`AssetIndentItem`](AssetIndentItem.md) \| `PlainMessage`<[`AssetIndentItem`](AssetIndentItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents_pb.ts:661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L661)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Defined in

[src/asset_indents_pb.ts:649](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L649)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Defined in

[src/asset_indents_pb.ts:653](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L653)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Defined in

[src/asset_indents_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L657)
