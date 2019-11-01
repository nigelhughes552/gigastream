<template>
	<v-app>
		<navigation></navigation>
		<v-content>
			<v-container>
				<v-row style="margin-top:70px;" justify="end">
					<nuxt-link to="/"> <img height="117px" width="150px" src="/gigastreamLogo.png"/></nuxt-link>
				</v-row>
				<nuxt />
			</v-container>
		</v-content>
<gigastream-footer></gigastream-footer>
		
	</v-app>
</template>

<script>
import Navigation from '~/components/Navigation';
import GigastreamFooter from '~/components/GigastreamFooter'
export default {
	components: {
    Navigation,
    GigastreamFooter
	},
};
</script>
