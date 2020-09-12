import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {
	UserAccount_BirthDate,
	UserAccount_FirstName,
	UserAccount_Id,
	UserAccount_LastName,
	UserAccount_MiddleName,
	UserAccount_PasswordHash,
	UserAccount_UserName
} from '../../types/user/UserAccount'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'

@Entity()
@Table({name: 'USER_ACCOUNTS'})
export class UserAccount
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_ACCOUNT_ID'})
	id: UserAccount_Id

	@Column({name: 'USER_NAME', nullable: false})
	userName: UserAccount_UserName

	@Column({name: 'PASSWORD_HASH', nullable: false})
	passwordHash: UserAccount_PasswordHash

	@Column({name: 'FIRST_NAME', nullable: false})
	firstName: UserAccount_FirstName

	@Column({name: 'MIDDLE_NAME'})
	middleName: UserAccount_MiddleName

	@Column({name: 'LAST_NAME', nullable: false})
	lastName: UserAccount_LastName

	@Column({name: 'BIRTH_DATE'})
	birthDate: UserAccount_BirthDate

	/**
	 * "prefix_last_name_id"     Bigint, -- NOT NULL,
	 * "name_after_last_name_id" Bigint, -- NOT NULL,
	 */

}
