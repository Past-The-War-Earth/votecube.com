<script>

	import {createEventDispatcher} from 'svelte'
	import RightButton          from '../../common/control/button/RightButton.svelte'
	import SwitchPositionButton from '../../common/control/button/SwitchPositionButton.svelte'


	const dispatch = createEventDispatcher()

</script>

<RightButton
				classes="moveRight"
				on:click="{() => dispatch('moveRight')}"
></RightButton>
<RightButton
				classes="moveDown"
				on:click="{() => dispatch('moveDown')}"
></RightButton>
<RightButton
				classes="moveLeft"
				on:click="{() => dispatch('moveLeft')}"
></RightButton>
<RightButton
				classes="moveUp"
				on:click="{() => dispatch('moveUp')}"
></RightButton>
<SwitchPositionButton
				classes="switchPosition"
				on:click="{() => dispatch('switchDir')}"
></SwitchPositionButton>
