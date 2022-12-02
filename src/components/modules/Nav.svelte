<script>
	export let segment;
</script>

<style lang='scss'>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 500;
		padding-left: 32px;
		padding-right: 32px;
		z-index: 1000;
		display: grid ;
		grid-template-columns: 1fr 1fr 1fr;
		@media screen and (max-width: 1024px){
            // Petit Desktop
        }
        @media screen and (max-width: 768px){
            // Tablette
        }
        @media screen and (max-width: 425px){
            // Mobile
			padding-left: 16px;
			padding-right: 16px;
			a{
				font-size: 14px;
			}
        }
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: white;
		font-size: 16px;
		width: fit-content;
		margin-right: auto;
			margin-left: 0;
		&:nth-child(3){
			width: fit-content;
			text-align: right;
			margin-left: auto;
			margin-right: 0;
		}
	}
	.logo{
		font-family: 'scillaregular', 'Times New Roman', Times, serif;
		color: white;
		text-transform: uppercase;
		text-align: center;
		margin: auto;
	}
</style>

<nav>
	<a aria-current="{segment === 'indexlist' ? 'page' : undefined}" href='/indexlist'>Index</a>
	<a  href='/' class="logo">Donaël Walter</a>
	<a aria-current="{segment === 'about' ? 'page' : undefined}" href='/about'>About</a>
</nav>
