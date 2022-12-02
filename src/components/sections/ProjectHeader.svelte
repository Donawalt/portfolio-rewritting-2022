<script>
  import urlFor from "../../assets/scripts/utils/urlFor";
  import imagesLoaded from "imagesloaded";
  import SplitTextJS from "split-text-js";
  import gsap from "gsap";

  import { onMount, beforeUpdate, afterUpdate } from "svelte";

  let w = false;
  let t = true;
  let first = 0;

  onMount(async () => {
    gsap.set("#cover, h1", { opacity: 0 });
    document.querySelector('[data-splitting="header"]').innerHTML = Title;
    setTimeout(initAnim(), 100);
  });

  const initAnim = () => {
    document.querySelector("h1").innerHTML = Title;

    setTimeout(() => {
      let headeSplit = new SplitTextJS(document.querySelector("h1")); // new SplitType("h1", {type: "chars"})
      imagesLoaded(document.querySelector("#cover"), function (instance) {
        let tl = gsap.timeline();
        gsap.set("h1", { opacity: 1, overflow: "hidden" });
        tl.fromTo(
          headeSplit.chars,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
              // wrap advanced options in an object
              each: 0.05,
              from: "center",
            },
          }
        );

        tl.fromTo("header p", { opacity: 0 }, { opacity: 1, delay: -0.25 });
        tl.fromTo(
          "#cover",
          { opacity: 0 },
          {
            opacity: 1,
            onComplete: () => {
              console.log(headeSplit);
              // document.querySelector('h1').innerHTML = Title
              gsap.set("h1", { overflow: "visible" });
              console.log(headeSplit);
            },
          }
        );
        tl.fromTo('.information', {opacity: 0}, {opacity: 1});
      });
    }, 1);
  }

  export let Cover;
  export let SubTitle;
  export let Title;
</script>

<header>
  <p>{SubTitle}</p>
  {#if t}
    <h1 data-splitting="header">{Title}</h1>
  {/if}
</header>
<div id="cover">
  <picture>
    <img src={urlFor(Cover).width(1441).height(480)} />
  </picture>
</div>

<style lang="scss">
  header {
    margin-top: calc(12vh - 32px);
    margin-bottom: 130px;
    p {
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      opacity: 0;
    }
    h1 {
      font-style: normal;
      font-weight: normal;
      font-size: 90px;
      line-height: 97%;
      text-transform: uppercase;
      font-feature-settings: "ordn" on, "swsh" on, "ornm" on;
      text-align: center;
      max-width: 90%;
      margin: auto;
      opacity: 0;
    }
    @media screen and (max-width: 1024px) {
      // Petit Desktop
    }
    @media screen and (max-width: 768px) {
      // Tablette
      h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 60px;
        line-height: 97%;
        max-width: 90%;
      }
      p {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 425px) {
      // Mobile
      margin-bottom: 32px;
      h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 97%;
      }
      p {
        font-size: 8px;
      }
    }
  }
  div {
    opacity: 0;
    height: fit-content;
    margin-left: 32px;
    margin-right: 32px;
    border-radius: 16px;
    overflow: hidden;
    picture {
      display: flex;
      width: 100%;
      height: fit-content;
      flex-direction: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 425px) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
</style>
