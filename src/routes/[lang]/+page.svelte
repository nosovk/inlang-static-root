<script lang="ts">
	import { i, route } from '@inlang/sdk-js'
</script>

<main class="container">
	<h1>{i("welcome")}</h1>
	<p>{i("Visit")} <a href={route("/terms")}>{i("terms")}</a> {i("and")} <a href={route("/privacy")}>{i("privacy")}</a> {i("pages")}</p>
</main>
