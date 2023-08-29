[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsItemsList

# Class: PurchasesIndentsItemsList

Describes the message consisting of the list of purchase indent items

**`Generated`**

from message Genesis.PurchasesIndentsItemsList

## Hierarchy

- `Message`<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\>

  ↳ **`PurchasesIndentsItemsList`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsItemsList.md#constructor)

### Properties

- [list](PurchasesIndentsItemsList.md#list)
- [fields](PurchasesIndentsItemsList.md#fields)
- [runtime](PurchasesIndentsItemsList.md#runtime)
- [typeName](PurchasesIndentsItemsList.md#typename)

### Methods

- [clone](PurchasesIndentsItemsList.md#clone)
- [equals](PurchasesIndentsItemsList.md#equals)
- [fromBinary](PurchasesIndentsItemsList.md#frombinary)
- [fromJson](PurchasesIndentsItemsList.md#fromjson)
- [fromJsonString](PurchasesIndentsItemsList.md#fromjsonstring)
- [getType](PurchasesIndentsItemsList.md#gettype)
- [toBinary](PurchasesIndentsItemsList.md#tobinary)
- [toJSON](PurchasesIndentsItemsList.md#tojson)
- [toJson](PurchasesIndentsItemsList.md#tojson-1)
- [toJsonString](PurchasesIndentsItemsList.md#tojsonstring)
- [equals](PurchasesIndentsItemsList.md#equals-1)
- [fromBinary](PurchasesIndentsItemsList.md#frombinary-1)
- [fromJson](PurchasesIndentsItemsList.md#fromjson-1)
- [fromJsonString](PurchasesIndentsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\> |

#### Overrides

Message&lt;PurchasesIndentsItemsList\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:896](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L896)

## Properties

### list

• **list**: [`PurchaseIndentItem`](PurchaseIndentItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.PurchaseIndentItem list = 1;

#### Defined in

[src/purchases_indents_pb.ts:894](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L894)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:903](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L903)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:901](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L901)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsItemsList"``

#### Defined in

[src/purchases_indents_pb.ts:902](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L902)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md) \| `PlainMessage`<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

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

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md) \| `PlainMessage`<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md) \| `PlainMessage`<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:919](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L919)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Defined in

[src/purchases_indents_pb.ts:907](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L907)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Defined in

[src/purchases_indents_pb.ts:911](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L911)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Defined in

[src/purchases_indents_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L915)
