<article
        transition:fade="{duration: 700}"
>
    {#if form}
    <form>
        <AutoComplete
                field="{form.fields.theme}"
        ></AutoComplete>
    </form>
    <table>
        {#each polls as poll}
        <FeedbackListItem
                mode="{mode}"
                on:select="goTo(poll.key, poll.rootVariationKey)"
                poll="{poll}"
        ></FeedbackListItem>
        {/each}
    </table>
    {/if}
</article>
