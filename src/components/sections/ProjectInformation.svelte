<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import { onMount } from "svelte";
  import gsap from "gsap";

  export let Introduction;
  export let Skills;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    let blockContent = document.querySelectorAll(".information");

    ScrollTrigger.create({
      trigger: blockContent,
      onEnter: () => {
        gsap.to(blockContent, { opacity: 1 });
      },
    });
  });

  console.log(Introduction);
</script>

<div class="information">
  <div class="information_intro">
    <h3 class="title">Introduction</h3>
    <p><BlockContent blocks={Introduction} /></p>
  </div>
  <div class="information_skills">
    <h3 class="title">Skills</h3>
    <ul>
      {#each Skills as skill}
        <li>{skill}</li>
        <!-- content here -->
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  .information {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    column-gap: 16px;
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 120px;
    margin-bottom: 64px;
    opacity: 0;
    .title {
      opacity: 0.7;
      margin-bottom: 16px;
    }
    .information_intro {
      grid-column: 2/6;
    }
    .information_skills {
      grid-column: 7/9;
      ul,
      li {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
    @media screen and (max-width: 425px) {
      margin-top: 32px;
      grid-template-columns: repeat(1, 1fr);
      margin-left: 16px;
      margin-right: 16px;
      .title {
        margin-bottom: 0px;
      }
      .information_intro,
      .information_skills {
        grid-column: 1;
        p {
          margin-top: 0px;
        }
      }
    }
  }
</style>
