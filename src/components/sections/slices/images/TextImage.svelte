<script>
    import BlockContent from "@movingbrands/svelte-portable-text";
    import urlFor from '../../../../assets/scripts/utils/urlFor';
    // your script goes here
    export let Image;
    export let Alt;

    export let Index;
    export let Title;
    export let Content;
</script>
<style lang='scss'>
    section{
        grid-column: 2/8;
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        margin-bottom: 180px;
        @media screen and (max-width: 425px){
            grid-template-columns: none;
            grid-template-rows: auto auto;
            grid-column: 1/9;
            margin-bottom: 64px;
        }
        picture{
            border-radius: 16px;
            overflow:hidden;
            display:block;
            width:100%;
            height: fit-content;
            img{
                display:block;
                width: 100%;
                height: auto;
            }
            @media screen and (max-width: 425px){
                grid-row: 2;
            }
        }
        .ti__content{
            h2{ 
        display: flex;
        .number{
            display: block;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            padding: 0px;
            margin-right: 8px;
            margin-top: 8px;
            @media screen and (max-width: 425px){
                font-size: 12px;
            }
        }
        .content{
            padding: 0px;
            font-style: normal;
            font-weight: normal;
            font-size: 50px;
            text-transform: uppercase;
            @media screen and (max-width: 425px){
                font-size: 25px;
            }
        }
        }
    }
    }
</style>
<section>
    <picture>
        <img src={urlFor(Image).width(1024)} alt={Alt} />
    </picture>
    <div class='ti__content'>
        <h2><span class='number'>{Index}</span> <span class='content'>{Title}</span></h2>
        <p><BlockContent blocks={Content}/></p>
    </div>
</section>