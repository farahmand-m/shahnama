<template>
    <div id="container">
        <header id="header" class="has-shadow">
            <div class="level">
                <div class="level-left">
                    Left
                </div>
                <div class="level-item">
                    <h1 class="title is-6">شاهنامه فردوسی</h1>
                </div>
                <div class="level-right">
                    Right
                </div>
            </div>
        </header>
        <aside id="sidebar" class="has-shadow is-hidden">Sidebar</aside>
        <main id="content" :class="{'has-contents': hemistiches.length}">
            <p v-if="$fetchState.pending" class="has-text-centered">
                <i class="mdi mdi-loading mdi-spin mdi-48px"></i>
            </p>
            <template v-else>
                <div v-for="(hemistich, index) in hemistiches" :key="index" class="hemistich">
                    {{ hemistich }}
                </div>
            </template>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chapters: [],
            hemistiches: []
        }
    },
    async fetch() {
        this.chapters = await this.$axios.$get('data/chapters.json')
        this.hemistiches = await this.$axios.$get('data/hemistiches.json')
    },
    fetchOnServer: false
}
</script>
