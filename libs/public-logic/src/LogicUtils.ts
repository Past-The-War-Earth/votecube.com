import {DI}             from '@airport/di'
import {
	ICoreColor,
	IsData,
	ITweenVoteFactor,
	IVote,
	IVoteFactor
}                       from '@votecube/model'
import {create_bidirectional_transition} from 'svelte/internal'
import {LOGIC_UTILS}    from './tokens'

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

	getArrayValueTexts(
		arrayValue: Array<{
			text: string
		}>
	): string

	getColor(
		color: ICoreColor<IsData>
	): string

	getDate(
		date: Date
	): string

	getTextColor(
		color: ICoreColor<IsData>
	): string

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

	transition(
		elementId: string,
		transitionFunction,
		options
	): void

}

export class LogicUtils
	implements ILogicUtils {

	copyProperties(
		from,
		to,
		properties: string[]
	): void {
		for (const property of properties) {
			if (from[property] !== undefined) {
				to[property] = from[property]
			}
		}
	}

	getArrayValueTexts(
		arrayValue: Array<{
			text: string
		}>
	): string {
		return arrayValue
			.map(
				value => value.text)
			.reduce((
				accumulator,
				text
			) => accumulator + (accumulator
				? ', ' + text
				: text), '')
	}

	getColor(
		color: ICoreColor<IsData>
	): string {
		if (!color) {
			return `FFF`
		}

		const {blue, green, red} = color

		return this.ensure2Digits(red.toString(16))
			+ this.ensure2Digits(green.toString(16))
			+ this.ensure2Digits(blue.toString(16))
	}

	getDate(
		date: Date
	): string {
		if (!date) {
			return 'N/A'
		}

		return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
	}

	getTextColor(
		color: ICoreColor<IsData>
	): string {
		const red   = parseInt(color.red as any)
		const green = parseInt(color.green as any)
		const blue  = parseInt(color.blue as any)
		if (red + green + blue > 384) {
			return '000'
		} else if (red < 10 && blue < 10 && green >= 240) {
			return '000'
		}
		return 'FFF'
	}

	getVoteFactorNodesInValueOrder<V extends IVote = IVote>(
		vote: V
	): IVoteFactor[] | ITweenVoteFactor[] {
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
			if (to[propertyName] !== undefined) {
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
		excludeKeys: string[] = ['createdAt', 'key', 'marks', 'path', 'userKey']
	): void {
		if (!from) {
			return
		}
		for (const propertyName in from) {
			if (excludeKeys.indexOf(propertyName) > -1) {
				continue
			}
			if (from[propertyName] instanceof Object) {
				this.setDeltas(from[propertyName], to[propertyName], delta[propertyName])
			} else if (to[propertyName] !== from[propertyName]) {
				delta[propertyName] = true
			}
		}
	}

	transition(
		elementId: string,
		transitionFunction,
		options
	): void {
		setTimeout(() => {
			const domElementToTransition = document.getElementById(elementId)
			if (!domElementToTransition) {
				return
			}
			const figureIntro = create_bidirectional_transition(
				domElementToTransition, transitionFunction, options, true)
			figureIntro.run(1)
		})
	}

	private ensure2Digits(
		colorString: string
	): string {
		return colorString.length === 1 ? '0' + colorString : colorString
	}

}

DI.set(LOGIC_UTILS, LogicUtils)
