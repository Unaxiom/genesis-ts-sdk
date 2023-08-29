[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationSalesBundleItemHistoryRequest

# Class: EquationSalesBundleItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.EquationSalesBundleItemHistoryRequest

## Hierarchy

- `Message`<[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)\>

  ↳ **`EquationSalesBundleItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](EquationSalesBundleItemHistoryRequest.md#constructor)

### Properties

- [equationId](EquationSalesBundleItemHistoryRequest.md#equationid)
- [familyId](EquationSalesBundleItemHistoryRequest.md#familyid)
- [fields](EquationSalesBundleItemHistoryRequest.md#fields)
- [runtime](EquationSalesBundleItemHistoryRequest.md#runtime)
- [typeName](EquationSalesBundleItemHistoryRequest.md#typename)

### Methods

- [clone](EquationSalesBundleItemHistoryRequest.md#clone)
- [equals](EquationSalesBundleItemHistoryRequest.md#equals)
- [fromBinary](EquationSalesBundleItemHistoryRequest.md#frombinary)
- [fromJson](EquationSalesBundleItemHistoryRequest.md#fromjson)
- [fromJsonString](EquationSalesBundleItemHistoryRequest.md#fromjsonstring)
- [getType](EquationSalesBundleItemHistoryRequest.md#gettype)
- [toBinary](EquationSalesBundleItemHistoryRequest.md#tobinary)
- [toJSON](EquationSalesBundleItemHistoryRequest.md#tojson)
- [toJson](EquationSalesBundleItemHistoryRequest.md#tojson-1)
- [toJsonString](EquationSalesBundleItemHistoryRequest.md#tojsonstring)
- [equals](EquationSalesBundleItemHistoryRequest.md#equals-1)
- [fromBinary](EquationSalesBundleItemHistoryRequest.md#frombinary-1)
- [fromJson](EquationSalesBundleItemHistoryRequest.md#fromjson-1)
- [fromJsonString](EquationSalesBundleItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationSalesBundleItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)\> |

#### Overrides

Message&lt;EquationSalesBundleItemHistoryRequest\&gt;.constructor

#### Defined in

[src/equations_sales_bundles_pb.ts:762](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L762)

## Properties

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation sales bundle

**`Generated`**

from field: int64 equation_id = 10;

#### Defined in

[src/equations_sales_bundles_pb.ts:753](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L753)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/equations_sales_bundles_pb.ts:760](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L760)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles_pb.ts:769](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L769)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles_pb.ts:767](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L767)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationSalesBundleItemHistoryRequest"``

#### Defined in

[src/equations_sales_bundles_pb.ts:768](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L768)

## Methods

### clone

▸ **clone**(): [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md) \| `PlainMessage`<[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

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

[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md) \| `PlainMessage`<[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md) \| `PlainMessage`<[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles_pb.ts:786](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L786)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:774](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L774)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:778](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L778)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundleItemHistoryRequest`](EquationSalesBundleItemHistoryRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:782](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L782)
