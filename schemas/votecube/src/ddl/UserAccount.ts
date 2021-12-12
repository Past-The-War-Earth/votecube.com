import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { User } from '@airport/travel-document-checkpoint'

export type UserAccount_Id = number
export type UserAccount_UserName = string
export type UserAccount_FirstName = string
export type UserAccount_MiddleName = string
export type UserAccount_LastName = string
export type UserAccount_BirthDate = Date
export type UserAccount_PasswordHash = string
export type UserAccount_Email = string

@Entity()
@Table({ name: 'USER_ACCOUNTS' })
export class UserAccount
	extends RepositoryEntity {

	@Id()
	@GeneratedValue()
	@Column({ name: 'USER_ACCOUNT_ID' })
	id: UserAccount_Id

	@Column({ name: 'USER_NAME', nullable: false })
	userName: UserAccount_UserName

	@Column({ name: 'EMAIL' })
	email: UserAccount_Email

	@Column({ name: 'PASSWORD_HASH', nullable: false })
	passwordHash: UserAccount_PasswordHash

	@Column({ name: 'FIRST_NAME' })
	firstName: UserAccount_FirstName

	@Column({ name: 'MIDDLE_NAME' })
	middleName: UserAccount_MiddleName

	@Column({ name: 'LAST_NAME' })
	lastName: UserAccount_LastName

	@Column({ name: 'BIRTH_DATE' })
	birthDate: UserAccount_BirthDate

	/**
	 * "prefix_last_name_id"     Bigint, -- NOT NULL,
	 * "name_after_last_name_id" Bigint, -- NOT NULL,
	 */

	@ManyToOne()
	@JoinColumn({ name: "USER_ID", referencedColumnName: "ID" })
	user: User

}
