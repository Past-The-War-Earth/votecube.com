export function getVoteDimsInValueOrder(
	vote
) {
	if (!vote) {
		return []
	}
	const xNode        = {
		voteDim: vote.x
	}
	const yNode        = {
		voteDim: vote.y
	}
	const zNode        = {
		voteDim: vote.z
	}
	let headNode
	if (vote.y.value >= vote.z.value) {
		yNode.next = zNode
		headNode   = yNode
	} else {
		zNode.next = yNode
		headNode   = zNode
	}
	if (headNode.voteDim.value < vote.x.value) {
		xNode.next = headNode
		headNode   = xNode
	} else if (headNode.next.voteDim.value < vote.x.value) {
		let lastNode  = headNode.next
		headNode.next = xNode
		xNode.next    = lastNode
	} else {
		headNode.next.next = xNode
	}

	return [headNode.voteDim, headNode.next.voteDim, headNode.next.next.voteDim]
}
