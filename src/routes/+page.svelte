<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { MapPinIcon, MailIcon, HouseIcon } from 'lucide-svelte';
</script>

<div class="col-span-1 row-span-1 flex flex-col gap-8 bg-slate-900 p-6 text-stone-50">
	<h2 class="text-xl font-bold">
		{m.subtitle()} <br />
		{m.title()}
	</h2>
	<h1 class="text-base font-bold">
		Pierre <br />
		Lespingal
	</h1>
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<MapPinIcon class="h-4 w-4"></MapPinIcon>Strasbourg, France
		</div>
		<a
			class="flex items-center gap-2"
			href="mailto:pierre.lespingal@gmail.com"
			target="_blank"
			rel="noopener noreferrer"
		>
			<MailIcon class="h-4 w-4"></MailIcon>pierre.lespingal@gmail.com
		</a>
		<a
			class="flex items-center gap-2"
			href="https://pierrelespingal.com"
			target="_blank"
			rel="noopener noreferrer"
		>
			<HouseIcon class="h-4 w-4"></HouseIcon>pierrelespingal.com
		</a>
	</div>
</div>
<div class="col-span-2 row-span-2 flex flex-col gap-2 border-l-2 border-slate-900 p-4 pt-4">
	<div class="-translate-x-[5.3rem]">
		<div
			class="float-left mr-8 h-32 w-32 rounded-full border-2 border-slate-900 bg-stone-50"
			style:shape-outside="circle()"
		>
			<img src="/favicon.png" alt="profil" class="scale-95" />
		</div>
		<p class="w-[110%] pt-4">
			{m.description()}<br />{m.description_end()}
		</p>
	</div>
	<h3 class="text-xl font-bold">{m.xp()}</h3>
	<ul class="flex flex-col gap-2 pl-4">
		<li class="flex flex-col">
			<p class="text-sm">{m.xp_freelance()}</p>
			<ul class="pl-4">
				<li class="flex gap-2">
					<a class="font-bold underline" href="https://3ducation.fr/nos-services/#maquette"
						>{m.xp_freelance_3ducation()}</a
					>
					<p class="text-slate-600">{m.xp_freelance_3ducation_description()}</p>
				</li>
			</ul>
			<p class="text-slate-600">{m.xp_freelance_date()}</p>
		</li>

		<li class="flex flex-col">
			<p class="text-sm">{m.projects()}</p>
			<ul class="pl-4">
				<li class="flex gap-2">
					<a href="https://pierreleblond.github.io/feis/build/" class="font-bold underline"
						>{m.projects_feis()}</a
					>
					<p class="text-slate-600">{m.projects_feis_description()}</p>
				</li>
				<li class="flex gap-2">
					<a href="https://pierrelespingal.com" class="font-bold underline"
						>{m.projects_portfolio()}</a
					>
					<p class="text-slate-600">{m.projects_portfolio_description()}</p>
				</li>
				<li class="flex gap-2">
					<p class="font-bold">{m.projects_teamup()}</p>
					<p class="text-slate-600">{m.projects_teamup_description()}</p>
				</li>
				<li class="flex gap-2">
					<a href="https://recipes.pierrelespingal.com" class="font-bold underline"
						>{m.projects_recipes()}</a
					>
					<p class="text-slate-600">{m.projects_recipes_description()}</p>
				</li>
				<li class="flex gap-2">
					<a
						href="https://ustom.pierrelespingal.com?encryptedWord=ced5d7a4605cdc937e&iv=dc942b84844f0a0c68da7c7f2c7b602e"
						class="font-bold underline">{m.projects_ustom()}</a
					>
					<p class="text-slate-600">{m.projects_ustom_description()}</p>
				</li>
				<li class="flex gap-2">
					<a href="https://quests.pierrelespingal.com" class="font-bold underline"
						>{m.projects_quests()}</a
					>
					<p class="text-slate-600">{m.projects_quests_description()}</p>
				</li>
				<li class="flex gap-2">
					<p class="font-bold">{m.projects_spaute()}</p>
					<p class="text-slate-600">{m.projects_spaute_description()}</p>
				</li>
				<li class="flex gap-2">
					<p class="font-bold">{m.projects_eyecare()}</p>
					<p class="text-slate-600">{m.projects_eyecare_description()}</p>
				</li>
			</ul>
			<p class="text-slate-600">{m.projects_date()}</p>
		</li>

		<li class="flex flex-col">
			<p class="text-sm">{m.pause()}</p>
			<ul class="pl-4">
				<li class="flex gap-2">
					<p class="font-bold">{m.pause_bar()}</p>
				</li>
				<li class="flex gap-2">
					<p class="font-bold">{m.pause_wood()}</p>
				</li>
				<li class="flex gap-2">
					<p class="font-bold">{m.pause_teaching()}</p>
					<p class="text-slate-600">{m.pause_teaching_description()}</p>
				</li>
				<li class="flex gap-2">
					<p class="font-bold">{m.pause_anim()}</p>
				</li>
			</ul>
			<p class=" text-slate-600">{m.pause_date()}</p>
		</li>

		<li class="flex flex-col">
			<div class="flex gap-2 text-sm">
				<p>{m.feis()}</p>
			</div>
			<p class=" text-slate-600">{m.feis_date()}</p>
		</li>

		<li class="flex flex-col">
			<div class="flex gap-2 text-sm">
				<p>{m.hapticmedia()}</p>
			</div>
			<ul class="pl-4">
				<li class="flex gap-2">
					<p class="font-bold">{m.hapticmedia_engine()}</p>
					<p class="text-slate-600">{m.hapticmedia_engine_description()}</p>
				</li>
				<li class="flex gap-2">
					<p class="font-bold">{m.hapticmedia_decimate()}</p>
					<p class="text-slate-600">{m.hapticmedia_decimate_description()}</p>
				</li>
			</ul>
			<p class="text-slate-600">{m.hapticmedia_date()}</p>
		</li>

		<li class="flex flex-col">
			<div class="flex gap-2 text-sm">
				<p>{m.bde()}</p>
			</div>
			<p class=" text-slate-600">{m.bde_date()}</p>
		</li>
	</ul>
</div>

<div class="col-span-1 row-span-2 p-4">
	<h3 class="pb-4 text-xl font-bold text-slate-900">{m.knowledge()}</h3>
	<ul class="flex flex-col gap-2">
		<li class="flex flex-col">
			<ul class="flex flex-col gap-1 pt-2 pl-4">
				<li class="flex items-center gap-2 font-bold">
					{m.knowledge_french()}
				</li>
				<li class="flex items-center gap-2">
					{m.knowledge_english()}
				</li>
			</ul>
		</li>

		<li class="flex flex-col">
			<p class="text-sm">{m.knowledge_tools()}</p>
			<ul class="flex flex-col gap-1 pt-2 pl-4">
				<li class="flex items-center gap-2 font-bold">linux - archlinux</li>
				<li class="flex items-center gap-2 font-bold">vscode - nvim</li>
				<li class="flex items-center gap-2 font-bold">git</li>
				<li class="flex items-center gap-2">docker</li>
			</ul>
		</li>

		<li class="flex flex-col">
			<p class="text-sm">{m.knowledge_languages()}</p>
			<ul class="flex flex-col gap-1 pt-2 pl-4">
				<li class="flex items-center gap-2 font-bold">typescript & javascript</li>
				<li class="flex items-center gap-2 font-bold">html & css</li>
				<li class="flex items-center gap-2">c#</li>
				<li class="flex items-center gap-2">c++</li>
				<li class="flex items-center gap-2 font-thin">sql</li>
			</ul>
		</li>

		<li class="flex flex-col">
			<p class="text-sm">Frameworks</p>
			<ul class="flex flex-col gap-1 pt-2 pl-4">
				<li class="flex items-center gap-2 font-bold">svelte & sveltekit</li>
				<li class="flex items-center gap-2">react & next.js</li>
				<li class="flex items-center gap-2 font-thin">.net</li>
			</ul>
		</li>

		<li class="flex flex-col">
			<p class="text-sm">{m.knowledge_libraries()}</p>
			<ul class="flex flex-col gap-1 pt-2 pl-4">
				<li class="flex items-center gap-2 font-bold">webgl</li>
				<li class="flex items-center gap-2">tailwindcss</li>
				<li class="flex items-center gap-2">prisma</li>
				<li class="flex items-center gap-2 font-thin">trpc</li>
			</ul>
		</li>

		<li class="flex flex-col">
			<p class="text-sm">{m.knowledge_practices()}</p>
			<ul class="flex flex-col gap-1 pt-2 pl-4">
				<li class="flex items-center gap-2">
					{m.knowledge_practices_ci()}
				</li>
				<li class="flex items-center gap-2">
					{m.knowledge_practices_clean()}
				</li>
				<li class="flex items-center gap-2 font-thin">
					{m.knowledge_practices_ttd()}
				</li>
			</ul>
		</li>
	</ul>
</div>

<div class="col-span-2 row-span-1 flex flex-col gap-4 bg-slate-900 p-4 text-slate-50">
	<h3 class="text-xl font-bold">{m.education()}</h3>
	<ul class="flex flex-col gap-2 pl-4">
		<li class="flex flex-col">
			<p class="text-sm">{m.education_ensiie()}</p>
			<p>{m.education_ensiie_description()}</p>
			<p class="font-bold text-slate-400">{m.education_ensiie_date()}</p>
		</li>
		<li class="flex flex-col">
			<p class="text-sm">{m.education_fac()}</p>
			<p>{m.education_fac_description()}</p>
			<p class="font-bold text-slate-400">{m.education_fac_date()}</p>
		</li>
		<li class="flex flex-col">
			<p class="text-sm">{m.education_prep()}</p>
			<p>{m.education_prep_description()}</p>
			<p class="font-bold text-slate-400">{m.education_prep_date()}</p>
		</li>
	</ul>
</div>
