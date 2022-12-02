<script>
    export let Title;
    export let SubTitle;
</script>
<style lang='scss'>
    section.left{
        grid-column: 1/6;
    }
    section.center{
        grid-column: 2/8;
        .little, p {
            text-align: center;
        }
    }
    section.right{
        grid-column: 3/9;
        .little, p {
            text-align: right;
        }
    }
    section{
        margin-bottom: 180px;
        .little{
            margin:0;
            padding:0;
            font-family: 'scillaregular';
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            margin-bottom: 16px;
            opacity: 0.7;
            @media screen and (max-width: 425px){
                font-size: 14px;
            }
        }
        p{
            margin:0;
            padding:0;
            font-family: 'scillaregular';
            font-style: normal;
            font-weight: normal;
            font-size: 60px;
            line-height: 97%;
            @media screen and (max-width: 425px){
                font-size: 30px;
            }
        }
        @media screen and (max-width: 425px){
            &.right, &.center, &.left{
                grid-column: 1/9;
            }
            margin-bottom: 64px;
        }
    }
</style>
<section class='center'>
    <h3 class='little'>{SubTitle}</h3>
    <p>“{Title}”</p>
</section>