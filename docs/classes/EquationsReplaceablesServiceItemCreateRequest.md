[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsReplaceablesServiceItemCreateRequest

# Class: EquationsReplaceablesServiceItemCreateRequest

Describes the parameters required to add an item to a equation replaceable

**`Generated`**

from message Genesis.EquationsReplaceablesServiceItemCreateRequest

## Hierarchy

- `Message`<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\>

  ↳ **`EquationsReplaceablesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsReplaceablesServiceItemCreateRequest.md#constructor)

### Properties

- [equationId](EquationsReplaceablesServiceItemCreateRequest.md#equationid)
- [replaceableFamilyId](EquationsReplaceablesServiceItemCreateRequest.md#replaceablefamilyid)
- [replaceableType](EquationsReplaceablesServiceItemCreateRequest.md#replaceabletype)
- [specifications](EquationsReplaceablesServiceItemCreateRequest.md#specifications)
- [unitPrice](EquationsReplaceablesServiceItemCreateRequest.md#unitprice)
- [userComment](EquationsReplaceablesServiceItemCreateRequest.md#usercomment)
- [fields](EquationsReplaceablesServiceItemCreateRequest.md#fields)
- [runtime](EquationsReplaceablesServiceItemCreateRequest.md#runtime)
- [typeName](EquationsReplaceablesServiceItemCreateRequest.md#typename)

### Methods

- [clone](EquationsReplaceablesServiceItemCreateRequest.md#clone)
- [equals](EquationsReplaceablesServiceItemCreateRequest.md#equals)
- [fromBinary](EquationsReplaceablesServiceItemCreateRequest.md#frombinary)
- [fromJson](EquationsReplaceablesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](EquationsReplaceablesServiceItemCreateRequest.md#fromjsonstring)
- [getType](EquationsReplaceablesServiceItemCreateRequest.md#gettype)
- [toBinary](EquationsReplaceablesServiceItemCreateRequest.md#tobinary)
- [toJSON](EquationsReplaceablesServiceItemCreateRequest.md#tojson)
- [toJson](EquationsReplaceablesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](EquationsReplaceablesServiceItemCreateRequest.md#tojsonstring)
- [equals](EquationsReplaceablesServiceItemCreateRequest.md#equals-1)
- [fromBinary](EquationsReplaceablesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](EquationsReplaceablesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsReplaceablesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsReplaceablesServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;EquationsReplaceablesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/equations_replaceables_pb.ts:436](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L436)

## Properties

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation replaceable

**`Generated`**

from field: int64 equation_id = 10;

#### Defined in

[src/equations_replaceables_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L406)

___

### replaceableFamilyId

• **replaceableFamilyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: int64 replaceable_family_id = 12;

#### Defined in

[src/equations_replaceables_pb.ts:420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L420)

___

### replaceableType

• **replaceableType**: `string` = `""`

Stores the type of the item (whether it is a consumable, or a spare)

**`Generated`**

from field: string replaceable_type = 11;

#### Defined in

[src/equations_replaceables_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L413)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_replaceables_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L434)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: int64 unit_price = 13;

#### Defined in

[src/equations_replaceables_pb.ts:427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L427)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_replaceables_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L399)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_replaceables_pb.ts:443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L443)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_replaceables_pb.ts:441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L441)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsReplaceablesServiceItemCreateRequest"``

#### Defined in

[src/equations_replaceables_pb.ts:442](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L442)

## Methods

### clone

▸ **clone**(): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

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

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md) \| `PlainMessage`<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_replaceables_pb.ts:464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L464)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Defined in

[src/equations_replaceables_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L452)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Defined in

[src/equations_replaceables_pb.ts:456](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L456)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Defined in

[src/equations_replaceables_pb.ts:460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L460)
