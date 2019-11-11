import {DI}               from '@airport/di'
import {
	IVote,
	IVoteFactor
}                         from '@votecube/model'
import {LOGIC_UTILS}      from './diTokens'

interface IVoteFactorNode {

	next?: IVoteFactorNode
	voteFactor: IVoteFactor

}

export interface ILogicUtils {

	copyProperties(
		from,
		to,
		properties: string[]
	): void

	getVoteFactorNodesInValueOrder(
		vote: IVote
	): IVoteFactor[]

	overlay(
		from,
		to
	): void

	setDeltas(
		from,
		to,
		delta,
		excludeKeys?: string[]
	): void

}

export class LogicUtils {

	copyProperties(
		from,
		to,
		properties: string[]
	): void {
		for (const property of properties) {
			to[property] = from[property]
		}
	}

	getVoteFactorNodesInValueOrder(
		vote: IVote
	): IVoteFactor[] {
		if (!vote) {
			return []
		}
		const node1: IVoteFactorNode = {
			voteFactor: vote[1]
		}
		const node2: IVoteFactorNode = {
			voteFactor: vote[2]
		}
		const node3: IVoteFactorNode = {
			voteFactor: vote[3]
		}
		let headNode
		if (vote[2].value >= vote[3].value) {
			node2.next = node3
			headNode   = node2
		} else {
			node3.next = node2
			headNode   = node3
		}
		if (headNode.voteFactor.value < vote[1].value) {
			node1.next = headNode
			headNode   = node1
		} else if (headNode.next.voteFactor.value < vote[1].value) {
			const lastNode = headNode.next
			headNode.next  = node1
			node1.next     = lastNode
		} else {
			headNode.next.next = node1
		}

		return [
			headNode.voteFactor,
			headNode.next.voteFactor,
			headNode.next.next.voteFactor
		]
	}

	overlay(
		from,
		to
	): void {
		for (const propertyName in from) {
			if (to[propertyName]) {
				const fromProperty = from[propertyName]
				if (fromProperty instanceof Object) {
					this.overlay(fromProperty, to[propertyName])
				}
			} else {
				to[propertyName] = from[propertyName]
			}
		}
	}

	setDeltas(
		from,
		to,
		delta,
		excludeKeys: string[] = ['marks']
	): void {
		if (!from) {
			return
		}
		for (const propertyName in from) {
			if (from[propertyName] instanceof Object) {
				this.setDeltas(from[propertyName], to[propertyName], delta[propertyName])
			} else if (excludeKeys.indexOf(propertyName) < 0
				&& to[propertyName] !== from[propertyName]) {
				delta[propertyName] = true
			}
		}
	}

}
DI.set(LOGIC_UTILS, LogicUtils)
