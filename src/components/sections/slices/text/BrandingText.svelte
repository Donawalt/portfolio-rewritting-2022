<script>
    import urlFor from '../../../../assets/scripts/utils/urlFor';

    export let Typos
    export let Colors
    export let Title
    export let Index
    console.log(Colors)
</script>
<style   lang='scss'>
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
    .branding{
        grid-column: 2 /8;
        margin-bottom: 180px;
        .branding_information{
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            column-gap: 16px;
            .title{
                opacity: 0.7;
            }
            .information__typography{
                grid-column: 1/4;
            }
            .information__colors{
                grid-column: 5/7;
            }
        }
        .colors_preview{
            margin: 0;
            padding: 0;
            width: 24vw;
            li{
                margin: 0;
                padding: 0;
                list-style: none;
                border-radius: 16px;
                height: auto;
                width: 100%;
                background-color: red;
                display: flex;
                align-items: center;
                padding: 16px;
                margin-bottom: 16px;
                text-transform: uppercase;
                &:last-child(){
                    margin: 0;
                }
            }
        }
    }
</style>

<div class='branding'>
    <h2><span class='number'>{Index}</span> <span class='content'>{Title}</span></h2>
    <div class='branding_information'>
        <div class='information__typography'>
            <h3 class="title">Typography</h3>
            <div class="typography_preview">
                {#each Typos as typo}
                     <!-- content here -->
                     <img class='typography'  src={urlFor(typo).height(506)}/>
                {/each}
            </div>
        </div>
        <div class='information__colors'>
            <h3 class="title">Colors</h3>
            <ul class="colors_preview">
                {#each Colors as color}
                     <!-- content here -->
                     <li style={"background-color:" + color.hex}>{color.hex}</li>
                {/each}
            <ul/>
        </div>
    </div>
</div>