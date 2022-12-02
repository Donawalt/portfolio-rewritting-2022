<script>
    import urlFor from '../../../../assets/scripts/utils/urlFor';
    // your script goes here
    export let Image;
    export let Alt;
</script>
<style lang='scss'>
    section{
        height: fit-content;
        width: 99vw;
        overflow:hidden;
        border-radius: 16px;
        grid-column: 1/9;
        margin-bottom: 180px;
        picture{
            display: flex;
            width: 100%;
            img{
                display:block;
                width: 100%;
                height: auto;
            }
        }
        margin-left: -32px;
            margin-right: -32px;
        @media screen and (max-width: 425px){
            margin-left: -16px;
            margin-right: -16px;
            margin-bottom: 64px;
        }
    }
</style>

<section>
    <picture>
        <img src={urlFor(Image).width(1441)} alt={Alt}/>
    </picture>
</section>