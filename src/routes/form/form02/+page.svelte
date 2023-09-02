<!--
    예제(Thirus 7편) : contact-form
    https://github.com/ThirusOfficial/tailwind-css-starter-postcss
    
    tailwind.loadConfigFromFile.cjs에 색상 추가
    const colors = require('tailwindcss/colors');
    cyan: colors.cyan,
	teal: colors.teal
-->

<div class="antialiased bg-gray-100">
	<div class="flex w-full min-h-screen justify-center items-center">
		<div
			class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden"
		>
			<div class="flex flex-col space-y-8 justify-between">
				<div>
					<h1 class="font-bold text-4xl tracking-wide">Contact Us</h1>
					<p class="pt-2 text-cyan-100 text-sm">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nesciunt minus nihil error
						ratione eaque facere illo, asperiores tenetur rem voluptate. Excepturi id harum
						aspernatur cum possimus, magnam nam autem.
					</p>
				</div>
				<div class="flex flex-col space-y-6">
					<div class="inline-flex space-x-2 items-center text-teal-300 text-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>+(123) 4567 9999</span>
					</div>
					<div class="inline-flex space-x-2 items-center text-teal-300 text-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z"
							/>
							<path
								d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z"
							/>
						</svg>

						<span>test@test.com</span>
					</div>
					<div class="inline-flex space-x-2 items-center text-teal-300 text-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>부산시 .... ..... ..... .... . . .... .....</span>
					</div>
				</div>
				<div class="flex space-x-4 text-lg">
					<a href="www.facebook.com"> 페이스북 </a>
					<a href="www.twitter.com"> 트위터 </a>
					<a href="www.instagram.com"> 인스타그림 </a>
					<a href="www.kakao.com"> 카카오 </a>
				</div>
			</div>
			<div class="relative">
				<!-- 원 배치 시작 -->
				<div class="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28" />
				<div class="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16" />
				<!-- 원 배치 끝 -->
				<div class="relative z-10 bg-white rounded-xl shodow-lg p-8 text-gray-600 md:w-80">
					<form action="" class="flex flex-col space-y-4">
						<div>
							<label for="" class="text-sm">Your name</label>
							<input
								type="text"
								placeholder="Your name"
								class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none foucs:ring-2 focus:ring-teal-300"
							/>
						</div>
						<div>
							<label for="" class="text-sm">Email address</label>
							<input
								type="email"
								placeholder="Email Address"
								class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none foucs:ring-2 focus:ring-teal-300"
							/>
						</div>
						<div>
							<label for="" class="text-sm">Message</label>
							<textarea
								rows="4"
								placeholder="Message"
								class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none foucs:ring-2 focus:ring-teal-300"
							/>
						</div>
						<buttom
							type="sumit"
							class="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
							>Send Message</buttom
						>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
