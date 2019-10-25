<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense nav>
				<v-list-item href="/" nuxt>
					<v-list-item-action>
						Home
					</v-list-item-action>
				</v-list-item>
				<v-list-item href="/places" nuxt>
					<v-list-item-action>
						where we are
					</v-list-item-action>
				</v-list-item>
				<v-list-item href="/technical" nuxt>
					<v-list-item-action>
						Technical Info
					</v-list-item-action>
				</v-list-item>
				<v-list-item href="/nominet" nuxt>
					<v-list-item-action>
						Nominet
					</v-list-item-action>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app height="140px" short:true>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Gigastream plc</v-toolbar-title>
			<v-spacer></v-spacer>
			<nuxt-link to="/">
				<img class="mt-1" height="117px" width="150px" src="/gigastreamLogo.png"
			/></nuxt-link>
		</v-app-bar>

		<v-content>
			<v-container fluid>
				<nuxt />
			</v-container>
		</v-content>

		<v-footer app>
			<span>&copy; Gigastream plc 2019</span>
			<v-spacer></v-spacer
			><span class="caption"
				>The Gigastream logo is a registered trade mark of Gigastream plc.</span
			>
		</v-footer>
	</v-app>
</template>

<style>
.h2 {
	color: #f8981d;
}
</style>



<script>
export default {
	props: {
		source: String,
	},
	data: () => ({
		drawer: false,
	}),
};
</script>



