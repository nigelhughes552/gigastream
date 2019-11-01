<template>
	<div>
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense nav>
				<v-list-item href="/" nuxt>
					<v-list-item-action>
						Home
					</v-list-item-action>
				</v-list-item>
				<v-list-item href="/places" nuxt>
					<v-list-item-action>
						Where we are
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

		<v-app-bar app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Gigastream plc</v-toolbar-title>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
	}),
};
</script>

<style>
</style>