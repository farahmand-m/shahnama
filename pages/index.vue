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
                        <button class="button is-white" title="جستجو در ابیات" @click="flipSearchForm">
                            <span class="icon"><i class="mdi mdi-magnify" /></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <the-viewer ref="viewer" :hemistiches="selectedHemistiches" :is-loading="isLoading" @selected="alterViewing" />
        <transition name="fade">
            <div v-if="isShowing.chapterSelection" id="chapters" class="floating box">
                <aside class="menu is-size-7">
                    <ul class="menu-list">
                        <li v-for="chapter in chapters" :key="chapter.start">
                            <a :class="{'is-active': start === chapter.start}" @click="selectedChapter(chapter)">
                                {{ chapter.title }} ({{ (chapter.end - chapter.start) / 2 }} بیت)
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="isShowing.searchForm" id="search" class="floating box" @submit.prevent="search">
                <form class="is-size-7">
                    <div class="field">
                        <div class="control">
                            <input
                                v-model="query"
                                class="input is-small" type="text" placeholder="عبارت جستجو..."
                                @keydown.esc="isShowing.searchForm = false"
                            >
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <p class="control is-expanded">
                            <button name="next" class="button is-light is-small is-fullwidth">
                                <span class="icon"><i class="mdi mdi-arrow-right-thick" /></span>
                                <span>بعدی</span>
                            </button>
                        </p>
                        <p class="control is-expanded">
                            <button name="previous" class="button is-light is-small is-fullwidth">
                                <span>قبلی</span>
                                <span class="icon"><i class="mdi mdi-arrow-left-thick" /></span>
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="isShowing.notFoundError" id="not-found" class="floating">
                <div class="message is-danger">
                    <div class="message-body is-size-7">
                        چنین کلمه‌ای یافت نشد!
                    </div>
                </div>
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
            viewing: null,
            query: '',
            isShowing: {
                chapterSelection: false,
                searchForm: false,
                notFoundError: false,
            },
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
        selectedChapter({ start, end }) {
            if (this.start !== start) {
                this.start = start
                this.end = end
            } else {
                this.start = null
                this.end = null
            }
            this.viewing = null
        },
        flipChapterSelection() {
            this.isShowing.chapterSelection = !this.isShowing.chapterSelection
        },
        flipSearchForm() {
            this.viewing = null
            this.isShowing.searchForm = !this.isShowing.searchForm
        },
        search({ submitter }) {
            let hemistiches = this.selectedHemistiches.map((element, index) => [element, index])
            hemistiches =  hemistiches.slice(this.viewing || 0, hemistiches.length).concat(hemistiches.slice(0, this.viewing || 0))
            if (submitter.name === 'previous')
                hemistiches.reverse()
            const tuple = hemistiches.find(tuple => tuple[0].includes(this.query) && tuple[1] !== this.viewing)
            if (tuple) {
                this.viewing = tuple[1]
                this.$refs.viewer.jumpTo(tuple[1])
            } else {
                this.isShowing.notFoundError = true
                setTimeout(() => {
                    this.isShowing.notFoundError = false
                }, 2000)
            }
        },
        alterViewing(index) {
            this.viewing = index
        },
    },
}
</script>
