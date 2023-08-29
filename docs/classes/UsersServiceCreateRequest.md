[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UsersServiceCreateRequest

# Class: UsersServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.UsersServiceCreateRequest

## Hierarchy

- `Message`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

  ↳ **`UsersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceCreateRequest.md#constructor)

### Properties

- [address](UsersServiceCreateRequest.md#address)
- [attendanceUomId](UsersServiceCreateRequest.md#attendanceuomid)
- [basicPayAmount](UsersServiceCreateRequest.md#basicpayamount)
- [basicPayUomId](UsersServiceCreateRequest.md#basicpayuomid)
- [birthday](UsersServiceCreateRequest.md#birthday)
- [bloodGroup](UsersServiceCreateRequest.md#bloodgroup)
- [city](UsersServiceCreateRequest.md#city)
- [code](UsersServiceCreateRequest.md#code)
- [country](UsersServiceCreateRequest.md#country)
- [departmentId](UsersServiceCreateRequest.md#departmentid)
- [email](UsersServiceCreateRequest.md#email)
- [entityUuid](UsersServiceCreateRequest.md#entityuuid)
- [formData](UsersServiceCreateRequest.md#formdata)
- [joiningDate](UsersServiceCreateRequest.md#joiningdate)
- [mobileRoleId](UsersServiceCreateRequest.md#mobileroleid)
- [name](UsersServiceCreateRequest.md#name)
- [payrollCurrencyId](UsersServiceCreateRequest.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceCreateRequest.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceCreateRequest.md#payrolltaxgroupid)
- [phone](UsersServiceCreateRequest.md#phone)
- [pinCode](UsersServiceCreateRequest.md#pincode)
- [plainTextPassword](UsersServiceCreateRequest.md#plaintextpassword)
- [roleId](UsersServiceCreateRequest.md#roleid)
- [shiftGroupId](UsersServiceCreateRequest.md#shiftgroupid)
- [state](UsersServiceCreateRequest.md#state)
- [userComment](UsersServiceCreateRequest.md#usercomment)
- [username](UsersServiceCreateRequest.md#username)
- [vaultFolderId](UsersServiceCreateRequest.md#vaultfolderid)
- [workEmail](UsersServiceCreateRequest.md#workemail)
- [fields](UsersServiceCreateRequest.md#fields)
- [runtime](UsersServiceCreateRequest.md#runtime)
- [typeName](UsersServiceCreateRequest.md#typename)

### Methods

- [clone](UsersServiceCreateRequest.md#clone)
- [equals](UsersServiceCreateRequest.md#equals)
- [fromBinary](UsersServiceCreateRequest.md#frombinary)
- [fromJson](UsersServiceCreateRequest.md#fromjson)
- [fromJsonString](UsersServiceCreateRequest.md#fromjsonstring)
- [getType](UsersServiceCreateRequest.md#gettype)
- [toBinary](UsersServiceCreateRequest.md#tobinary)
- [toJSON](UsersServiceCreateRequest.md#tojson)
- [toJson](UsersServiceCreateRequest.md#tojson-1)
- [toJsonString](UsersServiceCreateRequest.md#tojsonstring)
- [equals](UsersServiceCreateRequest.md#equals-1)
- [fromBinary](UsersServiceCreateRequest.md#frombinary-1)
- [fromJson](UsersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](UsersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Overrides

Message&lt;UsersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/users_pb.ts:320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L320)

## Properties

### address

• **address**: `string` = `""`

The address of the user

**`Generated`**

from field: string address = 32;

#### Defined in

[src/users_pb.ts:220](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L220)

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: int64 attendance_uom_id = 51;

#### Defined in

[src/users_pb.ts:269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L269)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount of the user (in cents)

**`Generated`**

from field: int64 basic_pay_amount = 56;

#### Defined in

[src/users_pb.ts:304](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L304)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: int64 basic_pay_uom_id = 57;

#### Defined in

[src/users_pb.ts:311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L311)

___

### birthday

• **birthday**: `string` = `""`

The birthday of the user

**`Generated`**

from field: string birthday = 30;

#### Defined in

[src/users_pb.ts:206](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L206)

___

### bloodGroup

• **bloodGroup**: `string` = `""`

THe Blood Group of the user

**`Generated`**

from field: string blood_group = 37;

#### Defined in

[src/users_pb.ts:255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L255)

___

### city

• **city**: `string` = `""`

The city of residence

**`Generated`**

from field: string city = 33;

#### Defined in

[src/users_pb.ts:227](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L227)

___

### code

• **code**: `string` = `""`

The unique employee code by which the user is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/users_pb.ts:150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L150)

___

### country

• **country**: `string` = `""`

The country of residence

**`Generated`**

from field: string country = 35;

#### Defined in

[src/users_pb.ts:241](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L241)

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department (can be 0 to allow seamless transition)

**`Generated`**

from field: int64 department_id = 52;

#### Defined in

[src/users_pb.ts:276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L276)

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 16;

#### Defined in

[src/users_pb.ts:185](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L185)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/users_pb.ts:122](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L122)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 70;

#### Defined in

[src/users_pb.ts:318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L318)

___

### joiningDate

• **joiningDate**: `string` = `""`

The joining date of the user

**`Generated`**

from field: string joining_date = 31;

#### Defined in

[src/users_pb.ts:213](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L213)

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

The associated mobile role ID

**`Generated`**

from field: int64 mobile_role_id = 15;

#### Defined in

[src/users_pb.ts:178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L178)

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 12;

#### Defined in

[src/users_pb.ts:157](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L157)

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: int64 payroll_currency_id = 55;

#### Defined in

[src/users_pb.ts:297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L297)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: int64 payroll_group_id = 53;

#### Defined in

[src/users_pb.ts:283](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L283)

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: int64 payroll_tax_group_id = 54;

#### Defined in

[src/users_pb.ts:290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L290)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 18;

#### Defined in

[src/users_pb.ts:199](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L199)

___

### pinCode

• **pinCode**: `string` = `""`

THe PIN Code of residence

**`Generated`**

from field: string pin_code = 36;

#### Defined in

[src/users_pb.ts:248](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L248)

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

The plain text password using which the user can login

**`Generated`**

from field: string plain_text_password = 13;

#### Defined in

[src/users_pb.ts:164](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L164)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: int64 role_id = 14;

#### Defined in

[src/users_pb.ts:171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L171)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: int64 shift_group_id = 50;

#### Defined in

[src/users_pb.ts:262](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L262)

___

### state

• **state**: `string` = `""`

The state of residence

**`Generated`**

from field: string state = 34;

#### Defined in

[src/users_pb.ts:234](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L234)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/users_pb.ts:129](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L129)

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users_pb.ts:143](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L143)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/users_pb.ts:136](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L136)

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 17;

#### Defined in

[src/users_pb.ts:192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L192)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L327)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L325)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UsersServiceCreateRequest"``

#### Defined in

[src/users_pb.ts:326](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L326)

## Methods

### clone

▸ **clone**(): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

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

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L371)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users_pb.ts:359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L359)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users_pb.ts:363](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L363)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users_pb.ts:367](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L367)
