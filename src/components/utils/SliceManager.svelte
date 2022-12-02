<script>
    import { onMount} from 'svelte'

    import Branding from '../sections/slices/text/BrandingText.svelte';
    import Citation from '../sections/slices/text/CitationText.svelte'
    import Classic from '../sections/slices/text/ClassicText.svelte'
    import Credits from '../sections/slices/text/CreditsText.svelte'

    import TIImage from '../sections/slices/images/TextImage.svelte';
    import FImage from '../sections/slices/images/FullScreenImage.svelte';
    import OImage from '../sections/slices/images/OneImageSimple.svelte';
    import DImage from '../sections/slices/images/DoubleImage.svelte'

    export let Slices;
</script>
<style lang="scss">
    .grid{
        display:grid;
        grid-template-columns: repeat(8, 1fr);
        column-gap: 16px;
        margin-left: 32px;
        margin-right: 32px;
        opacity: 1;
        @media screen and (max-width: 429px){
          margin-left: 16px;
          margin-right: 16px;
        }
    }
</style>
<section class="grid">
    {#each Slices as Slice, index}
         <!-- content here -->
            {#if Slice._type === 'classictext'}
              <!-- content here -->
              <Classic Index={index > 8 ? index + 1 : "0" + (index + 1)} Title={Slice.title} Content={Slice.content}/>
            {:else if Slice._type === 'brandingtext'}
              <!-- else if content here -->
              <Branding Index={index > 8 ? index + 1 : "0" + (index + 1)} Title={Slice.title} Typos={Slice.typos} Colors={Slice.colors} />
            {:else if Slice._type === 'citationtext'}
            <!-- else if content here -->
            <Citation Index={index > 8 ? index + 1 : "0" + (index + 1)} Title={Slice.title} SubTitle={Slice.subtitle}/>
            {:else if Slice._type === 'creditstext'}
            <!-- else if content here -->
            <Credits Index={index > 8 ? index + 1 : "0" + (index + 1)} Title={Slice.title} Credits={Slice.credits}/>
            {:else if Slice._type === 'doubleimage'}
            <!-- else if content here -->
            <DImage FirstImage={Slice.image_one} FirstAlt={Slice.alt_one} SecondaryImage={Slice.image_two} SecondaryAlt={Slice.alt_two} Side={Slice.side === true? 'right' : 'left'}/>
            {:else if Slice._type === 'fullscreenimage'}
            <!-- else if content here -->
            <FImage Image={Slice.image} Alt={Slice.alt}/>
            {:else if Slice._type === 'oneimage'}
            <!-- else if content here -->
            <OImage Image={Slice.image} Alt={Slice.alt}/>
            {:else if Slice._type === 'textimage'}
            <!-- else if content here -->
            <TIImage Image={Slice.image} Alt={Slice.alt} Index={index > 8 ? index + 1 : "0" + (index + 1)} Title={Slice.title} Content={Slice.content}/>
            {:else}
              <!-- else content here -->
            {/if}
    {/each}
</section>