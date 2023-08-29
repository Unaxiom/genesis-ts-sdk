[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceAutofillRequest

# Class: ReplaceableIndentsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Genesis.ReplaceableIndentsServiceAutofillRequest

## Hierarchy

- `Message`<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\>

  ↳ **`ReplaceableIndentsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceAutofillRequest.md#constructor)

### Properties

- [id](ReplaceableIndentsServiceAutofillRequest.md#id)
- [populateUsingEquationDependencies](ReplaceableIndentsServiceAutofillRequest.md#populateusingequationdependencies)
- [userComment](ReplaceableIndentsServiceAutofillRequest.md#usercomment)
- [fields](ReplaceableIndentsServiceAutofillRequest.md#fields)
- [runtime](ReplaceableIndentsServiceAutofillRequest.md#runtime)
- [typeName](ReplaceableIndentsServiceAutofillRequest.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceAutofillRequest.md#clone)
- [equals](ReplaceableIndentsServiceAutofillRequest.md#equals)
- [fromBinary](ReplaceableIndentsServiceAutofillRequest.md#frombinary)
- [fromJson](ReplaceableIndentsServiceAutofillRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceAutofillRequest.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceAutofillRequest.md#gettype)
- [toBinary](ReplaceableIndentsServiceAutofillRequest.md#tobinary)
- [toJSON](ReplaceableIndentsServiceAutofillRequest.md#tojson)
- [toJson](ReplaceableIndentsServiceAutofillRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceAutofillRequest.md#tojsonstring)
- [equals](ReplaceableIndentsServiceAutofillRequest.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceAutofillRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceAutofillRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:342](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L342)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/replaceable_indents_pb.ts:333](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L333)

___

### populateUsingEquationDependencies

• **populateUsingEquationDependencies**: `boolean` = `false`

Denotes if all the equation dependencies (if applicable) should also be automatically added to the replaceable indent

**`Generated`**

from field: bool populate_using_equation_dependencies = 3;

#### Defined in

[src/replaceable_indents_pb.ts:340](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L340)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/replaceable_indents_pb.ts:326](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L326)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:349](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L349)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:347](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L347)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServiceAutofillRequest"``

#### Defined in

[src/replaceable_indents_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L348)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

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

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:367](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L367)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L355)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L359)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:363](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L363)
