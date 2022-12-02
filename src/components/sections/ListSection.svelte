<script>
	import CollectionListIndex from '../modules/CollectionListIndex.svelte'
	import urlFor from '../../assets/scripts/utils/urlFor'
	import gsap from "gsap"
	import { onMount } from 'svelte'

	onMount(()=>{
		let tl = gsap.timeline()
		tl.fromTo('h1 .word', { opacity:0, y: 20 }, {y: 0, opacity: 1, duration: 0.8, stagger: 0.2})
		tl.fromTo('#list-links .word', { opacity:0, y: 20 }, {y: 0, opacity: 1, duration: 0.8, stagger: 0.2})
		tl.fromTo('#list-links p', {opacity:0}, {opacity: 1})
		tl.fromTo('.right', {opacity: 0, y:5}, {opacity:1, y:0})
	})

	export let posts;
	export let devPosts;
	export let desPosts;
	export let photoPosts;

	export let picture = null;
	function handler(event) {
		picture = urlFor(posts.filter(x => x.name == event.detail.name)[0].cover).width(506)
		console.log(picture)
	}
</script>
<style lang="scss">
	section{
		display: grid;
        grid-template-columns: repeat(8,1fr);
        grid-column-gap: 16px;
        grid-row-gap: 24px;
		margin-left: 32px;
		margin-right: 32px;
		@media screen and (max-width: 425px){
			display: block;
			margin-left: 16px;
			margin-right: 16px;
		}
		.left{
			display: grid;
			grid-template-rows:1fr 1fr 1fr;
			height: calc(100vh - 57px);
			top:0;
			grid-column: 1/4;
			position: sticky;
			top: 56px;
			h1{
			font-family: "scillaitalic";
			font-style: italic;
			font-weight: normal;
			font-size: 50px;
			text-transform: uppercase;
			line-height: 97%;
			padding: 0;
			margin: 0;
			}	
			picture{
				height: 100%;
				width: 100%;
				display: block;
				border-radius: 16px;
				overflow: hidden;
				display: flex;
				justify-content:center;
				align-items: center;
				img{
					width: 100%;
				}
			}
			p{
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 97%;
			text-transform: uppercase;
			margin-bottom: 16px;

			color: #9B9999;
			opacity: 0;
			}
			a{
				font-family: "scillaregular";
				font-style: normal;
				font-weight: normal;
				font-size: 50px;
				line-height: 97%;
				text-transform: uppercase;
				text-decoration: none;
				opacity:0;
			}
			#list-links{
				margin: 0;
				height: fit-content;
				margin-top: auto;
				margin-bottom: 57px;
			}
			ul{
				margin:0;
				padding:0;
				margin-top: auto;
				height: fit-content;
				list-style: none;
				li{
					margin:0;
				padding:0;
				a{
					transition: 300ms;
					span{
						display: inline-block;
						transition: 300ms;
					}
					&:hover{
						margin-left: 16px;
						
						color: #9e3b3b;
						span{
							transform: rotate(180deg);
						}
					}
				}
				}
			}
			@media screen and (max-width: 425px){
				height: auto;
				position: initial;
				margin-bottom: 30px;
				display: block;
				h1{
					font-size: 30px;
					margin-bottom: 30px;
				}
				picture{
					display: none; 
				}
				#list-links{
					display: none;
				}
			}
		}
		.right{
			grid-column: 4/9 ;
			opacity:0;
			@media screen and (max-width: 425px){
				grid-column: 1/9;
			}
		}
	}
	h1{
		.line{
			overflow: hidden;
			.word{
				opacity: 0;
			}
		}
		.line, .word{
			display: block;
		}
	}
</style>

<section>
	<div class="left">
		<h1>
			<span class="line"><span class="word">Find</span></span>
			<span class="line"><span class="word">exactly</span></span>
			<span class="line"><span class="word">what You</span></span>
			<span class="line"><span class="word">Want</span></span>
		</h1>
		<picture id="list-picture">
			<img  src={picture ? picture : null} alt="">
		</picture>
		<div id="list-links">
			<p>Social links</p>
			<ul>
				<li><a href="https://www.linkedin.com/in/dona%C3%ABl-walter/" class="word"><span>⁕</span> Linkedin</a></li>
				<li><a href="https://github.com/Donawalt/" class="word">Github <span>⁕</span></a></li>
				<li><a href="https://www.instagram.com/walt_dona/" class="word"><span>⁕</span> Instagram</a></li>
			</ul>
		</div>
	</div>
	<div class="right">
		<CollectionListIndex TitleCollection={"Development"} Articles={devPosts} on:covering={handler}/>
		<CollectionListIndex TitleCollection={"Photography"} Articles={photoPosts} on:covering={handler}/>
		<CollectionListIndex TitleCollection={"Design"} Articles={desPosts} on:covering={handler}/>
	</div>
</section>