<template>
	<v-container>
		<v-container :key="i" v-for="(story,i) in stories">
			<v-card >
				<v-card-title class="font-weight-bold">{{story.title}}</v-card-title>
				<v-container class="px-4">
					<p class="pre-formatted">{{story.content}}</p>
				</v-container>
			</v-card>
		</v-container>

	</v-container>
</template>

<script>
import {stories} from "./config/config";

export default {
    name: "HomePage",
    data() {
        return {
            stories: stories
        }
    }

}
</script>

<style scoped>
	.pre-formatted {
		white-space: pre-wrap;
	}
</style>
