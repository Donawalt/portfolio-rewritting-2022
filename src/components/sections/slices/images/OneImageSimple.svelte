<script>
    import urlFor from '../../../../assets/scripts/utils/urlFor';
    // your script goes here
    export let Image;
    export let Alt;
</script>
<style lang='scss'>
    section{
        overflow:hidden;
        border-radius: 16px;
        grid-column: 2/8;
        margin-bottom: 180px;
        picture{
            display:flex;
            width:100%;
            img{
                display:block;
                width: 100%;
                height: auto;
            }
        }
        @media screen and (max-width: 429px){
            grid-column: 1/9;
            margin-bottom: 64px;
        }
    }
</style>
<section>
    <picture>
        <img src={urlFor(Image).width(1024)} alt={Alt}/>
    </picture>
</section>