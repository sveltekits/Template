<section class="bg-indigo-50 py-20 text-center">
	<div class="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
		<h2 class="text-2xl font-semibold md:text-3xl">First Example</h2>
		<p class="mx-auto mt-3 max-w-xl text-sm">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</p>

		<!-- Grid 1 begins -->
		<div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
			<div class="grid1-item">
				<span class="bg-yellow-200 ring-yellow-100">
					<span>1</span>
				</span>
				<h3>Ideation</h3>
				<p>Sequi amet? Aut laboriosam harum repellendus fugit!</p>
			</div>

			<div class="grid1-item">
				<span class="bg-blue-200 ring-blue-100">
					<span>2</span>
				</span>
				<h3>Development</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
			</div>

			<div class="grid1-item">
				<span class="bg-pink-200 ring-pink-100">
					<span>3</span>
				</span>
				<h3>Testing</h3>
				<p>Rerum reiciendis eius numquam placeat, blanditiis, hic</p>
			</div>

			<div class="grid1-item">
				<span class="bg-green-200 ring-green-100">
					<span>4</span>
				</span>
				<h3>Deployment</h3>
				<p>Labore nam dolorum magni nostrum adipisci.</p>
			</div>
		</div>
		<!-- Grid 1 ends -->
	</div>
</section>

<style>
	.grid1-item > span {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		height: 2rem;
		width: 2rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
			var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width))
			var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
	}

	.grid1-item > span > span {
		margin: auto;
	}

	.grid1-item h3 {
		margin-top: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}

	.grid1-item p {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
