[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItem

# Class: GoodsDispatchItem

Describes the parameters that constitute an item associated to a goods dispatch

**`Generated`**

from message Genesis.GoodsDispatchItem

## Hierarchy

- `Message`<[`GoodsDispatchItem`](GoodsDispatchItem.md)\>

  ↳ **`GoodsDispatchItem`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchItem.md#constructor)

### Properties

- [approvalMetadata](GoodsDispatchItem.md#approvalmetadata)
- [clientFamilyCode](GoodsDispatchItem.md#clientfamilycode)
- [clientQuantity](GoodsDispatchItem.md#clientquantity)
- [clientUomId](GoodsDispatchItem.md#clientuomid)
- [entityUuid](GoodsDispatchItem.md#entityuuid)
- [familyId](GoodsDispatchItem.md#familyid)
- [goodsDispatchId](GoodsDispatchItem.md#goodsdispatchid)
- [internalQuantity](GoodsDispatchItem.md#internalquantity)
- [itemHash](GoodsDispatchItem.md#itemhash)
- [metadata](GoodsDispatchItem.md#metadata)
- [needApproval](GoodsDispatchItem.md#needapproval)
- [userComment](GoodsDispatchItem.md#usercomment)
- [fields](GoodsDispatchItem.md#fields)
- [runtime](GoodsDispatchItem.md#runtime)
- [typeName](GoodsDispatchItem.md#typename)

### Methods

- [clone](GoodsDispatchItem.md#clone)
- [equals](GoodsDispatchItem.md#equals)
- [fromBinary](GoodsDispatchItem.md#frombinary)
- [fromJson](GoodsDispatchItem.md#fromjson)
- [fromJsonString](GoodsDispatchItem.md#fromjsonstring)
- [getType](GoodsDispatchItem.md#gettype)
- [toBinary](GoodsDispatchItem.md#tobinary)
- [toJSON](GoodsDispatchItem.md#tojson)
- [toJson](GoodsDispatchItem.md#tojson-1)
- [toJsonString](GoodsDispatchItem.md#tojsonstring)
- [equals](GoodsDispatchItem.md#equals-1)
- [fromBinary](GoodsDispatchItem.md#frombinary-1)
- [fromJson](GoodsDispatchItem.md#fromjson-1)
- [fromJsonString](GoodsDispatchItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchItem`](GoodsDispatchItem.md)\> |

#### Overrides

Message&lt;GoodsDispatchItem\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:776](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L776)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/goods_dispatches_pb.ts:711](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L711)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/goods_dispatches_pb.ts:774](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L774)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: int64 client_quantity = 15;

#### Defined in

[src/goods_dispatches_pb.ts:767](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L767)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: int64 client_uom_id = 14;

#### Defined in

[src/goods_dispatches_pb.ts:760](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L760)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/goods_dispatches_pb.ts:697](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L697)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/goods_dispatches_pb.ts:739](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L739)

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: int64 goods_dispatch_id = 10;

#### Defined in

[src/goods_dispatches_pb.ts:732](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L732)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 13;

#### Defined in

[src/goods_dispatches_pb.ts:753](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L753)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/goods_dispatches_pb.ts:746](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L746)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this goods dispatch

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/goods_dispatches_pb.ts:704](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L704)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/goods_dispatches_pb.ts:718](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L718)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/goods_dispatches_pb.ts:725](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L725)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:783](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L783)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:781](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L781)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchItem"``

#### Defined in

[src/goods_dispatches_pb.ts:782](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L782)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchItem`](GoodsDispatchItem.md)

Create a deep copy.

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchItem`](GoodsDispatchItem.md) \| `PlainMessage`<[`GoodsDispatchItem`](GoodsDispatchItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

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

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchItem`](GoodsDispatchItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchItem`](GoodsDispatchItem.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchItem`](GoodsDispatchItem.md) \| `PlainMessage`<[`GoodsDispatchItem`](GoodsDispatchItem.md)\> |
| `b` | `undefined` \| [`GoodsDispatchItem`](GoodsDispatchItem.md) \| `PlainMessage`<[`GoodsDispatchItem`](GoodsDispatchItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L810)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Defined in

[src/goods_dispatches_pb.ts:798](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L798)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Defined in

[src/goods_dispatches_pb.ts:802](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L802)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Defined in

[src/goods_dispatches_pb.ts:806](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L806)
