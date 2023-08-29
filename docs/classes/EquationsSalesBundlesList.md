[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesList

# Class: EquationsSalesBundlesList

Describes the message consisting of the list of equations sales bundles

**`Generated`**

from message Genesis.EquationsSalesBundlesList

## Hierarchy

- `Message`<[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)\>

  ↳ **`EquationsSalesBundlesList`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesList.md#constructor)

### Properties

- [list](EquationsSalesBundlesList.md#list)
- [fields](EquationsSalesBundlesList.md#fields)
- [runtime](EquationsSalesBundlesList.md#runtime)
- [typeName](EquationsSalesBundlesList.md#typename)

### Methods

- [clone](EquationsSalesBundlesList.md#clone)
- [equals](EquationsSalesBundlesList.md#equals)
- [fromBinary](EquationsSalesBundlesList.md#frombinary)
- [fromJson](EquationsSalesBundlesList.md#fromjson)
- [fromJsonString](EquationsSalesBundlesList.md#fromjsonstring)
- [getType](EquationsSalesBundlesList.md#gettype)
- [toBinary](EquationsSalesBundlesList.md#tobinary)
- [toJSON](EquationsSalesBundlesList.md#tojson)
- [toJson](EquationsSalesBundlesList.md#tojson-1)
- [toJsonString](EquationsSalesBundlesList.md#tojsonstring)
- [equals](EquationsSalesBundlesList.md#equals-1)
- [fromBinary](EquationsSalesBundlesList.md#frombinary-1)
- [fromJson](EquationsSalesBundlesList.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)\> |

#### Overrides

Message&lt;EquationsSalesBundlesList\&gt;.constructor

#### Defined in

[src/equations_sales_bundles_pb.ts:671](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L671)

## Properties

### list

• **list**: [`EquationSalesBundle`](EquationSalesBundle.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.EquationSalesBundle list = 1;

#### Defined in

[src/equations_sales_bundles_pb.ts:669](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L669)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L678)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles_pb.ts:676](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L676)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsSalesBundlesList"``

#### Defined in

[src/equations_sales_bundles_pb.ts:677](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L677)

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md) \| `PlainMessage`<[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

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

[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md) \| `PlainMessage`<[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md) \| `PlainMessage`<[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles_pb.ts:694](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L694)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:682](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L682)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L686)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesList`](EquationsSalesBundlesList.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:690](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L690)
