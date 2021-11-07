<article
        transition:fade="{duration: 700}"
>
    {#if form}
    <form>
        <AutoComplete
                field="{form.fields.category}"
        ></AutoComplete>
    </form>
    <table>
        {#each opinions as opinion}
        <FeedbackListItem
                mode="{mode}"
                on:select="goTo(opinion.id)"
                opinion="{opinion}"
        ></FeedbackListItem>
        {/each}
    </table>
    {/if}
</article>
