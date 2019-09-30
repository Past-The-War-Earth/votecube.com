export async function get(
	url: string
): Promise<string> {
	return new Promise((
		resolve,
		reject
	) => {
		const request = new XMLHttpRequest()

		request.onload  =
			text => {
				resolve(request.responseText)
			}
		request.onerror =
			error => {
				reject(error)
			}
		request.open('GET', url)
		request.send()
	})
}
