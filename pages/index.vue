<template>
    <div id="container">
        <header id="header" class="has-shadow">
            <div class="level is-mobile">
                <div class="level-left">
                    <div class="buttons is-pulled-left">
                        <button class="button is-white" title="انتخاب فصل">
                            <span class="icon"><i class="mdi mdi-format-list-checkbox" /></span>
                        </button>
                    </div>
                </div>
                <div class="level-item">
                    <h1 class="title is-6">شاهنامه فردوسی</h1>
                </div>
                <div class="level-right">
                    <div class="buttons is-pulled-left">
                        <button class="button is-white" title="جستجو در متن">
                            <span class="icon"><i class="mdi mdi-magnify" /></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <the-viewer :hemistiches="selectedHemistiches" :is-loading="$fetchState.pending" />
    </div>
</template>

<script>
import TheViewer from '@/components/TheViewer'

export default {
    components: {TheViewer},
    data() {
        return {
            hemistiches: [],
            chapters: [],
            start: null,
            end: null,
        }
    },
    async fetch() {
        this.chapters = await this.$axios.$get('data/chapters.json')
        this.hemistiches = await this.$axios.$get('data/hemistiches.json')
    },
    computed: {
        selectedHemistiches() {
            const start = this.start || 0
            const end = this.end || this.hemistiches.length
            return this.hemistiches.slice(start, end)
        }
    },
    fetchOnServer: false
}
</script>
