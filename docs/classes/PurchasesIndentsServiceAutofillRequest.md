[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceAutofillRequest

# Class: PurchasesIndentsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Genesis.PurchasesIndentsServiceAutofillRequest

## Hierarchy

- `Message`<[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)\>

  ↳ **`PurchasesIndentsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceAutofillRequest.md#constructor)

### Properties

- [id](PurchasesIndentsServiceAutofillRequest.md#id)
- [userComment](PurchasesIndentsServiceAutofillRequest.md#usercomment)
- [fields](PurchasesIndentsServiceAutofillRequest.md#fields)
- [runtime](PurchasesIndentsServiceAutofillRequest.md#runtime)
- [typeName](PurchasesIndentsServiceAutofillRequest.md#typename)

### Methods

- [clone](PurchasesIndentsServiceAutofillRequest.md#clone)
- [equals](PurchasesIndentsServiceAutofillRequest.md#equals)
- [fromBinary](PurchasesIndentsServiceAutofillRequest.md#frombinary)
- [fromJson](PurchasesIndentsServiceAutofillRequest.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceAutofillRequest.md#fromjsonstring)
- [getType](PurchasesIndentsServiceAutofillRequest.md#gettype)
- [toBinary](PurchasesIndentsServiceAutofillRequest.md#tobinary)
- [toJSON](PurchasesIndentsServiceAutofillRequest.md#tojson)
- [toJson](PurchasesIndentsServiceAutofillRequest.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceAutofillRequest.md#tojsonstring)
- [equals](PurchasesIndentsServiceAutofillRequest.md#equals-1)
- [fromBinary](PurchasesIndentsServiceAutofillRequest.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceAutofillRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)\> |

#### Overrides

Message&lt;PurchasesIndentsServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:287](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L287)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/purchases_indents_pb.ts:285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L285)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_indents_pb.ts:278](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L278)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:294](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L294)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:292](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L292)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsServiceAutofillRequest"``

#### Defined in

[src/purchases_indents_pb.ts:293](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L293)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

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

[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L311)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:299](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L299)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:303](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L303)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceAutofillRequest`](PurchasesIndentsServiceAutofillRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:307](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L307)
