<div>
	<nav class="mb-10">
		<ul>
			<li><a href="/web">홈(WEBPAGE)</a></li>
			<li><a href="/web/web01">Web01</a></li>
			<li><a href="/web/web02">Web02</a></li>
			<li><a href="/web/web03">Web03</a></li>
		</ul>
	</nav>
	<div>
		<slot />
	</div>
</div>

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	li {
		float: left;
		padding-right: 10px;
	}

	li a {
		display: block;
		padding: 8px;
		background-color: #dddddd;
	}
</style>
