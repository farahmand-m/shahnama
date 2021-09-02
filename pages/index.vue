<template>
    <div id="container">
        <header id="header" class="has-shadow">
            <div class="level is-mobile">
                <div class="level-left">
                    <div class="buttons is-pulled-left">
                        <button class="button is-white" title="انتخاب فصل" @click="flipChapterSelection">
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
        <the-viewer :hemistiches="selectedHemistiches" :is-loading="isLoading" />
        <transition name="fade">
            <div v-if="isShowing.chapterSelection" id="chapters" class="floating box is-size-7">
                <aside class="menu is-size-7">
                    <ul class="menu-list">
                        <li v-for="chapter in chapters" :key="chapter.start">
                            <a :class="{'is-active': start === chapter.start}" @click="select(chapter)">
                                {{ chapter.title }} ({{ (chapter.end - chapter.start) / 2 }} بیت)
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </transition>
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
            isLoading: true,
            isShowing: { chapterSelection: false }
        }
    },
    async fetch() {
        this.chapters = await this.$axios.$get('https://farahmand-m.github.io/shahnama/data/chapters.json')
        this.hemistiches = await this.$axios.$get('https://farahmand-m.github.io/shahnama/data/hemistiches.json')
        this.isLoading = false
    },
    fetchOnServer: false,
    computed: {
        selectedHemistiches() {
            const start = this.start || 0
            const end = this.end || this.hemistiches.length
            return this.hemistiches.slice(start, end)
        }
    },
    methods: {
        select({ start, end }) {
            if (this.start !== start) {
                this.start = start
                this.end = end
            } else {
                this.start = null
                this.end = null
            }
        },
        flipChapterSelection() {
            this.isShowing.chapterSelection = !this.isShowing.chapterSelection
        },
    },
}
</script>
