export async function encodePassword(
	password
) {
	const shaObj = await import('jssha/src/sha512')

	shaObj.default('SHA-512', 'TEXT')
	shaObj.update(password)
	return shaObj.getHash('B64')
}