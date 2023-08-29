[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UsersServiceFilterReq

# Class: UsersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.UsersServiceFilterReq

## Hierarchy

- `Message`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

  ↳ **`UsersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](UsersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](UsersServiceFilterReq.md#approvedonend)
- [approvedOnStart](UsersServiceFilterReq.md#approvedonstart)
- [approverRoleId](UsersServiceFilterReq.md#approverroleid)
- [attendanceUomId](UsersServiceFilterReq.md#attendanceuomid)
- [basicPayUomId](UsersServiceFilterReq.md#basicpayuomid)
- [code](UsersServiceFilterReq.md#code)
- [count](UsersServiceFilterReq.md#count)
- [creationTimestampEnd](UsersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](UsersServiceFilterReq.md#creationtimestampstart)
- [departmentId](UsersServiceFilterReq.md#departmentid)
- [email](UsersServiceFilterReq.md#email)
- [entityUuid](UsersServiceFilterReq.md#entityuuid)
- [isActive](UsersServiceFilterReq.md#isactive)
- [name](UsersServiceFilterReq.md#name)
- [offset](UsersServiceFilterReq.md#offset)
- [payrollCurrencyId](UsersServiceFilterReq.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceFilterReq.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceFilterReq.md#payrolltaxgroupid)
- [phone](UsersServiceFilterReq.md#phone)
- [roleId](UsersServiceFilterReq.md#roleid)
- [shiftGroupId](UsersServiceFilterReq.md#shiftgroupid)
- [sortKey](UsersServiceFilterReq.md#sortkey)
- [sortOrder](UsersServiceFilterReq.md#sortorder)
- [status](UsersServiceFilterReq.md#status)
- [username](UsersServiceFilterReq.md#username)
- [workEmail](UsersServiceFilterReq.md#workemail)
- [fields](UsersServiceFilterReq.md#fields)
- [runtime](UsersServiceFilterReq.md#runtime)
- [typeName](UsersServiceFilterReq.md#typename)

### Methods

- [clone](UsersServiceFilterReq.md#clone)
- [equals](UsersServiceFilterReq.md#equals)
- [fromBinary](UsersServiceFilterReq.md#frombinary)
- [fromJson](UsersServiceFilterReq.md#fromjson)
- [fromJsonString](UsersServiceFilterReq.md#fromjsonstring)
- [getType](UsersServiceFilterReq.md#gettype)
- [toBinary](UsersServiceFilterReq.md#tobinary)
- [toJSON](UsersServiceFilterReq.md#tojson)
- [toJson](UsersServiceFilterReq.md#tojson-1)
- [toJsonString](UsersServiceFilterReq.md#tojsonstring)
- [equals](UsersServiceFilterReq.md#equals-1)
- [fromBinary](UsersServiceFilterReq.md#frombinary-1)
- [fromJson](UsersServiceFilterReq.md#fromjson-1)
- [fromJsonString](UsersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Overrides

Message&lt;UsersServiceFilterReq\&gt;.constructor

#### Defined in

[src/users_pb.ts:1490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1490)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/users_pb.ts:1383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1383)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/users_pb.ts:1376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1376)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/users_pb.ts:1369](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1369)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/users_pb.ts:1390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1390)

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: int64 attendance_uom_id = 27;

#### Defined in

[src/users_pb.ts:1446](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1446)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: int64 basic_pay_uom_id = 32;

#### Defined in

[src/users_pb.ts:1481](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1481)

___

### code

• **code**: `string` = `""`

The unique code by which the user is classified

**`Generated`**

from field: string code = 22;

#### Defined in

[src/users_pb.ts:1411](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1411)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/users_pb.ts:1313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1313)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/users_pb.ts:1348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1348)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/users_pb.ts:1341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1341)

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department

**`Generated`**

from field: int64 department_id = 28;

#### Defined in

[src/users_pb.ts:1453](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1453)

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 23;

#### Defined in

[src/users_pb.ts:1418](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1418)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/users_pb.ts:1355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1355)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/users_pb.ts:1306](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1306)

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 21;

#### Defined in

[src/users_pb.ts:1404](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1404)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/users_pb.ts:1320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1320)

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: int64 payroll_currency_id = 31;

#### Defined in

[src/users_pb.ts:1474](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1474)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: int64 payroll_group_id = 29;

#### Defined in

[src/users_pb.ts:1460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1460)

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: int64 payroll_tax_group_id = 30;

#### Defined in

[src/users_pb.ts:1467](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1467)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 24;

#### Defined in

[src/users_pb.ts:1425](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1425)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: int64 role_id = 25;

#### Defined in

[src/users_pb.ts:1432](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1432)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: int64 shift_group_id = 26;

#### Defined in

[src/users_pb.ts:1439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1439)

___

### sortKey

• **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md) = `USER_SORT_KEY.USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.USER_SORT_KEY sort_key = 5;

#### Defined in

[src/users_pb.ts:1334](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1334)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/users_pb.ts:1327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1327)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this user

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/users_pb.ts:1362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1362)

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 20;

#### Defined in

[src/users_pb.ts:1397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1397)

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 33;

#### Defined in

[src/users_pb.ts:1488](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1488)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:1497](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1497)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:1495](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1495)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UsersServiceFilterReq"``

#### Defined in

[src/users_pb.ts:1496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1496)

## Methods

### clone

▸ **clone**(): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

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

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:1539](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1539)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users_pb.ts:1527](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1527)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users_pb.ts:1531](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1531)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users_pb.ts:1535](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1535)
