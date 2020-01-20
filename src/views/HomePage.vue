<template>
	<v-container>
		<v-container :key="i" v-for="(story,i) in stories">
			<v-card>
				<v-card-title class="font-weight-bold justify-center">{{story.title}}</v-card-title>
				<v-container class="px-4">
					<p class="pre-formatted">{{story.content}}</p>
				</v-container>
				<v-card-text v-if="story.author">By - {{story.author}}</v-card-text>
			</v-card>
		</v-container>

	</v-container>
</template>

<script>
import {stories} from "./config/config";
import {db} from "./../db";

export default {
    name: "HomePage",
    data() {
        return {
            stories: stories
        }
    },
    firestore: {
        stories: db.collection('stories'),
    },

}
</script>

<style scoped>
	.pre-formatted {
		white-space: pre-wrap;
	}
</style>
