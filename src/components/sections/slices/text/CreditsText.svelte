<script>
    export let Title;
    export let Credits;
    export let Index;
</script>
<style lang='scss'>
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
    section{
        grid-column: 1/9;
        margin-bottom: 180px;
        .credit__list{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 16px;
            .list__element{
                h3{
                    opacity: 0.7;
                }
                ul,li{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                li{
                    margin-bottom: 8px;
                    &:last-child(){
                        margin: 0;
                    }
                }
            }
        }
        @media screen and (max-width: 425px){
            margin-bottom: 64px;
        }
    }
</style>

<section>
    <h2><span class='number'>{Index}</span> <span class='content'>{Title}</span></h2>
    <div class="credit__list">
        {#each Credits as Credit}
             <!-- content here -->
             <div class="list__element">
                <h3>{Credit.title}</h3>
                <ul>
                    {#each Credit.name as name}
                         <!-- content here -->
                         <li>{name}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>