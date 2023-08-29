[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesServiceItemCreateRequest

# Class: EquationsSalesBundlesServiceItemCreateRequest

Describes the parameters required to add an item to a equation sales bundle

**`Generated`**

from message Genesis.EquationsSalesBundlesServiceItemCreateRequest

## Hierarchy

- `Message`<[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)\>

  ↳ **`EquationsSalesBundlesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesServiceItemCreateRequest.md#constructor)

### Properties

- [equationId](EquationsSalesBundlesServiceItemCreateRequest.md#equationid)
- [familyId](EquationsSalesBundlesServiceItemCreateRequest.md#familyid)
- [quantity](EquationsSalesBundlesServiceItemCreateRequest.md#quantity)
- [specifications](EquationsSalesBundlesServiceItemCreateRequest.md#specifications)
- [unitPrice](EquationsSalesBundlesServiceItemCreateRequest.md#unitprice)
- [userComment](EquationsSalesBundlesServiceItemCreateRequest.md#usercomment)
- [fields](EquationsSalesBundlesServiceItemCreateRequest.md#fields)
- [runtime](EquationsSalesBundlesServiceItemCreateRequest.md#runtime)
- [typeName](EquationsSalesBundlesServiceItemCreateRequest.md#typename)

### Methods

- [clone](EquationsSalesBundlesServiceItemCreateRequest.md#clone)
- [equals](EquationsSalesBundlesServiceItemCreateRequest.md#equals)
- [fromBinary](EquationsSalesBundlesServiceItemCreateRequest.md#frombinary)
- [fromJson](EquationsSalesBundlesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](EquationsSalesBundlesServiceItemCreateRequest.md#fromjsonstring)
- [getType](EquationsSalesBundlesServiceItemCreateRequest.md#gettype)
- [toBinary](EquationsSalesBundlesServiceItemCreateRequest.md#tobinary)
- [toJSON](EquationsSalesBundlesServiceItemCreateRequest.md#tojson)
- [toJson](EquationsSalesBundlesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](EquationsSalesBundlesServiceItemCreateRequest.md#tojsonstring)
- [equals](EquationsSalesBundlesServiceItemCreateRequest.md#equals-1)
- [fromBinary](EquationsSalesBundlesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](EquationsSalesBundlesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;EquationsSalesBundlesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/equations_sales_bundles_pb.ts:436](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L436)

## Properties

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation sales bundle

**`Generated`**

from field: int64 equation_id = 10;

#### Defined in

[src/equations_sales_bundles_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L406)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/equations_sales_bundles_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L413)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/equations_sales_bundles_pb.ts:420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L420)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_sales_bundles_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L434)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: int64 unit_price = 13;

#### Defined in

[src/equations_sales_bundles_pb.ts:427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L427)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_sales_bundles_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L399)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles_pb.ts:443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L443)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles_pb.ts:441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L441)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsSalesBundlesServiceItemCreateRequest"``

#### Defined in

[src/equations_sales_bundles_pb.ts:442](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L442)

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

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

[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles_pb.ts:464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L464)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L452)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:456](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L456)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceItemCreateRequest`](EquationsSalesBundlesServiceItemCreateRequest.md)

#### Defined in

[src/equations_sales_bundles_pb.ts:460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_sales_bundles_pb.ts#L460)
