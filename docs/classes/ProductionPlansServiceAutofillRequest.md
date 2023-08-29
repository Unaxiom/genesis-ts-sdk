[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceAutofillRequest

# Class: ProductionPlansServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Genesis.ProductionPlansServiceAutofillRequest

## Hierarchy

- `Message`<[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)\>

  ↳ **`ProductionPlansServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceAutofillRequest.md#constructor)

### Properties

- [id](ProductionPlansServiceAutofillRequest.md#id)
- [populateUsingEquationDependencies](ProductionPlansServiceAutofillRequest.md#populateusingequationdependencies)
- [userComment](ProductionPlansServiceAutofillRequest.md#usercomment)
- [fields](ProductionPlansServiceAutofillRequest.md#fields)
- [runtime](ProductionPlansServiceAutofillRequest.md#runtime)
- [typeName](ProductionPlansServiceAutofillRequest.md#typename)

### Methods

- [clone](ProductionPlansServiceAutofillRequest.md#clone)
- [equals](ProductionPlansServiceAutofillRequest.md#equals)
- [fromBinary](ProductionPlansServiceAutofillRequest.md#frombinary)
- [fromJson](ProductionPlansServiceAutofillRequest.md#fromjson)
- [fromJsonString](ProductionPlansServiceAutofillRequest.md#fromjsonstring)
- [getType](ProductionPlansServiceAutofillRequest.md#gettype)
- [toBinary](ProductionPlansServiceAutofillRequest.md#tobinary)
- [toJSON](ProductionPlansServiceAutofillRequest.md#tojson)
- [toJson](ProductionPlansServiceAutofillRequest.md#tojson-1)
- [toJsonString](ProductionPlansServiceAutofillRequest.md#tojsonstring)
- [equals](ProductionPlansServiceAutofillRequest.md#equals-1)
- [fromBinary](ProductionPlansServiceAutofillRequest.md#frombinary-1)
- [fromJson](ProductionPlansServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceAutofillRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)\> |

#### Overrides

Message&lt;ProductionPlansServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:422](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L422)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/production_plans_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L413)

___

### populateUsingEquationDependencies

• **populateUsingEquationDependencies**: `boolean` = `false`

Denotes if all the equation dependencies (if applicable) should also be automatically added to the production plan

**`Generated`**

from field: bool populate_using_equation_dependencies = 3;

#### Defined in

[src/production_plans_pb.ts:420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L420)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_plans_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L406)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:429](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L429)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L427)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServiceAutofillRequest"``

#### Defined in

[src/production_plans_pb.ts:428](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L428)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md) \| `PlainMessage`<[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

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

[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md) \| `PlainMessage`<[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md) \| `PlainMessage`<[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L447)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Defined in

[src/production_plans_pb.ts:435](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L435)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Defined in

[src/production_plans_pb.ts:439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L439)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceAutofillRequest`](ProductionPlansServiceAutofillRequest.md)

#### Defined in

[src/production_plans_pb.ts:443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L443)
