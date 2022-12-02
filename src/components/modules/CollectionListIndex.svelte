<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let TitleCollection;
  export let Articles;

  function handler(params) {
    dispatch("covering", {
      name: params,
    });
  }
</script>

<div class="collection-list">
  <h2>{TitleCollection}</h2>
  <div class="list">
    <ul>
      {#each Articles as article, i}
        <!-- content here -->
        <li on:mouseenter={handler(article.name)}>
          <a href={article.category + "/" + article.slug.current}>
            <p class="number">{i > 8 ? i + 1 : "0" + (i + 1)}</p>
            <p class="title">{article.name}</p>
          </a>
        </li>
      {/each}
    </ul>
    <a class="plus" href={Articles[0].category}>En voir +</a>
  </div>
</div>

<style lang="scss">
  .collection-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    width: 100%;
    margin-bottom: 80px;
    min-height: 500px;
    h2 {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      font-style: normal;
      font-weight: normal;
      font-size: 60px;
      line-height: 97%;
      /* or 58px */

      text-align: right;
      text-transform: uppercase;

      color: #9e3b3b;

      writing-mode: vertical-rl;
      transform: rotate(180deg);
      margin: 0;
      padding: 0;
    }
    .list {
      grid-column: 2/6;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-bottom: 16px;
        a {
          position: relative;
          text-decoration: none;
          .number {
            font-family: "scillaregular";
            font-style: normal;
            font-weight: normal;
            font-size: 60px;
            line-height: 97%;
            /* or 58px */

            text-transform: uppercase;
            text-stroke: 1px #9e3b3b;
            -webkit-text-stroke: 1px #9e3b3b;
            color: transparent;
            position: absolute;
            top: 0;
            margin: 0;
            padding: 0;
            transition-duration: 300ms;
          }
          .title {
            font-style: normal;
            font-weight: 500;
            font-size: 40px;
            line-height: 97%;
            /* or 39px */

            text-transform: uppercase;
            margin-top: 0px;
            padding-top: 30px;
            padding-left: 16px;
            text-transform: uppercase;
            text-stroke: 1px white;
            -webkit-text-stroke: 1px white;
            color: transparent;
            transition-duration: 300ms;
          }
          &:hover {
            .number{
                display: block;
                color: #9e3b3b;
                transition-delay: 300ms;
                animation: animNumberHover 1000ms ease-in-out alternate infinite;
                @keyframes animNumberHover {
                    0%{
                        transform: translateY(0);
                    }
                    100%{
                        transform: translateY(-6px);
                    }
                }
            }
            .title {
              color: white;
            }
          }
        }
      }
      .plus {
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 300;
        @media screen and (max-width: 425px) {
          font-size: 12px;
        }
      }
    }
    @media screen and (max-width: 425px) {
      display: block;
      min-height: auto;
      h2 {
        font-size: 25px;
        transform: initial;
        justify-content: initial;
        text-align: left;
        writing-mode: initial;
        margin-bottom: 16px;
      }
      .list {
        ul {
          a {
            p.number {
              font-size: 45px;
            }
            p.title {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
</style>
