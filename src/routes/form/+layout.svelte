<div>
	<nav class="mb-10">
		<ul>
			<li><a href="/form">홈(FORM)</a></li>
			<li><a href="/form/form01">로그인폼</a></li>
			<li><a href="/form/form02">회원가입</a></li>
			<li><a href="/form/form03">이메일등록</a></li>
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
