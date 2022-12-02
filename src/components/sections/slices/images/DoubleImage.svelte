<script>
    import urlFor from '../../../../assets/scripts/utils/urlFor';
    // your script goes here
    export let FirstImage;
    export let SecondaryImage;
    export let FirstAlt;
    export let SecondaryAlt;
    export let Side;
</script>
<style lang='scss'>
    section{
        grid-column: 1/9;
        margin-bottom: 180px;
        display:grid;
        grid-template-columns: repeat(8, 1fr);
        grid-gap: 16px;
        picture{
            border-radius: 16px;
            overflow:hidden;
            &:nth-child(1){
                grid-column: 1/4;
                @media screen and (max-width: 425px){
                        grid-column: initial;
                        margin-left: -16px;
                }
            }
            &:nth-child(2){
                margin-top: 25%;
                grid-column: 5/8;
                @media screen and (max-width: 425px){
                        grid-column: initial;
                        margin-left: 16px;
                        margin-top: 0%;
                }
            }
            display:block;
            width:100%;
            height: fit-content;
            img{
                display:block;
                width: 100%;
                height: auto;
            }
        }
        &.right{
            picture{
                &:nth-child(1){
                    margin-top: 25%;
                    grid-column: 2/5;
                    @media screen and (max-width: 425px){
                        grid-column: initial;
                        margin-left: -16px;
                        margin-top: 0%;
                    }
                }
                &:nth-child(2){
                    margin-top: 0px;
                    grid-column: 6/9;
                    @media screen and (max-width: 425px){
                        grid-column: initial;
                        margin-left: 16px;
                    }
                }
            }
        }
        @media screen and (max-width: 425px){
            margin-bottom: 64px;
            grid-template-columns: none;
            grid-gap: 32px;
            grid-template-rows: auto auto;
        }
    }
</style>
<section class='{Side}'>
    <picture>
        <img src={urlFor(FirstImage).width(506)} alt={FirstAlt}/>
    </picture>
    <picture>
        <img src={urlFor(SecondaryImage).width(506)} alt={SecondaryAlt}/>
    </picture>
</section>