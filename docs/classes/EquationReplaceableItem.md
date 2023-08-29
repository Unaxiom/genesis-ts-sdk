[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationReplaceableItem

# Class: EquationReplaceableItem

Describes the parameters that constitute an item associated to a equation replaceable

**`Generated`**

from message Genesis.EquationReplaceableItem

## Hierarchy

- `Message`<[`EquationReplaceableItem`](EquationReplaceableItem.md)\>

  ↳ **`EquationReplaceableItem`**

## Table of contents

### Constructors

- [constructor](EquationReplaceableItem.md#constructor)

### Properties

- [approvalMetadata](EquationReplaceableItem.md#approvalmetadata)
- [entityUuid](EquationReplaceableItem.md#entityuuid)
- [equationId](EquationReplaceableItem.md#equationid)
- [metadata](EquationReplaceableItem.md#metadata)
- [needApproval](EquationReplaceableItem.md#needapproval)
- [replaceableFamilyId](EquationReplaceableItem.md#replaceablefamilyid)
- [replaceableType](EquationReplaceableItem.md#replaceabletype)
- [specifications](EquationReplaceableItem.md#specifications)
- [unitPrice](EquationReplaceableItem.md#unitprice)
- [userComment](EquationReplaceableItem.md#usercomment)
- [fields](EquationReplaceableItem.md#fields)
- [runtime](EquationReplaceableItem.md#runtime)
- [typeName](EquationReplaceableItem.md#typename)

### Methods

- [clone](EquationReplaceableItem.md#clone)
- [equals](EquationReplaceableItem.md#equals)
- [fromBinary](EquationReplaceableItem.md#frombinary)
- [fromJson](EquationReplaceableItem.md#fromjson)
- [fromJsonString](EquationReplaceableItem.md#fromjsonstring)
- [getType](EquationReplaceableItem.md#gettype)
- [toBinary](EquationReplaceableItem.md#tobinary)
- [toJSON](EquationReplaceableItem.md#tojson)
- [toJson](EquationReplaceableItem.md#tojson-1)
- [toJsonString](EquationReplaceableItem.md#tojsonstring)
- [equals](EquationReplaceableItem.md#equals-1)
- [fromBinary](EquationReplaceableItem.md#frombinary-1)
- [fromJson](EquationReplaceableItem.md#fromjson-1)
- [fromJsonString](EquationReplaceableItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationReplaceableItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationReplaceableItem`](EquationReplaceableItem.md)\> |

#### Overrides

Message&lt;EquationReplaceableItem\&gt;.constructor

#### Defined in

[src/equations_replaceables_pb.ts:620](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L620)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/equations_replaceables_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L569)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equations_replaceables_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L555)

___

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation replaceable

**`Generated`**

from field: int64 equation_id = 10;

#### Defined in

[src/equations_replaceables_pb.ts:590](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L590)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this equation replaceable

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/equations_replaceables_pb.ts:562](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L562)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/equations_replaceables_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L576)

___

### replaceableFamilyId

• **replaceableFamilyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: int64 replaceable_family_id = 12;

#### Defined in

[src/equations_replaceables_pb.ts:604](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L604)

___

### replaceableType

• **replaceableType**: `string` = `""`

Stores the type of the item (whether it is a consumable, or a spare)

**`Generated`**

from field: string replaceable_type = 11;

#### Defined in

[src/equations_replaceables_pb.ts:597](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L597)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_replaceables_pb.ts:618](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L618)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: int64 unit_price = 13;

#### Defined in

[src/equations_replaceables_pb.ts:611](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L611)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/equations_replaceables_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L583)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_replaceables_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L627)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_replaceables_pb.ts:625](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L625)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationReplaceableItem"``

#### Defined in

[src/equations_replaceables_pb.ts:626](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L626)

## Methods

### clone

▸ **clone**(): [`EquationReplaceableItem`](EquationReplaceableItem.md)

Create a deep copy.

#### Returns

[`EquationReplaceableItem`](EquationReplaceableItem.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationReplaceableItem`](EquationReplaceableItem.md) \| `PlainMessage`<[`EquationReplaceableItem`](EquationReplaceableItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationReplaceableItem`](EquationReplaceableItem.md)

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

[`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationReplaceableItem`](EquationReplaceableItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationReplaceableItem`](EquationReplaceableItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationReplaceableItem`](EquationReplaceableItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationReplaceableItem`](EquationReplaceableItem.md)\>

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
| `a` | `undefined` \| [`EquationReplaceableItem`](EquationReplaceableItem.md) \| `PlainMessage`<[`EquationReplaceableItem`](EquationReplaceableItem.md)\> |
| `b` | `undefined` \| [`EquationReplaceableItem`](EquationReplaceableItem.md) \| `PlainMessage`<[`EquationReplaceableItem`](EquationReplaceableItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_replaceables_pb.ts:652](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L652)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Defined in

[src/equations_replaceables_pb.ts:640](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L640)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Defined in

[src/equations_replaceables_pb.ts:644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L644)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationReplaceableItem`](EquationReplaceableItem.md)

#### Defined in

[src/equations_replaceables_pb.ts:648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L648)
