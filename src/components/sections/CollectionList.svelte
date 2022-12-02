<script>
    import Element from "../atoms/CollectionElement.svelte";
    import gsap from 'gsap';

    
    import { onMount } from 'svelte'

    onMount(async () => {
        gsap.fromTo('.collection-list', {opacity: 0}, {opacity: 1,duration: 1, delay: 0.5});
    })

    export let Posts;
</script>

<style lang="scss">
    .grid{
        padding: 0px;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-auto-rows: 232px;
        grid-column-gap: 16px;
        grid-row-gap: 24px;
        color:white;
        margin-left: 32px;
        margin-right: 32px;
        li{
            padding: 0px;
            margin: 0;
            list-style: none;
            &.big{
                grid-column-end: span 2;
                grid-row-end: span 2;
            }
        }
    }
    .collection-list{
        margin-top: 130px;
        margin-bottom: 130px;
        opacity: 0;
    }
    @media screen and (max-width: 1024px){
            // Petit Desktop
        }
        @media screen and (max-width: 768px){
            // Tablette
            .grid{
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media screen and (max-width: 425px){
            // Mobile
            .grid{
                margin-left: 16px;
                margin-right: 16px;
                grid-auto-rows: 120px;
                grid-row-gap: 8px;
            }
            .collection-list{
                margin-top: 32px;
            }
            
        }
</style>
<ul class="collection-list grid">
    {#each Posts as post, i}
         <!-- content here -->
         <li class:big={i === 4 || i === 10 || i === 25}>
             <Element type={"big"} Post={post} Index={i}/>
         </li>
    {/each}
</ul>